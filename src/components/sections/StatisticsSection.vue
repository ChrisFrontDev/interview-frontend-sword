<template>
  <div class="statistics-container">
    <div>
      <h2>Awesome statistics</h2>
      <p>All statistics in a one place!</p>
      <!--TODO:ADD STATISTICS-->
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.statistics-container {
  flex: 1;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  background-color: #00dca4;

  & > div {
    max-width: 1080px;
    flex: 1;
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
}
</style>
