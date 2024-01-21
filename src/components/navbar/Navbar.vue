<!-- navbar component -->

<script>
import Navitem from "./NavItem.vue";
import HamburgerBTN from "./HamburgerBTN.vue";
import IconBrand from "../icons/IconBrand.vue";
export default {
  props: {},

  data() {
    return {
      ismobile: true,
      menuToggled: false,
    };
  },

  components: { Navitem, HamburgerBTN, IconBrand },

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
        <IconBrand color="var(--vt-c-black)" />
      </div>
      <div class="middle-nav"></div>
      <div class="right-nav">
        <div class="nav-hamburger">
          <HamburgerBTN v-if="ismobile" @click="handleMenuToggle" />
        </div>
        <div class="desktop-right-nav">
          <div class="notification-container">
            <font-awesome-icon :icon="['fas', 'bell']" style="color: black" />
          </div>
          <div class="user-container">
            <div class="user-profile">
              <span></span>
            </div>

            <div class="auth-container">
              <div class="link-nav primary">
                <router-link :to="{ name: 'user-signin' }">sign in</router-link>
                <span></span>
              </div>

              <div class="link-nav secondary">
                <router-link :to="{ name: 'user-signup' }">sign up</router-link>
                <span></span>
              </div>
            </div>
          </div>
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
    max-width: 1920px;
    width: 100%;
    padding: 16px 36px;
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
        align-items: center;

        .notification-container {
          svg {
            height: 24px;
            width: auto;
          }
        }
        .user-container {
          display: flex;
          align-items: center;
          gap: 24px;
          .user-profile {
            span {
              display: block;
              width: 36px;
              height: 36px;
              border-radius: 9999px;
              background-color: cadetblue;
            }
          }
        }
        .auth-container {
          display: flex;
          gap: 32px;
          .link-nav {
            position: relative;
            padding: 4px 0;

            &.primary {
              a {
                color: var(--color-heading);
              }
            }

            &.secondary {
              a {
                color: var(--color-text);
              }
            }
            a {
              font-size: large;
              color: var(--vt-c-white);
              text-transform: capitalize;
              transition: width 0.3s ease;
              font-family: Inconsolata 500;
            }
            span {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 2px;
              background-color: var(--color-accent);
              transition: width 0.3s ease;
              &::after {
              }
            }

            &:hover {
              a {
                color: var(--color-accent);
              }
              span {
                width: 100%;
              }
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
    position: absolute;
    margin-top: 80px;
    top: 0;

    .menu-item {
      text-align: center;

      a {
        font-size: 18px;
        text-decoration: none;
        color: #000;
      }
    }

    @media (min-width: 577px) {
      transform: translateY(calc(-100% - 80px));
    }
  }
}
</style>
