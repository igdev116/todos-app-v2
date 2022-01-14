<template>
  <main class="container">
    <heading />
    <form-field />
    <todo-list />
    <options />
  </main>
</template>

<script>
import FormField from './FormField.vue';
import Heading from './Heading.vue';
import Options from './Options.vue';
import TodoList from './TodoList.vue';

export default {
  components: { Heading, FormField, Options, TodoList },
  name: 'Container',
};
</script>

<style lang="scss" scoped>
.container {
  padding: 30px 40px 20px;
  text-align: center;
  width: 440px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  background: $container-bgc;

  @include tablet {
    width: 100%;
  }
}
</style>
