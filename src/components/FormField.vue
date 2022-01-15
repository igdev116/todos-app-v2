<template>
  <div class="form-field">
    <h1 class="title">~ Today I need to ~</h1>
    <form @submit.prevent="handleAddTodo(contentRef)" class="form-wrapper">
      <div class="form-input">
        <input
          ref="inputRef"
          placeholder="Add new todo..."
          v-model.trim="contentRef"
          autofocus
        />
      </div>
      <button type="submit" class="submit-btn"><span>Submit</span></button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

// nanoid
import { nanoid } from 'nanoid';

// enums
import { TodosMutationTypes } from '@/models/todos';

export default {
  name: 'FormInput',
  setup() {
    const store = useStore();

    const contentRef = ref<string>('');
    const inputRef = ref<HTMLElement>(null!);

    const handleAddTodo = (content: string) => {
      inputRef.value.focus();

      if (!content) return;

      store.commit(TodosMutationTypes.ADD_TODO, {
        id: nanoid(),
        content: content,
        completed: false,
      });
      store.commit(TodosMutationTypes.SET_STATUS, 'all');

      contentRef.value = '';
    };

    return { contentRef, inputRef, handleAddTodo };
  },
};
</script>

<style lang="scss" scoped>
.form-field {
  margin-top: 25px;
}

.title {
  font-size: 22px;
  margin-bottom: 18px;
}

.form-wrapper {
  display: flex;
  justify-content: center;
}

.form-input {
  display: inline-block;
  flex-grow: 0.65;
  margin-right: 15px;

  input {
    width: 100%;
    border-bottom: 3px dashed $primary-color;
    padding: 5px 0 3px;
    font-size: 18px;

    background: transparent;
  }

  ::-webkit-input-placeholder {
    font-family: $font-family;
    font-size: 18px;

    color: rgba(0, 0, 0, 0.26);
  }
}

.submit-btn {
  $transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  position: relative;

  transform: rotate(4deg);
  border-radius: 6px;

  transition: $transition;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';

    width: 100%;
    height: 100%;
    transform: scaleY(1.1);
    border: 1px solid $text-dark-color;
    border-radius: inherit;
    transform-origin: top;

    background-image: url('../assets/cross.png');
    background-color: $primary-color;

    transition: $transition;
  }

  &:active {
    transform: translateY(4px);
    padding-bottom: 0;
  }

  &:active::before {
    transform: scaleY(1);
  }

  span {
    position: relative;

    display: block;
    font-size: 16.5px;
    padding: 0.34em 0.84em;
    border: 2px solid $text-dark-color;
    border-radius: inherit;

    background-color: $text-light-color;
  }
}
</style>
