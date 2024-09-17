/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  let todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  const todosStorage = localStorage.getItem('todos-storage');
  if (todosStorage !== null) {
    return JSON.parse(todosStorage);
  } else {
    return [];
  }
}
