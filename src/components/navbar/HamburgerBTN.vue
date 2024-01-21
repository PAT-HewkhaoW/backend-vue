<!-- navbar > nav-hamburger component -->

<script>
export default {
  props: {},

  data() {
    return {
      isActive: false,
      menuToggle: false,
    };
  },

  components: {},

  mounted() {},

  methods: {
    toggleMenu() {
      this.menuToggle = !this.menuToggle;
      this.$emit("toggle", !this.menuToggle);
      console.log(menuToggle);
    },
  },
};
</script>

<!--  -->

<template>
  <div
    class="hamburger-btn"
    @click="[(isActive = !isActive), toggleMenu]"
    :class="{ active: isActive }"
  >
    <span></span><span></span><span></span>
  </div>
</template>

<!--  -->

<style lang="scss" scoped>
@import "../../assets/root.scss";

.active {
}

.hamburger-btn {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;

  span {
    display: block;
    width: 24px;
    height: 2px;

    background-color: var(--vt-c-black);
    border-radius: 9999px;

    transition: all 0.3s ease-in-out;
  }

  &.active span:nth-child(2) {
    opacity: 0;
    transition: 0.1s ease;
  }

  &.active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  &.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>
