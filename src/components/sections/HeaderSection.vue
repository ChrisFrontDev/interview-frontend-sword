<template>
  <div>
    <topbar />
    <div class="profile-container">
      <div>
        <div class="profile-info-container">
          <avatar />
          <div class="profile-info">
            <p>Name: Christian Santos</p>
            <p>Age: 25</p>
            <p>Location: São Paulo</p>
            <p>Occupation: Front-end Engineer</p>
          </div>
        </div>
        <div class="profile-about-me">
          <p>About me</p>
          <p>
            My Name Is john Smith lorem empus id fringilla molestie ornare diam
            in olestie ipsum etium rosn ollicitudin est, porttitor amet hitmassa
            Done cporttitor dolor shit dolor kiren lorem nisl molestie pretium
            etfring.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/UI/Topbar";
import Avatar from "@/components/UI/Avatar.vue";

export default {
  components: { Topbar, Avatar },

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
.profile-container {
  flex: 1;
  padding: 0 16px;
  display: flex;
  justify-content: center;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 68px 0;

    gap: 30px;

    @include for-tablet-landscape-up {
      flex-direction: row;
      max-width: 1080px;
    }
  }

  .profile-info-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;

    @include for-tablet-landscape-up {
      align-items: flex-end;
      flex-direction: row;
    }

    .profile-info {
      display: flex;
      flex-direction: column;

      @include for-tablet-landscape-up {
        text-align: start;
      }
    }
  }

  .profile-about-me {
    display: none;
    flex-direction: column;
    flex: 1;

    @include for-tablet-landscape-up {
      display: flex;
      max-width: 450px;
      text-align: end;
      justify-content: flex-end;
    }
  }
}
</style>
