<!-- general > footer component -->

<script>
import IconBrand from "./icons/IconBrand.vue";
export default {
  props: {},

  data() {
    nav: "";
  },

  components: { IconBrand },

  mounted() {},

  methods: {},
};
</script>

<!--  -->

<template>
  <div class="footer-main">
    <div class="footer-container">
      <div class="navigation-link">
        <div class="link-list">
          <div class="link-item"></div>
        </div>
      </div>
      <div class="brand-contact">
        <div class="branding"><IconBrand color="#fff" /></div>
      </div>
      <div class="footer-bottom"></div>
    </div>
  </div>
</template>

<!--  -->

<style lang="scss" scoped>
@import "../assets/root.scss";

.footer-main {
  width: 100vw;
  height: 100vh;
  background-color: var(--vt-c-black);
  bottom: 0;
  .footer-container {
    .navigation-link {
    }

    .brand-contact {
    }
    .footer-bottom {
    }
  }
}
</style>
