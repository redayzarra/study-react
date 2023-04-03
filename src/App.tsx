import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import Message from "./components/Message";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add new item
    setTags([...tags, "exciting"]);

    //remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //update
    setTags(tags.map((tag) => (tag == "happy" ? "happiness" : tag)));
  };
  return (
    <div>
      {tags}
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default App;
