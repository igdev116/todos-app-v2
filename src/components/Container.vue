<template>
  <main class="container">
    <heading />
    <form-field />
    <todos />
    <options />
  </main>
</template>

<script lang="ts">
import FormField from './FormField.vue';
import Heading from './Heading.vue';
import Options from './Options.vue';
import Todos from './Todos.vue';

export default {
  components: { Heading, FormField, Options, Todos },
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

  @include mobile {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
