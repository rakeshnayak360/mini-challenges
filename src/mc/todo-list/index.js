import React, { useState } from "react";
import "./todoList.css";

const Todolist = () => {
  const [textbox, setTextbox] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState();

  const handleOnSubmit = (event) => {
    if (parseInt(event.keyCode) === 13) {
      const value = event.target.value;
      if (value !== "") {
        setTextbox("");
        setTasks([...tasks, value]);
        setEditIndex();
      }
    }
  };

  const handleEdit = (value, index) => {
    setEditIndex(index);
  };

  const handleDelete = (value, index) => {
    const filteredData = tasks.filter((item, key) => index !== key);
    setTasks([...filteredData]);
    setEditIndex();
  };

  const handleTaskEdit = (event, index) => {
    let newArr = [...tasks];
    newArr[index] = event.target.value;
    setTasks(newArr);
  };

  const handleTaskSave = (event, index) => {
    if (parseInt(event.keyCode) === 13) {
      setEditIndex();
    }
  };

  return (
    <div className="todolistChallenge">
      <div className="todoInputBox">
        <input
          type="text"
          placeholder="Hit enter after typing..."
          autoFocus
          value={textbox}
          onChange={(event) => setTextbox(event.target.value)}
          onKeyUp={(event) => handleOnSubmit(event)}
        />
      </div>
      <div className="todolist-container">
        {tasks &&
          tasks.map((item, key) => {
            return (
              <div className="task" key={key}>
                {key !== editIndex && <p>{item}</p>}
                {key === editIndex && (
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleTaskEdit(e, key)}
                    onKeyUp={(e) => handleTaskSave(e)}
                  />
                )}
                <div className="todo-action">
                  {key !== editIndex && (
                    <button type="button" onClick={() => handleEdit(item, key)}>
                      Edit
                    </button>
                  )}
                  {key === editIndex && (
                    <button type="button" onClick={() => setEditIndex()}>
                      Save
                    </button>
                  )}
                  <button type="button" onClick={() => handleDelete(item, key)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todolist;
