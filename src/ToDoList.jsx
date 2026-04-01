import { useState } from "react";
import "./ToDoList.css";

export default function ToDoList(){
    let [todos,setTodos]=useState(["simple Task"]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        console.log("we have to add new task in todo");
    }
    return(
        <div className="todo">
            <input type="text" placeholder="add your task" value={newTodo} />
            <button>add task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>ToDo List</h4>
            <ul>
                {
                    todos.map((todo)=>{
                         <li>{todo}</li>;
                    })
                }
            </ul>
        </div>
    )
}