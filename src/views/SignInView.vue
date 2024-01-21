<script>
import axios from "axios";

import Password from "primevue/password";
import Toast from "primevue/toast";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  components: {
    Password,
    Toast,
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

    <div class="signin-card">
      <div class="signup-section">
        <p class="title">Already have an account?</p>
        <div class="signup-link">
          <router-link :to="{ name: 'user-signup' }">Sign Up </router-link>
        </div>
      </div>
      <div class="signin-form">
        <div class="card flex justify-content-center">
          <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="value">Password</label>
            <Password
              id="value"
              v-model="value"
              type="text"
              :class="{ 'p-invalid': errorMessage }"
              aria-describedby="text-error"
            />
            <small class="p-error" id="text-error">{{
              errorMessage || "&nbsp;"
            }}</small>
            <Button type="submit" label="Submit" />
          </form>
          <Toast />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/root.scss";
.signin-main {
  width: 100vw;
  height: 100vh;

  padding: 24px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  font-family: satoshi regular;
  .signin-card {
    background-color: var(--color-background-mute);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 30px 42px;
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
    }
  }
}
</style>
