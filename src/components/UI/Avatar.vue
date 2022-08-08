<template>
  <div>
    <img :src="avatarUrl" alt="" srcset="" />
  </div>
</template>

<script lang="ts">
export default {
  // components: { ElAvatar },

  setup() {
    const avatarUrl =
      "https://media-exp1.licdn.com/dms/image/C4E03AQGFJgDMABG3fg/profile-displayphoto-shrink_800_800/0/1579808884313?e=1665619200&v=beta&t=lgRNpLhC8pPGUCGQxmT-3YucmWTtZMV4kC4UfAjU12I";

    return {
      avatarUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 132px;
  height: 132px;
  border-radius: 50%;

  @include for-tablet-landscape-up {
    width: 194px;
    height: 194px;
  }
}
</style>
