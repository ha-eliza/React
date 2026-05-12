import { FC, useState } from "react";
import Toys from "../models/Toys";
import EditToysForm from "./EditToysForm";

interface SingleToyProps {
  toy: Toys;
  updateToys: (newToys: Toys) => void;
  deleteToy: (id: number) => void
}

const SingleToy: FC<SingleToyProps> = ({ toy, updateToys, deleteToy }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const { title, price, img, id } = toy;

  const handleEdit = () => {
    setEdit(!edit)
  }
  const handleDelete = () => {
    deleteToy(id);
  };
  return (
    <div className="toys-block">
      <div className="toys-control">
        <span style={{ marginRight: "20px" }} onClick={handleEdit}>✎</span>
        <span onClick={handleDelete}>🛇</span>
      </div>
      <div className="toy">
        <img src={`/images/${img}`} alt="" />
        <h3>{title}</h3>
        <p>{price} руб.</p>
      </div>
      {
        edit ? <EditToysForm data={toy} updateToys={updateToys} handleEdit={handleEdit}/> : null
      }
    </div>
  );
};
export default SingleToy;
