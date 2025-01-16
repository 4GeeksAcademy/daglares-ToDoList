import React, { useState } from 'react';

function ToDoApp() {
  const [toDoList, setToDoList] = useState(["Correr", "Limpiar el patio"]);
  const [inputValue, setInputValue] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setToDoList([...toDoList, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
  };

  return (
    <div className="container col-8">
      <h1 className="text-center">todos</h1>
      <div className="input-group">
        <input
          type="text"
          className="form-control shadow-none"
          style={{ outline: 'none', boxShadow: 'none', borderColor: '#ced4da', borderRadius: '0' }}
          id="addToDo"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="What needs to be done?"
        />
      </div>
      <ul className="list-group">
        {toDoList.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center rounded-0 fs-5"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {task}
            {hoverIndex === index && ( 
              <span
                onClick={() => handleDelete(index)}
                className="text-danger"
                style={{ cursor: 'pointer' }}
              >
                <i className="fa-solid fa-x"></i>
              </span>
            )}
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-start align-items-center rounded-0"><strong>{toDoList.length} items left</strong></li>
      </ul>
    </div>
  );
}

export default ToDoApp;
