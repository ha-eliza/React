import { FC, useState } from "react";
import Toys from "../models/Toys";
import demoToys from "../demoToys";

const initState = {
  title: '',
  price: '',
  img: ''
}
interface NewToys {
  title: string,
  price: string,
  img: string
}
interface AddToysFormProps {
  addToys: (newToys: Toys) => void
}

const AddToysForm: FC<AddToysFormProps> = ({ addToys }) => {
  const [newToys, setNewToys] = useState<NewToys>(initState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setNewToys ({...newToys, [name]: value})
  }
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {title, price, img} = newToys
    if (title && price && img) {
      addToys({
        title, img,
        price: Number(price),
        id: Date.now()
      })
      setNewToys(initState)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input type="text" name="title" placeholder="Название" value={newToys.title} onChange={handleChange}/>
      </p>
      <p>
        <input type="text" name="price" placeholder="Стоимость" value={newToys.price} onChange={handleChange}/>
      </p>
      <p>
        <input type="text" name="img" placeholder="Изображение" value={newToys.img} onChange={handleChange}/>
      </p>
      <button>+ Добавить</button>
    </form>
  )
}
export default AddToysForm
