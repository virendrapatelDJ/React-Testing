import React, { Fragment, useEffect, useState } from 'react';

function NavAction({ action: { label, isActive }, onClick }) {
  return (
    <li className={`nav-item`} onClick={onClick}>
      <a
        id="create"
        className={`nav-link ${isActive ? ' active' : ''}`}
        href="#"
      >
        {label}
      </a>
    </li>
  );
}

export default function Nav({ onActionChange }) {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const actions = [
      { label: 'Todos', type: 'list', isActive: true },
      { label: 'Create', type: 'create', isActive: false },
    ];
    setActions(actions);
    console.log(actions);
  }, []);

  const handleNavItemClick = (type) => {
    setActions(
      actions.map((action) => {
        if (action.type === type) {
          action.isActive = true;
        } else {
          action.isActive = false;
        }
        return action;
      })
    );

    onActionChange(type);
  };

  return (
    <Fragment>
      <div className="mb-3">
        <ul className="nav nav-tabs">
          {actions.map((action, index) => (
            <NavAction
              key={index}
              action={action}
              onClick={() => handleNavItemClick(action.type)}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
