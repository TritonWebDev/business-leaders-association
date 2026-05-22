type BoardProfileProps = {
  name: string;
  role: string;
  image?: string;
};

export function BoardProfile({ name, role, image }: BoardProfileProps) {
    return (
        <div className="board-profile">
            <img src={image ? image : "images/circle-user-solid-full.svg"} width="100px" alt={image ? "Board Member photo" : "default photo"}/>
            <h3>{name}</h3>
            <h4>{role}</h4>
        </div>
    )
}