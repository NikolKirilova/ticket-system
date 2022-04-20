<template>
  <div class="login">
    <div class="login-box">
      <div class="left-side">
        <h2>Login</h2>
        <p>Sign in and control your work.</p>
      </div>
      <div class="form-wrapper">
        <form @submit.prevent="loginHandler">
          <div class="field">
            <!-- <label for="email">Email</label> -->
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              v-model="email"
              @input="$v.email.$touch()"
            />
            <div v-if="$v.email.$error">
              <div class="field-error" v-if="!$v.email.required">
                Field is required!
              </div>
              <div class="field-error" v-if="!$v.email.email">
                Email is invalid!
              </div>
            </div>
            <template v-if="errors && errors.email">
              <div
                class="field-error"
                v-for="(error, index) in errors.email"
                :key="index"
              >
                {{ error }}
              </div>
            </template>
          </div>
          <div class="field">
            <!-- <label for="password">Password</label> -->
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              v-model="password"
              @input="$v.password.$touch()"
            />
            <div v-if="$v.password.$error">
              <div class="field-error" v-if="!$v.password.required">
                Field is required!
              </div>
              <div class="field-error" v-if="!$v.password.minLength">
                Password should be at least 8 characters long!
              </div>
            </div>
            <template v-if="errors && errors.password">
              <div
                class="field-error"
                v-for="(error, index) in errors.password"
                :key="index"
              >
                {{ error }}
              </div>
            </template>
          </div>
          <div class="forget-password">
            <router-link to="/register">Forget Password?</router-link>
          </div>

          <div class="actions">
            <button :disabled="$v.$invalid">Login</button>
            <span>or</span>
            <router-link to="/">Register</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import authMixin from "@/mixins/auth";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  mixins: [authMixin],
  data() {
    return {
      email: null,
      password: null,
      errors: null,
    };
  },
  methods: {
    loginHandler() {
      let dataToSend = {
        email: this.email,
        password: this.password,
      };
      this.login(dataToSend)
        .then(() => {
          this.$router.push("/my-profile");
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          setTimeout(() => {
            this.errors = null;
          }, 5000);
        });
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 145px;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.login-box {
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 4px 1px #ebe6e6;
}
.left-side {
  width: 220px;
  background: #47b2e6;
  color: #fff;
  text-align: left;
  padding: 25px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.form-wrapper {
  width: 380px;
}
form {
  margin: 50px auto;
}
.field {
  width: 100%;
  margin-bottom: 20px;
}
.field label {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}
/* .field input {     
         font-size:18px;
         padding:5px 18px;
             border-radius: 15px;
    border: 1px solid #bfb7b7;
    } */

.field-error {
  border-radius: 8px;
  border: 1px solid #ff0000;
  background-color: #f0e5e5;
  color: red;
  padding: 5px 10px;
  font-size: 16px;
  margin-top: 5px;
  text-align: center;
}
 

.actions {
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin-top: 45px;
    align-items: center;
    margin-left: 40px;
}
.actions button {
    color: #47b2e6;
    background: #fff;
    border-radius: 20px;
    padding: 11px 14px;
    font-size: 18px;
    box-shadow: 0px 0px 4px 1px rgb(158 147 147 / 23%);
    cursor:pointer;
}
.actions a,
.forget-password a {
  text-decoration: none;
  font-weight: 600;
  color: #47b2e6;
  font-size: 18px;
    cursor:pointer;

}
.forget-password {
  text-align: left;
  margin-left: 30px;
}
h2 {
  font-size: 32px;
    letter-spacing: 0.5px;
}
p{
  font-size: 18px;
}
</style>
