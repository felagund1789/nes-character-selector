import characters from "../data/characters.json";
import powerUps from "../data/power-ups.json";

interface Props {
  characterName: string;
  onSelectPowerUp: (powerUp: string) => void;
}

const PowerUpsSelector = ({ characterName, onSelectPowerUp }: Props) => {
  const character = characters.find((c) => c.name === characterName);

  return (
    <div className="nes-container with-title power-ups-selector">
      <h2 className="title">Choose your favorite power-ups:</h2>
      <form>
        {powerUps
          .filter((p) =>
            p.games.some((game) => character?.games.includes(game))
          )
          .map((powerUp) => (
            <div key={powerUp.name}>
              <label>
                <input
                  type="checkbox"
                  name="powerUps"
                  className="nes-checkbox"
                  value={powerUp.name}
                  onChange={(event) =>
                    onSelectPowerUp(event.currentTarget.value)
                  }
                />
                <span>{powerUp.name} - {powerUp.description}</span>
              </label>
            </div>
          ))}
      </form>
    </div>
  );
};

export default PowerUpsSelector;
