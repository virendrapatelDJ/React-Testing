import React, { Fragment } from 'react';
import TodoList from './TodoList';

export default function Todo({ todos, onDelete }) {
  return todos.length ? (
    <TodoList todos={todos} onDelete={onDelete} />
  ) : (
    <div className="alert alert-light border">No Todos</div>
  );
}
