import React, { FC, useState } from "react";
import "./App.css";
import demoToys from "./demoToys";
import Toys from "./models/Toys";
import AddToysForm from "./components/AddToysForm";
import DisplayToys from "./components/DisplayToys";

const App: FC = () => {
  const [toysList, setToysList] = useState<Toys[]>(demoToys)
  const addToys = (newToys: Toys) => {
    setToysList([...toysList, newToys])
  }
  const updateToys = (newToys: Toys) => {
    setToysList(toysList.map(toys => toys.id === newToys.id ? newToys : toys))
  }
  const deleteToy = (id: number) => {
  setToysList(toysList.filter(toy => toy.id !== id));
  };
  return (
    <div className="main">
      <div className="wrap">
        <div className="block">
          <h1 className="heading">Детские игрушки</h1>
          <AddToysForm addToys={addToys}/>
        </div>
        <div className="display">
          <DisplayToys toysList={toysList} updateToys={updateToys} deleteToy={deleteToy}/>
        </div>
      </div>
    </div>
  );
}

export default App;
