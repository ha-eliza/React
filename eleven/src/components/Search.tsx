import { ChangeEvent, FC } from "react";
import { useState } from "react";

interface SearchProps {
  handleSearch: (val: string) => void; 
}

const Search: FC<SearchProps> = ({ handleSearch }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);
    handleSearch(text);
  }

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search..."
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

export default Search
