import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import data from './data.json';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [categoryId, setCategotyId] = useState(0)
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {
            data.categories.map((obj, index) => (
              <li className={categoryId === index ? 'active': ''}
              key={index}
              onClick={() => setCategotyId(index)}
              >{obj.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="search">
        <input type="search" className="search-input" placeholder="Поиск по названию" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
      </div>
      <div className="image-gallery-wrapper">
        {
          data.collections
          .filter(e =>
            e.name.toLowerCase().includes(searchValue.toLowerCase())
            && (categoryId === e.category || categoryId === 0))
          .map((obj, index) => (
            <div className="collection" key={index}>
              <h2>{obj.name}</h2>
              <ImageGallery items={obj.photos}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
