import React, { Fragment, useState } from 'react';
import Nav from './Nav';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';

export default function Home() {
  const [activeTab, setActiveTab] = useState('list');
  const [todos, setTodos] = useState([]);

  const onActionChange = (type) => {
    console.log(type);
    setActiveTab(type);
  };

  const createTodo = (text) => {
    setTodos([...todos, { text, id: uuid() }]);
  };
  const deleteTodo = (todoID) => {
    console.log('Delete');
    setTodos(todos.filter(({ id }) => id !== todoID));
  };

  const tabsComponent = {
    list: <Todo todos={todos} onDelete={deleteTodo} />,
    create: <TodoForm onCreate={createTodo} />,
  };

  const ActiveTab = () => tabsComponent[activeTab];

  return (
    <Fragment>
      <TodoLayout>
        {/* <Nav onActionChange={onActionChange}></Nav> */}
        {/* <ActiveTab /> */}

        <TodoForm onCreate={createTodo} />
        <br />
        <Todo todos={todos} onDelete={deleteTodo} />
      </TodoLayout>
    </Fragment>
  );
}

function TodoLayout({ children }) {
  return (
    <div className="col-lg-6 mt-4 mx-auto rounded  p-4 shadow">{children}</div>
  );
}
