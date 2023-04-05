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
import ExpandableText from "./components/ExpandableText";

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
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, illo
        ullam! Eos vero tempora quas neque! Hic enim laudantium autem commodi
        nobis numquam maxime ducimus itaque. Maxime fuga delectus fugiat,
        assumenda nulla minus, labore, laboriosam sunt quod voluptatem autem id!
        Temporibus dolorem provident illo quis quae in repellat fuga unde, iure
        debitis numquam ratione enim harum eius dolorum commodi. Consequuntur
        aperiam suscipit ea, molestias vitae beatae, totam, velit nisi labore
        exercitationem provident! Excepturi maiores aliquid ex molestiae
        mollitia, neque repellendus eius vel eos eum perspiciatis, reiciendis ab
        ipsum officiis amet sed tenetur deserunt vitae iure? Commodi ducimus
        consectetur unde dignissimos!
      </ExpandableText>
    </div>
  );
}

export default App;
