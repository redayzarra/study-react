import { useEffect, useRef, useState } from "react";
import produce from "immer";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <select
        id=""
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}></ProductList>
    </div>
  );
}

export default App;
