<template>
  <header>Logo</header>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 76px;

  @include for-tablet-landscape-up {
    height: 86px;
  }
}
</style>
