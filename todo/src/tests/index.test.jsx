import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TodoItem from '../components/TodoItem';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

var container = null;

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

it('Render Todo Form', () => {
  act(() => {
    render(<TodoForm />, container);
  });
  expect(container.querySelectorAll('form')).toHaveLength(1);
  expect(container.querySelectorAll('input')).toHaveLength(1);
  expect(container.querySelectorAll('button')).toHaveLength(1);
});
