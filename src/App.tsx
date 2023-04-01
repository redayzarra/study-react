import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("Nice!")}>
        Hello <span> World</span>
      </Button>
    </div>
  );
}

export default App;
