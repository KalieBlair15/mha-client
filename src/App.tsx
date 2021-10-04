import { useEffect, useState } from "react";
import { CharacterList } from "./characters/components/CharacterList";
import "./App.css";
import { Character, CharactersResult, isCharacters } from "./characters/types";
import { isArrayPopulated } from "./app/types";

export const App = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch(
        "https://myheroacademiaapi.com/api/character"
      );
      const data: CharactersResult = await response.json();
      if (!isCharacters(data.result)) {
        return;
      }
      setCharacters(data.result);
    }
    getCharacters();
  }, []);

  return (
    <div className="app container bg-success p-2 text-dark">
      {isArrayPopulated(characters) ? (
        <CharacterList characters={characters} />
      ) : (
        <div className="p-2 text-dark text-center">Loading...</div>
      )}
    </div>
  );
};
