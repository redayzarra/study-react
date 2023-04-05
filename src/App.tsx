import { useState } from "react";
import produce from "immer";
import Form from "./components/Form";

function App() {
  const [cart, setCart] = useState({})

  const handleClick = () => {}

  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;
