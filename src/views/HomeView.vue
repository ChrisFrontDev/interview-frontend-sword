<template>
  <div class="home">
    <div>
      <header-section />
      <game-section />
      <statistics-section />
      <footer-section />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";

import HeaderSection from "@/components/sections/HeaderSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import GameSection from "@/components/sections/GameSection.vue";
import StatisticsSection from "@/components/sections/StatisticsSection.vue";

export default {
  components: {
    StatisticsSection,
    GameSection,
    FooterSection,
    HeaderSection,
  },

  setup() {
    const store = useStore();
    store.dispatch("game/createBoard", {
      boardGameType: 3,
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
