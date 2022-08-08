<template>
  <div class="board-game-container">
    <div v-for="(row, x) in board" :key="x" class="board-row">
      <div
        v-for="(cell, y) in row"
        :key="y"
        @click="move(x, y)"
        class="board-cell"
      >
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const move = (x: number, y: number) => {
      store.dispatch("game/makeMove", { x, y });
    };

    return {
      board: computed(() => store.state.game.board),
      move,
    };
  },
};
</script>

<style lang="scss" scoped>
.board-game-container {
  padding: 30px;
}

.board-row {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.board-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  width: 50px;
  height: 50px;
}
</style>
