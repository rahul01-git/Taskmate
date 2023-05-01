import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
function App() {
  const [tasklist, setTasklist] = useState([]);

  return (
    <div className="container">
      <Header />
      <AddTask tasklist={tasklist} setTasklist={setTasklist} />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} />
    </div>
  );
}

export default App;
