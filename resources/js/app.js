require('./bootstrap');

window.Vue = require('vue');

const urlBase = window.publicURL.includes('/public/')?"/intranetV2/public/":"";

const appnameApi = "/intranetV2/public/api/"

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routes }  from './routes' // importing an exported const
import BootstrapVue from 'bootstrap-vue'; //Importing 
import vuetify from '../plugins/vuetify';
import HeaderComponent from './components/AppHeader'
import FooterComponent from './components/AppFooter'
import SidebarComponent from './components/AppSidebar'
import homeStore from "./store/homeStore"
import VueScrollactive from 'vue-scrollactive';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuex) 
Vue.use(VueScrollactive);

const store = new Vuex.Store(
   homeStore
)

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
    data: {
      // publicURL: window.location.href
      publicURL: ""
    },
    vuetify,    
    components: {
        HeaderComponent, 
        FooterComponent,          
        SidebarComponent
    },
    router,
    store,
    mounted() {
      this.publicURL = window.publicURL;
      // this.publicURL = window.location.protocol+"//"+window.location.hostname+appname;
      
    }
 }).$mount('#app');
























// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'