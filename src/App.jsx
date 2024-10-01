import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/Reducer/todoslicer";
import Delete from "./Delete";
import Edit from "./Edit";
import './App.css'; // Import the CSS file

function App() {
  const [editMode, setEditMode] = useState(false);
  const todoVal = useRef();
  const selector = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  
  const addingTodos = () => {
    const newTodo = todoVal.current.value;
    if (!newTodo) {
      return alert("Please Enter Todo");
    }
    dispatch(
      addTodo({
        title: todoVal.current.value,
      })
    );
    todoVal.current.value = "";
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo App</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          type="text"
          ref={todoVal}
        />
        <button className="add-todo-btn" onClick={addingTodos}>
          Add Todo
        </button>
      </div>
      <div>
        {selector
          ? selector.map((item, index) => (
              <div
                key={item.id}
                className="todo-item"
              >
                {editMode !== index ? (
                  <>
                    <h2 className="todo-title">{item.title}</h2>
                    <button
                      className="edit-btn"
                      onClick={() => setEditMode(index)}
                    >
                      Edit
                    </button>
                    <Delete index={index} />
                  </>
                ) : (
                  <Edit
                    setEditMode={setEditMode}
                    index={index}
                    value={item.title}
                  />
                )}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
