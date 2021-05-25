import { createContext, useEffect, useState } from "react";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [error, setError] = useState()

  useEffect(async () => {
    try {
      async function fetchCharacters() {
        let res = await fetch("https://swapi.dev/api/people/");
        let data = await res.json();
        setCharacters(data.results);
      }

      await fetchCharacters();
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const value = {
    characters,
    loading,
  };

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};
