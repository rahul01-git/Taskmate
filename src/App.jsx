import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="container">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
