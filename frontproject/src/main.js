import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//BootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

//SocialSharing
import SocialSharing from 'vue-social-sharing';
Vue.use(SocialSharing);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
