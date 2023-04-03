import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import Message from "./components/Message";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const fullName = firstName + " " + lastName;

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default App;
