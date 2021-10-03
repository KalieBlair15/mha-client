import { useEffect, useState } from "react";
import { CharacterList } from "./characters/components/CharacterList";
import "./App.css";

export const App = () => {
  const [characters, setCharacters] = useState<any>(null);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch(
        "https://myheroacademiaapi.com/api/character"
      );
      const data = await response.json();
      console.log(data);
      setCharacters(data.result);
    }
    getCharacters();
  }, []);

  const isCharacters = characters && characters.length > 0;

  return (
    <div className="app container bg-success p-2 text-dark">
      {isCharacters && <CharacterList characters={characters} />}
    </div>
  );
};
