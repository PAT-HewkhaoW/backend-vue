<template>
  <div class="cookies-card-ctn" :class="{ hidden: isAccept }">
    <div class="cookies-title">
      <p>
        This website uses cookies to ensure you get the best experience on our
        website.
        <router-link to="/">Cookies Policy</router-link>
      </p>
    </div>
    <div class="accept-btn">
      <button @click="handleCookiesAccept">GOT IT</button>
    </div>
  </div>
</template>

<!-- 
  
  
  -->

<script>
export default {
  data() {
    return {
      isAccept: false,
    };
  },

  methods: {
    handleCookiesAccept() {
      this.isAccept = true;
    },
  },
};
</script>

<!-- 
  
  
  -->

<style lang="scss" scoped>
.hidden {
  transform: translateY(200%);
  transition: 0.3s ease all;
}

.cookies-card-ctn {
  max-width: 400px;
  width: fit-content;
  display: flex;
  flex-direction: column;

  position: fixed;
  bottom: 24px;
  right: 24px;

  z-index: 99;

  padding: 33px 30px;
  border-radius: 8px;
  background-color: black;
  gap: 12px;

  .cookies-title {
    p {
      font-family: satoshiregular;
      font-size: 16px;
      color: white;

      a {
        color: var(--color-accent);
      }
    }
  }

  .accept-btn {
    button {
      padding: 10px 18px;
      border: 0;
      border-radius: 6px;
      &:hover {
        background-color: var(--color-accent);
      }
    }
  }
}
</style>
