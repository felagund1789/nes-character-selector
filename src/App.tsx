import "nes.css/css/nes.min.css";
import { useEffect, useState } from "react";
import CharacterSelector from "./components/CharacterSelector";
import CharacterDetails from "./components/CharacterDetails";
import characters from "./data/characters.json";
import GamesList from "./components/GamesList";

function App() {
  const [characterName, setCharacterName] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  const [characterGames, setCharacterGames] = useState<string[]>([]);

  useEffect(() => {
    const char = characters.find((c) => c.name === characterName);
    setCharacterDescription(char?.description || "");
    setCharacterGames(char?.games || []);
  }, [characterName]);

  return (
    <>
      <header className="header">
        <div className="nes-icon nes-logo"></div>
        <h1>NES Character Selector</h1>
      </header>
      <main className="content">
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
