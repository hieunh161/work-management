<template>
  <div class="sign-up">
    <p>Let's create an account !</p>
    <input type="text" v-model="email" name="email" id="user_email" placeholder="Email">
    <br>
    <input
      type="password"
      v-model="password"
      name="password"
      id="user_password"
      placeholder="Password"
    >
    <br>
    <button @click="signUp">Sign Up</button>
    <span>
      or go back to
      <router-link to="/login">login</router-link>
    </span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // alert("your account has been created");
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
