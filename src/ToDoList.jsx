import { useState } from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "simple task", id: uuidv4(), done: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo != "")
      setTodos((prevTodo) => [
        ...prevTodo,
        { task: newTodo, id: uuidv4(), done: false },
      ]);
    setNewTodo("");
  };

  let getTask = (e) => {
    //console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  let dltButton = (key) => {
    let copy = todos.filter((todo) => todo.id != key);
    //console.log(copy);
    setTodos(copy);
  };

  let updtMany = () => {
    let uptCopy = todos.map((todo) => {
      return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
    });
    //console.log(uptCopy);
    // setTodos([uptCopy]);//it became nested copy beacaue uptCopy already an array
    setTodos(uptCopy);
  };

  let markDownBtn = (key) => {
    console.log(key);
    setTodos(
      todos.map((todo) => {
        if (todo.id == key) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        else return todo
      }),
    );
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
            {todo.done == true ? (
              <i className="fa-solid fa-square-check"></i>
            ) : (
              <i className="fa-regular fa-square"></i>
            )}
            &nbsp; &nbsp;
            <span>{todo.task}</span>
            &nbsp; &nbsp;
            <span>
              <button onClick={() => dltButton(todo.id)}>delete</button>
              {/* arrow function doesn't execute the program just make a copy */}
              &nbsp; &nbsp;
              <button onClick={() => markDownBtn(todo.id)}>Mark/Unmark</button>
            </span>
          </li> // write key=... not id or other name
        ))}
      </ul>
      <hr />
      <hr />
      <button onClick={updtMany}>update ALL</button>
    </div>
  );
}
