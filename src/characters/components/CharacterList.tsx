import { CharacterItem } from "./CharacterItem";
import "./styles/CharacterList.css";

export const CharacterList: React.FC<any> = (props) => {
  if (!props.characters) return null;
  return (
    <div className="character-list">
      {props.characters?.map((character: any) => {
        return <CharacterItem key={character.id} character={character} />;
      })}
    </div>
  );
};
