import { promises as fs } from "fs";
import path from "path";

export type NewsletterSubscriber = {
  email: string;
  subscribedAt: string;
};

const DATA_PATH = path.join(process.cwd(), "data", "newsletter-subscribers.json");

export async function readSubscribers(): Promise<NewsletterSubscriber[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (entry): entry is NewsletterSubscriber =>
        typeof entry === "object" &&
        entry !== null &&
        "email" in entry &&
        typeof (entry as NewsletterSubscriber).email === "string",
    );
  } catch {
    return [];
  }
}

export async function addSubscriber(email: string): Promise<NewsletterSubscriber[]> {
  const subscribers = await readSubscribers();
  const normalized = email.trim().toLowerCase();

  if (subscribers.some((entry) => entry.email === normalized)) {
    return subscribers;
  }

  const updated: NewsletterSubscriber[] = [
    ...subscribers,
    { email: normalized, subscribedAt: new Date().toISOString() },
  ];

  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, `${JSON.stringify(updated, null, 2)}\n`, "utf-8");

  return updated;
}
