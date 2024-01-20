<!-- navbar > post-item component -->

<script>
export default {
  props: {},

  data() {
    return {
      post_id: 1,
      post_content: "lorem ipsom",
      date: "20/1/2564 12:00",
      post_owner: "user",
      reaction_count: 1,
    };
  },

  components: {},

  mounted() {},

  methods: {},
};
</script>

<!--  -->

<template>
  <div class="post-item-main">
    <div class="post-info-container">
      <div class="user-info"></div>
    </div>
  </div>
</template>

<!--  -->

<style lang="scss" scoped>
@import "../../assets/root.scss";

.post-item-main {
}
</style>
