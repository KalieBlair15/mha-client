import "./styles/CharacterItem.css";

export const CharacterItem: React.FC<any> = (props) => {
  //   return <div>{props.character.name ?? "Name N/A"}</div>;

  return (
    <div className="character-item card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );

  //   return (
  // <div className="character-item card mx-auto my-3">
  //   <img src={props.character.images[0]} className="card-img-top" alt="..." />
  //   <div className="card-body">
  //     <h5 className="card-title character-item-title">
  //       {props.character.name ?? "Name N/A"}
  //     </h5>
  //     <p className="card-text">
  //       Some quick example text to build on the card title and make up the
  //       bulk of the card's content.
  //     </p>
  //     <a href="#" className="btn btn-primary">
  //       Go somewhere
  //     </a>
  //   </div>
  // </div>
  //   );
};
