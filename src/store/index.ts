import { createStore } from 'vuex';

// types
import { InjectionKey } from 'vue';
import { Store } from 'vuex';
import { State } from '@/models/todos';

import todos from './modules/todos';

export const todosKey: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  modules: {
    todos,
  },
});

export default store;
