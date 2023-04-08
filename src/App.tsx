import { useEffect, useRef, useState } from "react";
import produce from "immer";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

function App() {
  useEffect(() => {
    document.title = "My App";
    connect();

    return () => disconnect();
  });

  return <div></div>;
}

export default App;
