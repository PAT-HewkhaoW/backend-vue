<script setup></script>

<template>
  <div class="signup-main">
    <div class="signup-container">
      <div class="signup-form-container">
        <div class="title">
          <p>Sign Up</p>
        </div>
        <form action="" class="signup-form">
          <div class="form-group">
            <label for="first-name">firstname</label>
            <input type="text" name="first-name" id="" />
          </div>

          <div class="form-group">
            <label for="last-name">lastname</label>
            <input type="text" name="last-name" id="" />
          </div>

          <div class="form-group">
            <label for="email">email</label>
            <input type="email" name="email" id="" />
          </div>

          <div class="form-group">
            <label for="password">password</label>

            <div class="input-cta">
              <input type="pasword" name="password" id="" />
            </div>
          </div>

          <div class="form-group">
            <label for="confirm-password">confirm password</label>

            <div class="input-cta">
              <input type="pasword" name="confirm-password" id="" />
            </div>
          </div>

          <button class="btn primary">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/root.scss";
.signup-main {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 36px;

  .signup-container {
    position: absolute;

    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 36px;
    display: flex;
    justify-content: center;

    @include for-tablet {
      justify-content: flex-end !important;
    }

    transform: translate(-50% -50%);

    .signup-form-container {
      max-height: max-content;
      max-width: 720px;

      background-color: aqua;
      border-radius: 16px;

      padding: 24px 72px;

      .title {
      }
      .signup-form {
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 24px;

        .form-group {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          justify-content: space-between;

          label {
          }

          input {
            padding: 8px 36px;
          }
        }
      }
    }
  }
}
</style>
