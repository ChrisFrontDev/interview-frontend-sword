<template>
  <footer>
    <div>
      <div class="link-group">
        <h2>About page</h2>
        <p>Play tic tac toe or 4-in-a-row anytime!</p>
        <p>Created by @christiansantos</p>
      </div>
      <div class="link-group">
        <h2>Contacts</h2>
        <p>(+351) 123 456 789</p>
        <p>Rua Sá da Bandira, 111, Porto</p>
      </div>
      <div class="link-group">
        <h2>Stay in touch</h2>
        <p>(+351) 123 456 789</p>
        <p>Rua Sá da Bandira, 111, Porto</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style lang="scss" scoped>
footer {
  flex: 1;
  background-color: #00dca4;
  padding: 0 16px;
  display: flex;
  justify-content: center;

  & > div {
    max-width: 1080px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 50px;
  }
}
</style>
