import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";
export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim()) {
      onSubmit(e.target.value);
      setValue("");
    }
  }
  function handleChange(e) {
    console.log("Handle changed", e.target.value);
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon}></SearchIcon>
      <input
        onChange={handleChange}
        onKeyUp={submit}
        className={s.input}
        type="text"
        value={value}
        placeholder={"Search a TV Show you may like"}
      />
    </>
  );
}
