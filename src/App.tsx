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
      <CharacterSelector onSelectCharacter={(name) => setCharacterName(name)} />
      {characterDescription && (
        <CharacterDetails
          name={characterName}
          description={characterDescription}
        />
      )}
      {characterGames.length > 0 && <GamesList games={characterGames} />}
    </>
  );
}

export default App;
