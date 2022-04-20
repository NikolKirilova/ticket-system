<template>
  <div class="register">
      <div class="register-box">
      <div class="left-side">
        <h2>Register</h2>
        <p>Sign up and control your work.</p>
      </div>
      <div class="form-wrapper">
    <form @submit.prevent="registerHandler">
      <div class="field">
        <!-- <label for="name">Name</label> -->
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          v-model="name"
          @input="$v.name.$touch()"
        />
        <div v-if="$v.name.error">
          <div class="field-error" v-if="!$v.name.required">
            Field is required!
          </div>
        </div>
        <template v-if="errors && errors.name">
          <div
            class="field-error"
            v-for="(error, index) in errors.name"
            :key="index"
          >
            {{ error }}
          </div>
        </template>
      </div>
      <div class="field">
        <!-- <label for="email">Email</label> -->
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
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
          placeholder="Enter your password"
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
      <div class="field">
        <!-- <label for="confirm-password">Confirm Password</label> -->
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
          v-model="confirmPassword"
          @input="$v.confirmPassword.$touch()"
        />
        <div v-if="!$v.confirmPassword.$error">
          <div class="field-error" v-if="!$v.confirmPassword.sameAsPassword">
            Password should match!
          </div>
        </div>
      </div>
        <div class="actions">
      <button :disabled="$v.$invalid">Register</button>
      <span>or</span>
      <router-link to="/login">Login</router-link>
  </div>

    </form>
  </div>
  </div>

  </div>
</template>

<script>
import authMixin from "@/mixins/auth";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Register",
  mixins: [authMixin],
  data() {
    return {
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      errors: null,
    };
  },
  methods: {
    registerHandler() {
      let dataToSend = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword,
      };
      this.register(dataToSend)
        .then(() => {
          this.$router.push("/login");
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
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    confirmPassword: {
      sameAsPassword: sameAs("password"),
    },
  },
};
</script>

<style scoped>
.register {
  position: absolute;
  top: 145px;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.register-box {
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
  width: 100%;
  font-size: 18px;
  padding: 5px 18px;
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
h2 {
  font-size: 32px;
    letter-spacing: 0.5px;
}
p{
  font-size: 18px;
}
</style>
