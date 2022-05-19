
import React from "react";
import TodoItem from "./TodoItem";

const Todo = () => {

    const [value, setValue] = React.useState("");
    const [todoArr, setTodoArr] = React.useState([]);

    return (
        <div>
            <h1>Todo App</h1>

            <input className="todoInputbox" type="text" value={value} 
            onChange={(e) => {setValue(e.target.value)}} />

            <button className="todoAddbtn" onClick={() => {
                setTodoArr([...todoArr, {id: Math.floor(Math.random()*10000), value: value}]);
                setValue("");
            }}>Add
            </button>

            {todoArr.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
                
            ))}
        </div>
    );
};

export default Todo;