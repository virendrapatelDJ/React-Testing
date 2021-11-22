import React, { Fragment } from 'react';

export default function TodoItem({ todo, onDelete }) {
  return (
    <Fragment>
      <li class="list-group-item" onClick={onDelete}>
        {todo.text}
      </li>
    </Fragment>
  );
}
