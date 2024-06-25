import * as React from "react";
import {
  useGetEmployeeQuery,
  useGetEmployeesQuery,
} from "./services/EmployeeDetail";

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetEmployeesQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className=" container p-3 flex flex-col gap-3">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map((item, index) => {
          return (
            <div className="" key={index}>
              <h3>{item.name}</h3>
              <h3>{item.email}</h3>
            </div>
          );
        })
      ) : null}
    </div>
  );
}
