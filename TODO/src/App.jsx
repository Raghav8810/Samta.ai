import { useCallback, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { CirclePlus } from "lucide-react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [Task, setTask] = useState([]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const AddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTask((prev) => {
        return [...prev, { name: inputValue }];
      });
      setInputValue("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTask((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  };
  console.log(Task);

  return (
    <>
      <main>
      <h1>TODO APP</h1>
        <form onSubmit={AddTask}>
          <button type="submit"><CirclePlus /></button>
          <input
            type="text" 
            placeholder="Enter your  task"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
        <TaskList task={Task} deleteTask={deleteTask} />
      </main>
    </>
  );
}

export default App;
