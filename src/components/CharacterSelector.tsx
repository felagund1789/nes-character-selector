import characters from "../data/characters.json";

interface Props {
  onSelectCharacter: (characterName: string) => void;
}

const CharacterSelector = ({ onSelectCharacter }: Props) => {
  return (
    <div className="nes-container with-title character-selector">
      <h2 className="title">Choose your favorite character:</h2>
      <form>
        {characters.map((char) => (
          <div key={char.name}>
            <label>
              <input
                type="radio"
                name="character"
                className="nes-radio"
                value={char.name}
                onChange={(event) => onSelectCharacter(event.currentTarget.value)}
              />
              <span>{char.name}</span>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CharacterSelector;
