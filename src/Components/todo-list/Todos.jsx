import React, { useState } from 'react';
import { connect } from 'react-redux';

const Todos = (props) => {

  const [todo, setTodo] = useState('');
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  console.log('holis' + props);

  return (
    <div className="add-todo">
      <input type="text" onChange={(e) => handleChange(e)} className="input-todo" />

      <button className="btn-add-todo">Add</button>
    </div>
  );
}
export default connect(null, null)(Todos);