<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="42"
    viewBox="0 0 169 196"
    fill="none"
  >
    <path
      d="M169 170C169 184.359 157.359 196 143 196C128.641 196 117 184.359 117 170C117 155.641 128.641 144 143 144C157.359 144 169 155.641 169 170Z"
      :fill="color"
    />
    <path
      d="M52 0H104V52V144V196C75.2812 196 52 172.719 52 144V104C23.2812 104 0 80.7188 0 52H52V0Z"
      :fill="color"
    />
    <path d="M117 52H169V104C140.281 104 117 80.7188 117 52Z" fill="#FFDE2E" />
  </svg>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  data() {
    return {};
  },

  props: {
    color: String,
  },
};
</script>
