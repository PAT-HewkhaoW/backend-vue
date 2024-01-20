<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async handleSubmit(e) {
      const response = await axios.post("login", {
        email: this.email,
        password: this.password,
      });

      console.log(response);
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="signin-main">
    <!-- Sign Up section -->
    <div class="left-signin"></div>
    <div class="right-signin">
      <div class="signup-section">
        <p class="title">Already have an account?</p>
        <div class="signup-link">
          <router-link :to="{ name: 'user-signin' }">Sign Up </router-link>
        </div>
      </div>
      <div class="signin-form">
        <div class="title">
          <h1>Sign In</h1>
        </div>
        <form action="" method="post" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="username"> email </label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="email"
            />
          </div>
          <div class="form-group">
            <label for="username"> password </label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="password"
            />
          </div>

          <button class="btn" type="submit">sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/root.scss";
.signin-main {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  font-family: satoshi regular;

  .left-signin {
    flex-basis: 40%;
    display: block;
    background-color: aquamarine;
  }

  .right-signin {
    flex-basis: 60%;
    padding: 30px 42px;
    height: 100%;
    .signup-section {
      display: flex;
      justify-content: flex-end;
      gap: 4px;

      .signup-link {
        a {
          color: red;
        }
      }
    }
    .signin-form {
      display: flex;
      flex-direction: column;
      height: 70%;
      justify-content: space-evenly;

      margin: 0 auto;

      @include for-desktop {
        max-width: 600px;
      }

      transition: 0.5s ease all;

      .title {
        font-family: satoshibold;
        font-weight: bold;
      }

      form {
        display: flex;
        flex-direction: column;

        gap: 18px;

        max-width: 100%;
        .form-group {
          display: flex;
          flex-direction: column;
          label {
            font-weight: 700;
          }

          .form-control {
            padding: 12px 16px;
            border: 1px solid var(--vt-c-divider-dark-2);
            border-radius: 6px;

            &:focus {
              border-color: blue;
            }
          }
        }

        .btn {
          margin-top: 70px;
          max-width: fit-content;
          text-transform: uppercase;
          padding: 12px 36px;
          margin-left: auto;

          border: 0;
          border-radius: 999px;
        }
      }
    }
  }
}
</style>
