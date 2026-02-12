import React, {useState} from "react";

function TodoList() {
    const [tasks, setTasks] = useState(["Do homework", "Complete the lecture"])
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event) {
        setNewTask (event.target.value);
    }
    function addNewTask() {
        setTasks(t => [...t, newTask])
        setNewTask("")
    }
    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index)
        setTasks(updateTasks);
    }
    return (
        <div className = "Todo-list">
            <h1>Todo List</h1>
            <div>
                <input type="text"
                placeholder="Enter a new task..."
                value = {newTask}
                onChange = {handleInputChange}
                />
                <button 
                className="add-button"
                onClick = {addNewTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                <li key = {index}>
                    <span className = "text">{task}</span>
                    <button ></button>
                    ...
                </li>
            )}
            </ol>
        </div>
    )
}

export default TodoList;