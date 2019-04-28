import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

Vue.config.productionTip = false

let app = ''

const config = {
  apiKey: "AIzaSyB5pYoiDhmXJSZnJaz-A1FOq944X80GONk",
  authDomain: "work-management-98017.firebaseapp.com",
  databaseURL: "https://work-management-98017.firebaseio.com",
  projectId: "work-management-98017",
  storageBucket: "work-management-98017.appspot.com",
  messagingSenderId: "205974245355"
};
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
