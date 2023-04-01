import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "London", "Paris", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
    </div>
  );
}

export default App;
