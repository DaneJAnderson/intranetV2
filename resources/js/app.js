require('./bootstrap');

window.Vue = require('vue');

const urlBase = "/intranetV2/public/";


import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import { routes }  from './routes' // importing an exported const
import BootstrapVue from 'bootstrap-vue'; //Importing 
import vuetify from '../plugins/vuetify';
import HeaderComponent from './components/AppHeader'
import FooterComponent from './components/AppFooter'
import SidebarComponent from './components/AppSidebar'
import VueScrollactive from 'vue-scrollactive';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import  homeStore  from "./store/homeStore"
import { adminStore } from './store/adminStore';
import { newsStore } from './store/newsStore';
import toolsStore from './store/toolsStore'
import documentStore from './store/documentStore'

Vue.use(VueRouter)
Vue.use(Vuex) 
Vue.use(VueScrollactive);
// Vue.use(axios);

  const store = new Vuex.Store({
   modules: { 
     adminStore, homeStore, toolsStore,
     documentStore, newsStore
  
  }
})


const router = new VueRouter({
routes,
mode: 'history',
base: urlBase,
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
  })

const app = new Vue({
   /*  data: {
      // publicURL: window.location.href
      publicURL: ""
    }, */
    vuetify,    
    components: {
        HeaderComponent, 
        FooterComponent,          
        SidebarComponent
    },
    router,
    store,
   /*  created() {
      this.publicURL = window.publicURL;           
    }, */
  
 }).$mount('#app');
























// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'