import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TodoItem from '../components/TodoItem';
import TodoList from '../components/TodoList';

var container = null;

console.log(act);

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Render Todo Item', () => {
  act(() => {
    render(
      <TodoItem todo={{ text: 'Learn Angular', id: 'uuid1' }} />,
      container
    );
  });
  expect(container.textContent).toBe('Learn Angular');
});

it('Render TodoList', () => {
  act(() => {
    render(
      <TodoList
        todos={[
          { text: 'Learn Angular', id: 'uuid1' },
          { text: 'Learn React', id: 'uuid2' },
        ]}
      />,
      container
    );
  });
  expect(container.textContent).toContain('Learn Angular');
  expect(container.textContent).toContain('Learn React');
  expect(container.getElementsByTagName('li').length).toBe(2);
});
