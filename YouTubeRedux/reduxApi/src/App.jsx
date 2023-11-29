import * as React from "react";

import "./App.css";
import { useGetPokemonByNameQuery } from "./component/pokemon";

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetPokemonByNameQuery("posts");
  const { data, error, isLoading } = useGetPokemonByNameQuery("posts");
  console.log(data);

  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>All Data Length {data.length}</h1>
          {data.map((elem) => {
            return (
              <div key={elem.id}>
                <p>{elem.title}</p>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}
