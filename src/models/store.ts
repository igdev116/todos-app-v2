import { State as TodosState } from './todos';

export interface Store {
  todos: TodosState;
}
