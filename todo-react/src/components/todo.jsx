import { useState } from 'react';

const Todo = ({ todo, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleStatusChange = () => {
    const updatedTodo = { ...editedTodo, status: todo.status === 'completed' ? 'not completed' : 'completed' };
    setEditedTodo(updatedTodo);
    onUpdate(updatedTodo);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onUpdate(editedTodo);
    setEditMode(false);
  };

  return (
    <div className="todo-card">
      <div className='desc'>
      <h5> Name : {editMode ? <input type="text" value={editedTodo.name} onChange={(e) => setEditedTodo({ ...editedTodo, name: e.target.value })} /> : todo.name}</h5>
      <h6> Description : {editMode ? <input value={editedTodo.description} onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })} /> : todo.description}</h6>
      <p>Status : {editMode ? <select value={editedTodo.status} onChange={(e) => setEditedTodo({ ...editedTodo, status: e.target.value })}>
        <option value="not completed" >Not Completed</option>
        <option value="completed">Completed</option>
      </select> : todo.status}</p>
      </div>
      {editMode ? <button className='save' onClick={handleSave}>Save</button> : <>
        <button className='edit' onClick={handleEdit}>Edit</button>
        <button className='delete' onClick={() => onDelete(todo.id)}>Delete</button>
      </>}
      <button className='change' onClick={handleStatusChange}>Change Status</button>
    </div>
  );
};

export default Todo;