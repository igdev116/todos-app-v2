<template>
  <li class="todo-item">
    <!-- <font-awesome-icon icon="check" class="check" /> -->
    <span class="checkbox" />
    <p class="content">Lorem ipsum dolor sit amet,</p>
    <font-awesome-icon icon="times" class="close" />
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 14px 10px;
  border-radius: 5px;

  transition: all 0.25s ease-out;

  cursor: pointer;

  & + & {
    margin-top: 15px;
  }

  .content {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 7px;
  }

  .checkbox {
    padding: 5px;
    margin-right: 8px;
    border-radius: 2px;
    border: 2px solid $text-dark-color;
  }

  .close {
    margin-left: auto;

    transition: color 0.2s ease-out;
  }

  .close:hover {
    color: rgba($text-dark-color, 0.7);
  }
}

.todo-item.completed {
  background-color: $primary-color;

  animation: flipInX 0.75s ease-in-out both;

  .check {
    margin-right: 8px;
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

  .close:hover {
    color: rgba($text-light-color, 0.65);
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
</style>
