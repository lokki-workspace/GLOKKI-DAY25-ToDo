
import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todoList';
import Filter from './components/filter';



function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'LOKKI', description: 'React TODO Task 1-Shopping Cart', status: 'not completed' },
    { id: 2, name: 'Maha', description: 'React TODO Task 2-Pricing Card', status: 'completed' },
  ]);

  const [filter, setFilter] = useState('all');
  const [newTodoName, setNewTodoName] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [formError, setFormError] = useState('');

  const handleAddTodo = () => {
    if (!newTodoName.trim() || !newTodoDescription.trim()) {
      setFormError('Please enter both name and description.');
      return;
    }

    const newTodo = {
      id: Date.now(),
      name: newTodoName,
      description: newTodoDescription,
      status: 'not completed',
    };

    setTodos([...todos, newTodo]);
    setNewTodoName('');
    setNewTodoDescription('');
    setFormError('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.status === filter);

  return (
    <div className="app">
      
      <h4>LOKKI - React Todo App</h4>
   
      <div className='content'>
        <input
          type="text"
          id="newTodoName"
          placeholder='ToDo Name'
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <input
          id="newTodoDescription"
          placeholder='ToDo Description'
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
        <button className='buttontodo' onClick={handleAddTodo}>Add Todo</button>
      </div>
      
      {formError && <p className="error">{formError}</p>}

     <div className='mylist'>
      <label>My TODO-list</label>
      <Filter filter={filter} onChangeFilter={setFilter} />
      </div>
      <TodoList todos={filteredTodos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
    </div>
   
  );
}

export default App;