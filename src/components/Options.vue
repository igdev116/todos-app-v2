<template>
  <footer class="options" v-if="allTodosCount > 0">
    <span>{{ activeTodosCount }} item left</span>

    <div class="filters">
      <span
        class="option"
        :class="status === 'all' && 'active'"
        @click="handleSetStatus('all')"
        >All</span
      >
      <span
        class="option"
        :class="status === 'active' && 'active'"
        @click="handleSetStatus('active')"
        v-if="activeTodosCount > 0 && doneTodosCount > 0"
        >Active</span
      >
      <span
        class="option"
        :class="status === 'completed' && 'active'"
        @click="handleSetStatus('completed')"
        v-if="doneTodosCount > 0 && activeTodosCount > 0"
        >Completed</span
      >
    </div>

    <span class="option" @click="handleClearCompleted" v-if="doneTodosCount > 0"
      >Clear completed</span
    >
  </footer>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

// types
import { Status } from '@/models/todos';

// enums
import { TodosMutationTypes } from '@/models/todos';

export default {
  name: 'Options',
  setup() {
    const store = useStore();

    const status = computed(() => store.state.todos.status);
    const activeTodosCount = computed(() => store.getters.activeTodos.length);
    const doneTodosCount = computed(() => store.getters.doneTodos.length);
    const allTodosCount = computed(() => store.getters.allTodos.length);

    const handleSetStatus = (status: Status) => {
      store.commit(TodosMutationTypes.SET_STATUS, status);
    };

    const handleClearCompleted = () => {
      store.commit(TodosMutationTypes.CLEAR_COMPLETED);
      store.commit(TodosMutationTypes.SET_STATUS, 'all');
    };

    return {
      status,
      allTodosCount,
      activeTodosCount,
      doneTodosCount,
      handleSetStatus,
      handleClearCompleted,
    };
  },
};
</script>

<style lang="scss" scoped>
.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  gap: 20px;

  @include mobile {
    flex-wrap: wrap;
  }

  .filters {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .option {
    padding: 0 0.6em;
    border-radius: 4px;
    transition: all 60ms ease-out;

    cursor: pointer;
    user-select: none;

    @include mobile {
      &:last-child {
        margin: 0 auto;
      }
    }
  }

  .option:hover,
  .option.active {
    color: $text-light-color;
    background-color: $primary-color;
  }
}
</style>
