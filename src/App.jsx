import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
          <HomePage />
      </main>
    </>
  );
}

export default App;
