import { createContext, useEffect, useState } from "react";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function fetchCharacters() {
        let res = await fetch("https://swapi.dev/api/people/");
        let data = await res.json();
        setCharacters(data.results);
        setLoading(false);
      }

      fetchCharacters();
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
