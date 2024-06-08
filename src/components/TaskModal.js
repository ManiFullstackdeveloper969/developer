// TaskModal.js
import React, { useState, useEffect } from 'react';

const TaskModal = ({ isOpen, onClose, onSave, task }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('High');
  const [status, setStatus] = useState('To Do');

  useEffect(() => {
    if (task) {
      setTaskName(task.task);
      setPriority(task.priority);
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ task: taskName, priority, status });
  };

  return (
    isOpen && (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add/Edit Task</h5>
              <button type="button" className="close" onClick={onClose}>
                <span>&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Task</label>
                  <input type="text" className="form-control" id="taskName" required value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="taskPriority">Priority</label>
                  <select className="form-control" id="taskPriority" required value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="taskStatus">Status</label>
                  <select className="form-control" id="taskStatus" required value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Done</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default TaskModal;
