<template>
  <container />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/Container.vue';

export default defineComponent({
  name: 'App',
  components: { Container },
});
</script>

<style lang="scss">
*,
::before,
::after {
  font-family: $font-family;
}

html {
  color: $text-dark-color;
}

body {
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: $body-bgc;
  background-repeat: no-repeat;

  @include mobile {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
