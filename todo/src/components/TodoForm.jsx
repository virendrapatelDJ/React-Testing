import React, { Fragment, useState } from 'react';

export default function TodoForm({ onCreate }) {
  const [text, setText] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(text);
    setText('');
  };

  const onInputChange = ({ target: { value } }) => {
    setText(value);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="todo" className="form-label">
            Type a Todo
          </label>
          <input
            type="text"
            onChange={onInputChange}
            value={text}
            className="form-control"
            id="todo"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Todo
        </button>
      </form>
    </Fragment>
  );
}
