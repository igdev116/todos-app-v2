// types
import {
  Status,
  Todo,
  State,
  Getters,
  TodosMutationTypes,
} from '@/models/todos';

import { getTodos, setTodos } from '@/helpers/localStorage';

const todos = {
  state: {
    todos: [],
    status: 'all',
  },

  getters: {
    todos(state: State, getters: Getters) {
      switch (state.status) {
        case 'active':
          return getters.activeTodos;
        case 'completed':
          return getters.doneTodos;
        default:
          return getters.allTodos;
      }
    },

    allTodos(state: State) {
      return state.todos;
    },

    activeTodos(state: State) {
      return state.todos.filter((todo) => !todo.completed);
    },

    doneTodos(state: State) {
      return state.todos.filter((todo) => todo.completed);
    },
  },

  mutations: {
    [TodosMutationTypes.SET_TODOS](state: State) {
      state.todos = getTodos();
    },

    [TodosMutationTypes.ADD_TODO](state: State, todo: Todo) {
      state.todos.unshift(todo);
      setTodos(state.todos);
    },

    [TodosMutationTypes.DELETE_TODO](state: State, todoId: string) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
      setTodos(state.todos);
    },

    [TodosMutationTypes.CLEAR_COMPLETED](state: State) {
      state.todos = state.todos.filter((todo) => !todo.completed);
      setTodos(state.todos);
    },

    [TodosMutationTypes.MARK_COMPLETED](state: State, todoId: string) {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed: todo.id === todoId ? !todo.completed : todo.completed,
      }));
      setTodos(state.todos);
    },

    [TodosMutationTypes.SET_STATUS](state: State, status: Status) {
      state.status = status;
    },
  },
};

export default todos;
