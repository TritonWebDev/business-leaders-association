import { addSubscriber } from "@/lib/newsletter-storage";
import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim() ?? "";

    if (!email || email === "your@email.com" || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    await addSubscriber(email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unable to save subscription." }, { status: 500 });
  }
}
