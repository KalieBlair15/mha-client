import { Character } from "../types";
import { CharacterItem } from "./CharacterItem";
import "./styles/CharacterList.css";

export type CharacterListProps = {
  characters: Character[];
};

export const CharacterList: React.FC<CharacterListProps> = (props) => {
  if (!props.characters) return null;
  return (
    <div className="character-list">
      {props.characters?.map((character: Character) => {
        return <CharacterItem key={character.id} character={character} />;
      })}
    </div>
  );
};
