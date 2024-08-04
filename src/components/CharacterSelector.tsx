import characters from "../data/characters.json";

const CharacterSelector = () => {
  return (
    <div className="nes-container with-title character-selector">
      <p className="title">Choose your favorite character:</p>
      <form>
        {characters.map((char) => (
          <div key={char.name}>
            <label>
              <input
                type="radio"
                name="character"
                className="nes-radio"
                value={char.name}
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
