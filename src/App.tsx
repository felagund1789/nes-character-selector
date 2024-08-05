import "nes.css/css/nes.min.css";
import { useEffect, useState } from "react";
import CharacterSelector from "./components/CharacterSelector";
import CharacterDetails from "./components/CharacterDetails";
import characters from "./data/characters.json";
import GamesList from "./components/GamesList";
import MessageDialog from "./components/MessageDialog";
import PowerUpsSelector from "./components/PowerUpsSelector";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);
  const [characterName, setCharacterName] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  const [characterGames, setCharacterGames] = useState<string[]>([]);
  const [powerUps, setPowerUps] = useState<string[]>([]);

  useEffect(() => {
    const char = characters.find((c) => c.name === characterName);
    setCharacterDescription(char?.description || "");
    setCharacterGames(char?.games || []);
  }, [characterName]);

  const onSelectPowerUp = (powerUp: string) => {
    powerUps.includes(powerUp)
      ? setPowerUps(powerUps.filter((p) => p !== powerUp))
      : setPowerUps([...powerUps, powerUp]);
  };

  const submitSelection = () => {
    if (!characterName) {
      setError("You must select a character.");
      return;
    }
    setSuccess(true);
  };

  return (
    <>
      <header className="header">
        <div className="nes-icon nes-logo"></div>
        <h1>NES Character Selector</h1>
      </header>
      <main className="content">
        {error && (
          <MessageDialog
            title="Error"
            text={error}
            onClose={() => setError("")}
          />
        )}
        {success && (
          <MessageDialog
            title="Success"
            text="Your character of choice has been submitted!"
            onClose={() => setSuccess(null)}
          />
        )}
        <CharacterSelector
          onSelectCharacter={(name) => setCharacterName(name)}
        />
        {characterDescription && (
          <CharacterDetails
            name={characterName}
            description={characterDescription}
          />
        )}
        {characterGames.length > 0 && <GamesList games={characterGames} />}
        {characterName && (
          <PowerUpsSelector
            characterName={characterName}
            onSelectPowerUp={onSelectPowerUp}
          />
        )}
        <div className="center">
          <button className="nes-btn is-success" onClick={submitSelection}>
            Submit
          </button>
        </div>
      </main>
      <footer className="footer">
        Built as a proof of concept to explore the capabilities of{" "}
        <a href="https://github.com/nostalgic-css/NES.css">NES.css</a> and
        React. Not intended for commercial use.
      </footer>
    </>
  );
}

export default App;
