import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "Miami", "Tokyo", "Boston", "Chicago"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <BsFillCalendarFill color="black" size="40" />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Like></Like>
    </div>
  );
}

export default App;
