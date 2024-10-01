import React from "react";
import { useDispatch } from "react-redux";
import { delet } from "./Redux/Reducer/todoslicer";
import './Delete.css'; // Import the CSS file

function Delete({ index }) {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(
      delet({
        index,
      })
    );
  };
  return (
    <button className="delete-btn ml-3" onClick={deleteTodo}>
      Delete Todo
    </button>
  );
}

export default Delete;
