interface Props {
  games: string[];
}

const GamesList = ({ games }: Props) => {
  return (
    <div className="nes-container with-title character-details">
      <h2 className="title">Games list</h2>
      <ul className="nes-list is-disc">
        {games.map((game) => (
          <li>{game}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesList;
