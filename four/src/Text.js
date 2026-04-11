import { useState, useEffect } from "react";

function Text() {
  let [visible, setVisible] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 2000);
  }, [])
  return <>
    {
      visible && <p>Hello</p>
    }
  </>
}

export default Text;
