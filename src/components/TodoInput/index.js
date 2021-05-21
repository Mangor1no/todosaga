import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../../data/actions';
import './style.css';

const TodoInput = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = () => {
    if (todoValue.length > 0) dispatch(addTodo(todoValue));
    setTodoValue('');
  };

  const handleTodoInput = (value) => {
    setTodoValue(value);
  };

  return (
    <div className="inputWrapper">
      <input value={todoValue} onChange={(event) => handleTodoInput(event?.target?.value)} />
      <button className="todoSubmit" onClick={handleSubmit}>
        Get motivated!
      </button>
    </div>
  );
};

export default connect()(TodoInput);
