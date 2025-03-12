import { useState } from "react";

/**
 * Root component that displays a list of items and allows adding new items.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name to be displayed in the heading.
 * @returns {JSX.Element} The rendered Root component.
 */
export default function Root(props) {
  /**
   * State to store the list of items.
   * @type {[string[], Function]}
   */
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  /**
   * Adds a new item to the list.
   */
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <section>
      <h2>App 2 {props.name} is mounted!</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </section>
  );
}
