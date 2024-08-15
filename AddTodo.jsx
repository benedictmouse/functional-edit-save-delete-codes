import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleAddClick = () => {
    if (title.trim()) {
      onAddTodo(title);
      setTitle(''); // Clear the input after adding the todo
    }
  };

  return (
    <>
      <input
        placeholder="Add todos"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
};

export default AddTodo;
