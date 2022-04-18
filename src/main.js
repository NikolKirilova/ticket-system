import Vue from 'vue'
import App from './App.vue'
import router from './router'

//* Libraries
  //* Vuelidate  
  import Vuelidate from 'vuelidate'
  Vue.use(Vuelidate)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas, far, fab)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.filter('formatDate', function(dateInput) {
    let date = new Date(dateInput);

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    return `${months[month]} ${day}, ${year}`
  },)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
