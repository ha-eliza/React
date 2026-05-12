import { FC, useState } from "react";
import Toys from "../models/Toys";

interface EditFormToysProps {
  data: Toys;
  updateToys: (newToys: Toys) => void
  handleEdit: () => void
}

const EditToysForm: FC<EditFormToysProps> = ({ data, updateToys, handleEdit }) => {
  const [editToys, setEditToys] = useState<Toys>(data);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setEditToys({
      ...editToys,
      [name]: value
    })
  }
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {title, price, img} = editToys
    if (title && price && img) {
      updateToys(editToys)
      handleEdit()
    }
  }
  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <p>
        <input type="text" name="title" value={editToys.title} onChange={handleChange}/>
      </p>
      <p>
        <input type="text" name="price" value={editToys.price} onChange={handleChange}/>
      </p>
      <p>
        <input type="text" name="img" value={editToys.img} onChange={handleChange}/>
      </p>
      <button>Сохранить</button>
    </form>
  );
};
export default EditToysForm;
