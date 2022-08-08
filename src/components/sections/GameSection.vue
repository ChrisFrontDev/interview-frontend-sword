<template>
  <div class="game-container">
    <div>
      <h2>Tic tac toe games</h2>
      <p>Welcome to the best game in the world.</p>
      <board-game :size="3" />
    </div>
  </div>
</template>

<script>
import BoardGame from "@/components/BoardGame";

export default {
  components: { BoardGame },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.game-container {
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
