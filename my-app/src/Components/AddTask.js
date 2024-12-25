import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions/ListTask";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      dispatch(addTask({ id: uuidv4(), description: taskDescription, isDone: false }));
      setTaskDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
