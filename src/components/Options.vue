<template>
  <footer class="options">
    <span>1 item left</span>

    <div class="filters">
      <span class="option">All</span>
      <span class="option">Active</span>
      <span class="option">Completed</span>
    </div>

    <span class="option">Clear completed</span>
  </footer>
</template>

<script>
export default {
  name: 'Options',
};
</script>

<style lang="scss" scoped>
.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  .filters {
    display: flex;
    align-items: center;
  }

  .option {
    padding: 4.5px 10px;
    border-radius: 4px;
    transition: all 60ms ease-out;

    cursor: pointer;
  }

  .option:hover {
    color: $text-light-color;
    background-color: $primary-color;
  }
}
</style>
