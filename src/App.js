import Title from "./components/Title";
import Pokemon from "./components/pokemon";
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
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        {/* TODO map over the pokemon here */}

        {all_pokemon.map((poke) => {
          return (
            <Pokemon
              name={poke.name}
              weight={poke.weight}
              awesome={poke.awesome}
              terrifying={poke.terrifying}
              abilities={poke.abilities}
            />
          );
        })}

        <all_pokemon />
      </main>
    </div>
  );
}

export default App;
