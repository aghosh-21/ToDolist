import { useState } from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([{ task: "simple task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

 let addNewTask = () => {
  setTodos((prevTodo) => [
    ...prevTodo, { task: newTodo, id: uuidv4() }
  ]);
  setNewTodo("");
};

 
  let getTask = (e) => {
    //console.log(e.target.value);
    setNewTodo(e.target.value);
  };
  return (
    <div className="todo">
      <input
        type="text"
        placeholder="add your task"
        value={newTodo}
        onChange={getTask}
      />
      <button onClick={addNewTask}>add task</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>ToDo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
           <span>{todo.task}</span> 
           <span><button>delete</button></span> 
            </li> // write key=... not id or other name
        ))}
      </ul>
    </div>
  );
}
