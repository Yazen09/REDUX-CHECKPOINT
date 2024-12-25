import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/Actions/ListTask";

const Edit = ({ task, setEditing }) => {
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (newDescription.trim()) {
      dispatch(editTask(task.id, newDescription));
      setEditing(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </div>
  );
};

export default Edit;
    