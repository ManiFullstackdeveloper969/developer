// TaskItem.js
import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const { task: taskName, priority, status } = task;

  return (
    <div className="task-item">
      <div>{taskName}</div>
      <div className={`task-priority priority-${priority.toLowerCase()}`}>{priority}</div>
      <div className="task-status">{status}</div>
      <div className="task-actions">
        <button className="btn btn-secondary btn-sm" onClick={onEdit}>&#9998;</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>&#128465;</button>
      </div>
    </div>
  );
};

export default TaskItem;
