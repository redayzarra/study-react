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
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nemo ad
        commodi, sunt ab cupiditate cumque mollitia magnam tenetur consequuntur
        id molestiae nam omnis veritatis voluptatem? Earum velit quibusdam illum
        sit mollitia soluta veritatis doloribus, numquam recusandae ad, nostrum
        blanditiis aperiam consequatur modi debitis. Rerum id facere eaque
        quaerat omnis laboriosam expedita earum dolorum, eius aut quos. Nobis
        voluptatem eveniet earum, ea culpa sunt cum. Dolor, accusantium alias.
        Mollitia tenetur reprehenderit possimus deleniti aspernatur nam
        cupiditate ipsa consequuntur debitis? Deleniti ea minima dolorum,
        consectetur quidem voluptatum iste nam, ex officia praesentium animi
        laboriosam illum nobis error culpa velit eveniet? Qui.
      </ExpandableText>
    </div>
  );
}

export default App;
