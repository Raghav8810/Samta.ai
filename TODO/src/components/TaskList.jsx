import { Trash2 } from "lucide-react";

const TaskList = ({ task, deleteTask }) => {
  console.log(task);
  return (
    <>
    
      {task.map((item,i) => (
        <div className="task" key={i}>
        <p>{item.name}</p>
        <Trash2 size={30} color="red" className="del" onClick={() => deleteTask(i)} />
      </div>
      ))}
    </>
  );
};

export default TaskList;
