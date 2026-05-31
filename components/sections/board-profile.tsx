type BoardProfileProps = {
  name: string;
  role: string;
  image?: string;
};

export function BoardProfile({ name, role, image }: BoardProfileProps) {
  return (
    <div className="board-profile">
      <img
        className="board-profile__avatar"
        src={image ? image : "/images/circle-user-solid-full.svg"}
        alt={image ? `${name} photo` : "Default board member photo"}
      />
      <h3 className="board-profile__name">{name}</h3>
      <h4 className="board-profile__role">{role}</h4>
    </div>
  );
}
