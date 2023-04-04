import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import Message from "./components/Message";
import produce from "immer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Cheese",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return <div></div>;
}

export default App;
