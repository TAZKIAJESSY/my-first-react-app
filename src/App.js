import Title from "./components/title";
import Pokemon from "./components/pokemon/pokemon";
import "./App.css";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true ? "YES" : "NO",
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="container">
      <Title content="Pokemon Details" />

      <div className="row">
        {all_pokemon.map((Poke) => {
          return (
            <div className="col-lg-3">
              <Pokemon
                name={Poke.name}
                weight={Poke.weight}
                awesome={Poke.awesome}
                terrifying={Poke.terrifying}
                abilities={Poke.abilities}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
