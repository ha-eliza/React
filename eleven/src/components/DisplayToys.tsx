import { FC } from "react";
import Toys from "../models/Toys";
import SingleToy from "./SingleToy";

interface DisplayToysProps {
  toysList: Toys[];
  updateToys: (newToys: Toys) => void,
  deleteToy: (id: number) => void
}

const DisplayToys: FC<DisplayToysProps> = ({ toysList, updateToys, deleteToy }) => {
  return (
    <div className="container">
      {toysList.map((toy) => <SingleToy toy={toy} key={toy.id} updateToys={updateToys} deleteToy={deleteToy}/>)}
    </div>
  );
};
export default DisplayToys;
