import {useReducer} from "react";
import React from "react";
//checkbox using useReducer
export function Checkbox() {

  // const [selected, setSelected] = useState(false);
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
    <label htmlFor="checkbox">{checked ? "Checked" : "Not Checked"}</label>
      <input
      id="checkbox"
        type="checkbox"
        value={checked}
        onChange={toggle} />
      
    </>
  )
}