import type { BoardContent } from "@/lib/types";
import { BoardProfile } from "./board-profile"
import "./board-section.css";


type BoardSectionProps = {
  content: BoardContent;
};

export function BoardSection({ content }: BoardSectionProps) {
  const firstRow = content.members.slice(0,4);
  const secondRow = content.members.slice(4);

  return (
    <div className="board-section">
      <h2>{content.title}</h2>
      <h1>{content.eyebrow}</h1>
      <div className="members-first-row">
        {firstRow.map((member) =>(
          <BoardProfile key={member.name} name={member.name} role={member.role} image={member.image}/>
        ))}
      </div>
      <hr />
      <div className="members-second-row">
        {secondRow.map((member) =>(
          <BoardProfile key={member.name} name={member.name} role={member.role} image={member.image}/>
        ))}
      </div>

    </div>
  );
}
