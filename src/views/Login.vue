<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" name="email" id="user_email" placeholder="Email">
    <br>
    <input type="password" v-model="password" name="password" id="user_password" placeholder="Password">
    <br>
    <button @click="login">Login</button>
    <p>or Sign in with Google <br>
      <button @click="googleLogin" class="social-button">
        <img src="../assets/google_logo.png" alt="">
      </button>
    </p>
    <p>
      You dont have an account? You can
      <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "login",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          // alert("Weldone, you are logged in")
          this.$router.replace('home')
        },
        (err) => {
          alert('Opps' + err.message)
        }
      )
    },
    googleLogin: function() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(
        (user) => {
          // alert("Weldone, you are logged in")
          this.$router.replace('home')
        },
        (err) => {
          alert('Opps' + err.message)
        }
      )
    }
  }
};
</script>

<style scoped>
.login {
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
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
.social-button {
  width: 75px;
  background:white;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  outline: 0;
  border: 0;
}
.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
}

.social-button img {
  width: 100%;
}
</style>
