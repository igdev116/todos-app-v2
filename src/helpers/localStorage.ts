// types
import { Todo } from '@/models/todos';

import { LOCAL_STORAGE } from '@/constants';

export const setTodos = (todos: Todo[]) => {
  localStorage.setItem(LOCAL_STORAGE.TODOS_KEY, JSON.stringify(todos));
};

export const getTodos = (): Todo[] => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE.TODOS_KEY) || '[]');
};
