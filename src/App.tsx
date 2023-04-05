import { useState } from "react";
import produce from "immer";
import Form from "./components/Form";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { if: 2, title: "Product 2", quantity: 2 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id == 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;
