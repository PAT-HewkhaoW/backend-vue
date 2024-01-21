<script>
import PostForm from "./PostForm.vue";
export default {
  data() {
    return {
      showlabel: false,
    };
  },
  components: { PostForm },
};
</script>

<template>
  <div
    class="add-new-post-main"
    @mouseenter="showlabel = true"
    @mouseleave="showlabel = false"
  >
    <div class="icon-container" :class="{ hovering: showlabel }">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </div>
    <div class="label-container" v-if="showlabel">
      <p>Add New Post.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-new-post-main {
  position: relative;
  display: flex;
  align-items: center;

  .icon-container {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 31px;

    width: 72px;
    height: 72px;
    border-radius: 9999px;

    background-color: var(--color-accent);
    display: flex;
    justify-content: center;

    svg {
      width: 30px;
      height: auto;
    }

    &.hovering {
      width: 86px;
      height: 86px;
      bottom: 24px;

      transition: 0.3s ease;
      svg {
        transform: rotate(45deg);
        transition: 0.3s ease;
      }
    }

    &:not(:hover) {
      transition: 0.1s ease;

      svg {
        transition: 0.3s ease;
      }
    }
  }

  .label-container {
    width: 251px;
    height: 86px;
    border-radius: 43px;
    background-color: var(--color-accent);
    position: absolute;
    right: 0;

    bottom: 24px;
    padding: 0 86px 0 48px;
    z-index: 0;

    display: flex;
    align-items: center;
    transform: translateY(0);

    animation: 0.5s linear;

    p {
      cursor: pointer;
      color: var(--text-heading);
      font-size: 18px;
      font-family: Inconsolata;
      animation: showtext 0.5s ease-out;
    }
  }
}

@keyframes labelshow {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes showtext {
  0% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}
</style>
