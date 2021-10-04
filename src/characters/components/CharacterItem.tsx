import { Character } from "../types";
import "./styles/CharacterItem.css";

export type CharacterItemProps = {
  character: Character;
};

export const CharacterItem: React.FC<CharacterItemProps> = (props) => {
  const name = props.character.name ?? "N/A";

  return (
    <div className="character-item card mx-auto my-3">
      <img
        src={props.character.images[1]}
        className="character-item-img card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="character-item-description card-text">
          {props.character.description}
        </p>
        <button
          onClick={() => console.log("clicked...")}
          className="btn btn-primary"
        >
          Go somewhere
        </button>
      </div>
    </div>
  );
};
