import { useState } from "react";

function ListGroup() {
  let items = ["Seoul", "Busan", "Tokyo", "Phnom Penh", "Paris"];

  // const handleclick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const getMessage = () => {
  //   return items.length == 0 ? <p>No item found</p> : null;
  // };

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
