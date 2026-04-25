import { useState } from "react";

function Product({ name, onToggle }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const nextValue = !checked;
    setChecked(nextValue);
    onToggle(nextValue);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span>{name}</span>
      </div>
      <div>{checked ? <>+</> : <>&minus;</>}</div>
    </div>
  );
}
export default Product;

