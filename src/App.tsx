import "nes.css/css/nes.min.css";
import { useEffect, useState } from "react";
import CharacterSelector from "./components/CharacterSelector";
import CharacterDetails from "./components/CharacterDetails";
import characters from "./data/characters.json";

function App() {
  const [characterName, setCharacterName] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  useEffect(() => {
    console.log(characterName);
    setCharacterDescription(
      characters.find((c) => c.name === characterName)?.description || ""
    );
  }, [characterName]);

  return (
    <>
      <CharacterSelector onSelectCharacter={(name) => setCharacterName(name)} />
      <CharacterDetails
        name={characterName}
        description={characterDescription}
      />
    </>
  );
}

export default App;
