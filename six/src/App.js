import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import data from './data.json';
import './App.css';

function App() {
  const collections = data.collections;
  const galleryRef = useRef(null);
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="image-gallery-wrapper">
        {
          collections.map((obj, index) => (
            <div className="collection" key={index}>
              <h2>{obj.name}</h2>
              <ImageGallery items={obj.photos} ref={galleryRef}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
