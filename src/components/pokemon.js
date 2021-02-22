import React from "react";

export default function pokemon(props) {
  return (
    <div>
      <h1>Pokemon Name: {props.name}</h1>
      <p>Weight: {props.weight}</p>
      <p>Awesome: {props.awesome}</p>
      <p>Terrifying: {props.terrifying}</p>
      <p>
        Abilities:
        {props.abilities.map((ability) => {
          return <span>{ability}, </span>;
        })}
      </p>
    </div>
  );
}
