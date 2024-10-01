import React, { useState } from "react";
import { edit } from "./Redux/Reducer/todoslicer";
import { useDispatch } from "react-redux";
import './Edit.css'; // Import the CSS file

function Edit({ setEditMode, index, value }) {
  const dispatch = useDispatch();
  const [editVal, setEditVal] = useState(value);

  const editTodo = () => {
    dispatch(
      edit({
        index,
        editVal,
      })
    );
    setEditMode(false);
  };

  return (
    <div className="edit-container">
      <input
        value={editVal}
        type="text"
        className="edit-input"
        onChange={(e) => setEditVal(e.target.value)}
      />
      <button className="update-btn" onClick={editTodo}>
        Update
      </button>
    </div>
  );
}

export default Edit;
