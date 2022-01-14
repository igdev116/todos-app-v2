<template>
  <ul class="todo-list">
    <todo-item class="completed" />
    <todo-item />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: { TodoItem },
  name: 'TodoList',
};
</script>

<style lang="scss" scoped>
.todo-list {
  margin-top: 40px;

  perspective: 350px;
}
</style>
