<!-- navbar component -->

<script>
import Navitem from "./NavItem.vue";
import HamburgerBTN from "./HamburgerBTN.vue";
import IconLogo from "../icons/IconLogo.vue";
export default {
  props: {},

  data() {
    return {
      ismobile: true,
      menuToggled: false,
    };
  },

  components: { Navitem, HamburgerBTN, IconLogo },

  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  beforeDestroy() {
    window.addEventListener("resize", this.handleResize);
  },

  methods: {
    handleMenuToggle() {
      this.menuToggled = !this.menuToggled;
    },
  },
};
</script>

<!--  -->

<template>
  <div class="nav-main">
    <div class="nav-container">
      <div class="left-nav">
        <IconLogo />
      </div>
      <div class="middle-nav"></div>
      <div class="right-nav">
        <div class="nav-hamburger">
          <HamburgerBTN v-if="ismobile" @click="handleMenuToggle" />
        </div>
        <div class="desktop-right-nav">
          <div class="notification-container">this is notification</div>
          <div class="user-container">
            <div class="user-profile">
              <span></span>
            </div>
          </div>
          <router-link :to="{ name: 'user-signin' }">sign in</router-link>
        </div>
      </div>
    </div>
    <div class="nav-menu" :class="{ hidden: !menuToggled }">
      <div class="menu-item">
        <router-link :to="{ path: '/' }"> Home </router-link>
      </div>
      <div class="menu-item">
        <router-link :to="{ path: '/' }"> Search </router-link>
      </div>
      <div class="menu-item">
        <router-link :to="{ path: '/' }"> Notification </router-link>
      </div>
      <div class="menu-item">
        <router-link :to="{ path: '/' }"> Profile </router-link>
      </div>
    </div>
  </div>
</template>

<!--  -->

<style lang="scss" scoped>
@import "../../assets/root.scss";

.hidden {
  transform: translateY(calc(-100% - 80px));
}

.nav-main {
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  .nav-container {
    background-color: var(--vt-c-black);
    max-width: 1920px;
    width: 100%;
    padding: 24px 36px;
    max-width: var(1920px);
    display: flex;
    justify-content: space-between;

    @include for-desktop {
      margin: auto;
    }

    .left-nav {
    }

    .middle-nav {
    }

    .right-nav {
      display: flex;
      align-items: center;

      .desktop-right-nav {
        display: flex;
        gap: 24px;

        .user-container {
          .user-profile {
            span {
              display: block;
              width: 30px;
              height: 30px;
            }
          }
        }
      }
      .nav-hamburger {
        display: none;
        @include for-mobile {
          display: block;
          padding-right: 12px;
        }
      }
    }
  }

  .nav-menu {
    width: 100vw;
    padding: 24px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s ease-in-out;

    &::before {
      position: absolute;
      margin-top: 80px;
      top: 0;
    }
    .menu-item {
      text-align: center;

      a {
        font-size: 18px;
        text-decoration: none;
        color: #000;
      }
    }
  }
}
</style>
