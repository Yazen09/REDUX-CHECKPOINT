import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../JS/Actions/ListTask";
import Edit from "./Edit";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleDone = (id) => {
    dispatch(doneTask(id));
  };

  return (
    <div>
      {tasks.map((task) =>
        editingTaskId === task.id ? (
          <Edit key={task.id} task={task} setEditing={setEditingTaskId} />
        ) : (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => handleDone(task.id)}
            />
            <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
              {task.description}
            </span>
            <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        )
      )}
    </div>
  );
};

export default ListTask;
