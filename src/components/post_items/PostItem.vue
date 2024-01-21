<!-- navbar > post-item component -->

<script>
import Avatar from "primevue/avatar";
export default {
  props: {},

  data() {
    return {
      post_id: 1,
      post_content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident odio architecto in quaerat nam consequuntur et ipsa quo, esse rerum ad laudantium eligendi voluptas velit accusamus eos repudiandae, cupiditate aliquam! Velit, ipsum accusamus perferendis maiores recusandae sed illo, iste magnam harum aliquid, nisi vero iusto tenetur. Assumenda exercitationem consequuntur asperiores.",
      date: "20/1/2564 12:00",
      post_owner: "username",
      reaction_count: 1,
      color: "",
    };
  },

  components: { Avatar },

  mounted() {},

  methods: {},
};
</script>

<!--  -->

<template>
  <div class="post-item-main">
    <div class="post-info-container">
      <div class="user-info">
        <div class="user-profile">
          <Avatar shape="circle" size="large" />
        </div>
        <div class="post-info">
          <div class="owner">
            {{ this.post_owner }}
          </div>

          <div class="date-time">
            {{ this.date }}
          </div>
        </div>
      </div>
    </div>
    <div class="post-content-container">
      <p>{{ this.post_content }}</p>
    </div>
  </div>
</template>

<!--  -->

<style lang="scss" scoped>
@import "../../assets/root.scss";

.post-item-main {
  display: flex;
  min-width: 100%;
  max-width: 1024px;
  flex-direction: column;
  background-color: var(--color-background-mute);
  border-radius: 16px;

  .post-info-container {
    padding: 24px;

    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;

      .user-profile {
      }

      .post-info {
        font-family: Inconsolata;

        .owner {
          font-size: 18px;
          font-weight: 500;
        }

        .date-time {
          font-size: 14px;
          color: var(--color-text);
        }
      }
    }
  }

  .post-content-container {
    padding: 0 24px 24px 24px;

    font-family: satoshi;
  }
}
</style>
