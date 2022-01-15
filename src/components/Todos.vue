<template>
  <ul class="todos" v-if="todos.length > 0">
    <li
      class="todos-item"
      :class="{ completed: todo.completed }"
      v-for="todo in todos"
      :key="todo.id"
    >
      <button
        class="check-btn"
        @click="handleMarkCompleted(todo.id)"
        v-if="todo.completed"
      >
        <font-awesome-icon icon="check" class="check" />
      </button>
      <button class="checkbox-btn" v-else @click="handleMarkCompleted(todo.id)">
        <div class="checkbox" />
      </button>
      <p class="content">{{ todo.content }}</p>
      <button class="close-btn" @click="handleDeleteTodo(todo.id)">
        <font-awesome-icon icon="times" class="close" />
      </button>
    </li>
  </ul>
  <div class="empty-todos" v-else-if="allTodos.length === 0">
    <font-awesome-icon icon="clipboard-check" class="icon" />
    <span class="msg">Congrat, you have no more tasks to do</span>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

// enums
import { TodosMutationTypes } from '@/models/todos';

export default {
  name: 'Todos',
  setup() {
    const store = useStore();

    const todos = computed(() => store.getters.todos);
    const allTodos = computed(() => store.getters.allTodos);
    const doneTodos = computed(() => store.getters.doneTodos);

    const handleMarkCompleted = (todoId: string) => {
      store.commit(TodosMutationTypes.MARK_COMPLETED, todoId);
    };

    const handleDeleteTodo = (todoId: string) => {
      store.commit(TodosMutationTypes.DELETE_TODO, todoId);
    };

    onMounted(() => {
      store.commit(TodosMutationTypes.SET_TODOS);
    });

    watch(doneTodos, () => {
      if (doneTodos.value.length === 0) {
        store.commit(TodosMutationTypes.SET_STATUS, 'all');
      }
    });

    return {
      todos,
      allTodos,
      handleMarkCompleted,
      handleDeleteTodo,
    };
  },
};
</script>

<style lang="scss" scoped>
.todos {
  margin-top: 40px;

  perspective: 350px;
}

.todos-item {
  display: flex;
  align-items: center;
  padding: 8px 10px 8px 0;
  border-radius: 5px;

  cursor: pointer;

  & + & {
    margin-top: 10px;
  }

  .content {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 7px;
  }

  .checkbox-btn {
    padding: 0 8px;
  }

  .checkbox {
    padding: 5px;
    border-radius: 2px;
    border: 2px solid $text-dark-color;
  }

  .close-btn {
    $spacing: 8px;

    margin: 0 calc($spacing * -1) 0 auto;
    padding: 0 $spacing;
  }

  .close {
    transition: color 0.2s ease-out;
  }

  .close-btn:hover .close {
    color: rgba($text-dark-color, 0.7);
  }
}

.todos-item.completed {
  background-color: $primary-color;

  animation: flipInX 0.75s ease-in-out both;

  .check-btn {
    padding: 0 8px;
  }

  .check {
    font-size: 14px;

    color: $text-light-color;
  }

  .content {
    color: $text-light-color;
    text-decoration: line-through;
  }

  .close {
    color: $text-light-color;
  }

  .close-btn:hover .close {
    color: rgba($text-light-color, 0.65);
  }
}

.empty-todos {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;

  animation: zoom 0.45s ease-in-out;

  .icon {
    color: rgba($text-dark-color, 0.35);
  }

  .msg {
    font-size: 17px;
    padding-top: 5px;

    color: rgba($text-dark-color, 0.45);
  }
}

@keyframes flipInX {
  0% {
    transform: rotateX(90deg);
    opacity: 0;
  }
  40% {
    transform: rotateX(-10deg);
  }
  70% {
    transform: rotateX(10deg);
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}

@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
