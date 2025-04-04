import { useState } from "react";

function List() {
  const names = ["Mior", "Afif", "Faiz", "Auris", "Akun"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ul className="list-group">
      {names.map((name, index) => (
        <li
          key={index}
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => setSelectedIndex(index)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
export default List;
