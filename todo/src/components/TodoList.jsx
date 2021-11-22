import React, { Fragment } from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos = [], onDelete }) {
  return (
    <Fragment>
      <ul class="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </ul>
    </Fragment>
  );
}
