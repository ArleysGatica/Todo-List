import React, { useState } from 'react';

export const Todos = () => {

  const [todo, setTodo] = useState('');
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  console.log('holis' + todo);

  return (
    <div className="add-todo">
      <input type="text" onChange={(e) => handleChange(e)} className="input-todo" />

      <button className="btn-add-todo">Add</button>
    </div>
  );
}