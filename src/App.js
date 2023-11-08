import "./App.css";
import Contact from "./components/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "To Do App";
  }, []);
  return (
    <div className="App">
      <Contact />
    </div>
  );
}

export default App;
