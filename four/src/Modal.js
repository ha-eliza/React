import './Modal.css'
import { useState } from 'react';

function Modal() {
  let [open, setOpen] = useState(false);
  let image = "https://avatars.mds.yandex.net/i?id=9d9734c4d3a69ddec61faacc8ac90cecd7fbb942-5233739-images-thumbs&n=13"

  return (
    <>
      <img src={image} alt="" className='small' onClick={() => setOpen(true)} style={{display: open ? "none": "inline"}}/>
      {open && <img src={image} alt="" className='big' onClick={() => setOpen(false)}/>}
    </>
  )
}
export default Modal;
