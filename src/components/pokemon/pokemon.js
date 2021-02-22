import React from "react";
import "./pokemon.scss";

function Pokemon(props) {
  return (
    <div className="Pokemon shadow-lg mb-4">
      <div className="card-body pb-0">
        <h5 className="card-title">Pokemon Name: {props.name}</h5>
        <h6 className="card-subtitile mb-3 text-primary">
          Awesome: {props.awesome ? "An awesome pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying:
          {props.terrifying ? "YES" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities:
        </p>
      </div>

      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}

export default Pokemon;
