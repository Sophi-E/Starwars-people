import People from "./components/People";
import { PeopleProvider } from "./context/peopleContext";

function App() {
  return (
    <PeopleProvider>
      <div className="App">
        <main>
          <h1 className="title">Starwars Characters</h1>
          <People />
        </main>
      </div>
    </PeopleProvider>
  );
}

export default App;
