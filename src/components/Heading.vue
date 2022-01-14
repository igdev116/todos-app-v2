<template>
  <header class="heading">
    <div class="img-wrapper">
      <img src="../assets/note.svg" alt="Note" />
    </div>
    <div class="title">To-Do List</div>
  </header>
</template>

<script>
export default {
  name: 'Heading',
};
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  align-items: center;
  justify-content: center;

  .img-wrapper {
    width: 80px;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    transform: rotate(3deg);
    font-size: 19px;
    padding: 0.65em 1.1em 0.35em;
    border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;

    color: $text-light-color;
    background: $primary-color;
  }
}
</style>
