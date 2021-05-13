import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.backendUrl = "http://127.0.0.1:8000"
Vue.prototype.endpoints = {
  groups: Vue.prototype.backendUrl + "/groups/",
  messages: Vue.prototype.backendUrl + "/messages/",
  emails: Vue.prototype.backendUrl + "/emails/",
  tasks: Vue.prototype.backendUrl + "/tasks/",
}

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
