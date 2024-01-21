<template>
  <div class="icon-container">
    <font-awesome-icon :icon="['fas', 'plus']" />
  </div>
</template>

<style lang="scss" scoped>
.icon-container {
  margin: 18px;
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

  &:hover {
    transform: scale(1.2);
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
</style>
