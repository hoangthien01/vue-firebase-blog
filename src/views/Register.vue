<template>
  <div class="form-res-wrap">
    <div class="background"></div>
    <form class="register-form">
      <div class="login-suggest">
        Đã có tài khoản? 
        <router-link class="router-link" :to="{ name: 'Login' }">
          Đăng nhập
        </router-link>
      </div>
      <h2>Tạo tài khoản</h2>
      <div class="input-fields">
        <div class="input-field">
          <UserIcon class="icon" />
          <input type="text" placeholder="Họ" v-model="firstName" />
        </div>
        <div class="input-field">
          <UserIcon class="icon" />
          <input type="text" placeholder="Tên" v-model="lastName" />
        </div>
        <div class="input-field">
          <UserIcon class="icon" />
          <input type="text" placeholder="Tên tài khoản" v-model="username" />
        </div>
        <div class="input-field">
          <EmailIcon class="icon" />
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="input-field">
          <PasswordIcon class="icon" />
          <input type="password" placeholder="Mật khẩu" v-model="password" />
        </div>
        <div v-show="error" class="error">{{ errorMessage }}</div>
      </div>
      <button @click.prevent="register">ĐĂNG KÝ</button>
    </form>
  </div>
</template>

<script>
import UserIcon from "../assets/Icons/user-alt-light.svg";
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PasswordIcon from "../assets/Icons/lock-alt-solid.svg";

export default {
  name: "Login",
  components: { UserIcon, EmailIcon, PasswordIcon },
};
</script>


<style lang="scss" scoped>
.form-res-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 100%;

  form {
    padding: 0 10px;
    padding: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px) {
      padding: 0 50px;
    }

    .login-suggest {
      margin-bottom: 32px;
      .router-link {
        color: black;
      }
    }

    h2 {
      font-weight: 900;
      font-size: 30px;
      color: black;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .input-fields {
      width: 100%;
      max-width: 350px;

      .input-field {
        display: flex;
        position: relative;
        justify-self: center;
        align-items: center;
        margin-bottom: 8px;

        input {
          width: 100%;
          border: none;
          background-color: rgb(242, 247, 246);
          font-size: 14px;
          height: 50px;
          padding: 4px 4px 4px 30px;
        }

        .icon {
          width: 16px;
          position: absolute;
          left: 7px;
        }
      }

      @media (max-width: 400px) {
        max-width: 300px;
        .input-field input {
          font-size: 13px;
        }
      }
    }

    button {
      margin-top: 20px;
      transition: ease all 0.5s;
      cursor: pointer;
      padding: 12px 24px;
      background-color: black;
      color: #fff;
      border-radius: 20px;
      border: none;
      
      &:hover {
        background-color: #555555;
      }
    }
  }

  .background {
    display: none;
    flex: 1.8;
    background: url("../assets/background.jpg");
    background-size: cover;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>