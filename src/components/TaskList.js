/*import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { task: 'Go to gym', priority: 'High', status: 'To Do' },
    { task: 'Read a book', priority: 'Low', status: 'Done' },
    { task: 'Go to market', priority: 'Medium', status: 'In Progress' },
    { task: 'Restart Learning Solidworks', priority: 'High', status: 'To Do' },
    { task: 'Change slider to scroll', priority: 'High', status: 'Done' },
    { task: 'To publish the article', priority: 'Medium', status: 'In Progress' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('High');
  const [taskStatus, setTaskStatus] = useState('To Do');
  const [taskIndex, setTaskIndex] = useState(null);

  const renderTasks = () => {
    return tasks.map((task, index) => (
      <div key={index} className="task-item">
        <div>{task.task}</div>
        <div className={`task-priority priority-${task.priority.toLowerCase()}`}>{task.priority}</div>
        <div className="task-status">{task.status}</div>
        <div className="task-actions">
          <button className="btn btn-secondary btn-sm" onClick={() => handleEditTask(index)}>&#9998;</button>
          <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(index)}>&#128465;</button>
        </div>
      </div>
    ));
  };

  const handleAddTask = () => {
    setTaskName('');
    setTaskPriority('High');
    setTaskStatus('To Do');
    setShowModal(true);
    setTaskIndex(null);
  };

  const handleEditTask = (index) => {
    const task = tasks[index];
    setTaskName(task.task);
    setTaskPriority(task.priority);
    setTaskStatus(task.status);
    setShowModal(true);
    setTaskIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleSaveTask = () => {
    if (taskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = { task: taskName, priority: taskPriority, status: taskStatus };
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, { task: taskName, priority: taskPriority, status: taskStatus }]);
    }
    setShowModal(false);
  };

  return (
    <div className="container task-list">
      <div className="task-header">
        <h2>Task List</h2>
        <button className="btn btn-primary" onClick={handleAddTask}>+ Add Task</button>
      </div>
      <div id="task-container">
        {renderTasks()}
      </div>

      {showModal && (
        <div className="modal fade show" id="taskModal" tabIndex="-1" role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="taskModalLabel">{taskIndex !== null ? 'Edit Task' : 'Add Task'}</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="taskName">Task</label>
                    <input type="text" className="form-control" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="taskPriority">Priority</label>
                    <select className="form-control" id="taskPriority" value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)} required>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="taskStatus">Status</label>
                    <select className="form-control" id="taskStatus" value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} required>
                      <option>To Do</option>
                      <option>In Progress</option>
                      <option>Done</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSaveTask}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList; */
import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { task: 'Go to gym' , priority: 'High', status: 'To Do' },
    { task: 'Read a book', priority: 'Low', status: 'Done' },
    { task: 'Go to market', priority: 'Medium', status: 'In Progress' },
    { task: 'Restart Learning Solidworks', priority: 'High', status: 'To Do' },
    { task: 'Change slider to scroll', priority: 'High', status: 'Done' },
    { task: 'To publish the article', priority: 'Medium', status: 'In Progress' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('High');
  const [taskStatus, setTaskStatus] = useState('To Do');
  const [taskIndex, setTaskIndex] = useState(null);

  const getProgressPercentage = (status) => {
    if (status === 'To Do') return 0;
    if (status === 'In Progress') return 50;
    if (status === 'Done') return 100;
  };

  const renderTasks = () => {
    return tasks.map((task, index) => {
      const priorityClass = task.priority === 'High' ? 'priority-high' : task.priority === 'Medium' ? 'priority-medium' : 'priority-low';
      const progress = getProgressPercentage(task.status);

      return (
        <div key={index} className="task-item">
          <div>{task.task}</div>
          <div className={`task-priority ${priorityClass}`}>{task.priority}</div>
          <div className="task-status">{task.status}</div>
          <div className="progress-circle">
            <svg width="30" height="30" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#e6e6e6" strokeWidth="4" />
              <circle cx="20" cy="20" r="18" fill="none" stroke="#00bfff" strokeWidth="4" strokeDasharray={`${progress * 1.13}, 113`} />
            </svg>
          </div>
          <div className="task-actions">
            <button className="btn btn-secondary btn-sm" onClick={() => handleEditTask(index)}>&#9998;</button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(index)}>&#128465;</button>
          </div>
        </div>
      );
    });
  };

  const handleAddTask = () => {
    setTaskName('');
    setTaskPriority('High');
    setTaskStatus('To Do');
    setShowModal(true);
    setTaskIndex(null);
  };

  const handleEditTask = (index) => {
    const task = tasks[index];
    setTaskName(task.task);
    setTaskPriority(task.priority);
    setTaskStatus(task.status);
    setShowModal(true);
    setTaskIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleSaveTask = () => {
    if (taskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = { task: taskName, priority: taskPriority, status: taskStatus };
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, { task: taskName, priority: taskPriority, status: taskStatus }]);
    }
    setShowModal(false);
  };

  return (
    <div className="container task-list">
      <div className="task-header">
        <h2>Task List</h2>
        <button className="btn btn-primary" onClick={handleAddTask}>+ Add Task</button>
      </div>
      <div className="task-header">
        <div><strong>Task Name</strong></div>
        <div><strong>Priority</strong></div>
        <div><strong>Status</strong></div>
        <div><strong>Actions</strong></div>
      </div>
      <div id="task-container">
        {renderTasks()}
      </div>

      {showModal && (
        <div className="modal fade show" id="taskModal" tabIndex="-1" role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="taskModalLabel">{taskIndex !== null ? 'Edit Task' : 'Add Task'}</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="taskName">Task</label>
                    <input type="text" className="form-control" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="taskPriority">Priority</label>
                    <select className="form-control" id="taskPriority" value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)} required>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="taskStatus">Status</label>
                    <select className="form-control" id="taskStatus" value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} required>
                      <option>To Do</option>
                      <option>In Progress</option>
                      <option>Done</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSaveTask}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;

