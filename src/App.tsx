import React, { useEffect, useState } from "react";
import "./App.css";

interface Person {
  id: number;
  name: string;
  favoriteColor?: "Black" | "Blue" | "Orange";
  number: string;
}

function App() {
  const [person, setPerson] = useState<Person[]>([]);

  useEffect(() => {
    myFunc();
  }, []);

  const myFunc = async () => {
    const people = await fetch("http://localhost:3001/api/people").catch(
      console.error
    );
    if (people) {
      setPerson(await people.json());
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {person.map((person) => {
          return (
            <div key={person.id} className="text-3xl font-bold underline">
              {person.id} {person.name} {person.number}
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
