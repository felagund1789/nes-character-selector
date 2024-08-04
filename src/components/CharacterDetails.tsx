import characters from "../data/characters.json";

interface Props {
  name: string;
  description: string;
}

const CharacterDetails = ({ name, description }: Props) => {
  const games = characters.find((c) => c.name === name)?.games || [];

  return (
    <div className="nes-container with-title character-details">
      <h2 className="title">{name}</h2>
      <p>{description}</p>
      <h4>Games list:</h4>
      <ul className="nes-list is-disc">
        {games.map((game) => (
          <li>{game}</li>
        ))}
      </ul>
      <i className={`nes-icon is-small nes-${name.toLowerCase()}`} />
    </div>
  );
};

export default CharacterDetails;
