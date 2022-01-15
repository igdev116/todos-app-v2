export interface Todo {
  readonly id: string;
  content: string;
  completed: boolean;
}

export type Status = 'all' | 'active' | 'completed';

export interface State {
  todos: Todo[];
  status: Status;
}

export interface Getters {
  todos(state: State): Todo[];
  allTodos(state: State): Todo[];
  activeTodos(state: State): Todo[];
  doneTodos(state: State): Todo[];
}

export enum TodosMutationTypes {
  SET_TODOS = 'SET_TODOS',
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  MARK_COMPLETED = 'MARK_COMPLETED',
  SET_STATUS = 'SET_STATUS',
}

export interface Mutations {
  [TodosMutationTypes.SET_TODOS](state: State): void;
  [TodosMutationTypes.ADD_TODO](state: State, todo: Todo): void;
  [TodosMutationTypes.DELETE_TODO](state: State, todoId: string): void;
  [TodosMutationTypes.CLEAR_COMPLETED](state: State): void;
  [TodosMutationTypes.MARK_COMPLETED](state: State, todoId: string): void;
  [TodosMutationTypes.SET_STATUS](state: State, status: Status): void;
}
