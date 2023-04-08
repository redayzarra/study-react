import { useEffect, useRef, useState } from "react";
import produce from "immer";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Side effect - no longer pure
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
