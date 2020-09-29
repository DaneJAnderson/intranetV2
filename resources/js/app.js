require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routes }  from './routes' // importing an exported const
import BootstrapVue from 'bootstrap-vue'; //Importing 
import vuetify from '../plugins/vuetify';
import HeaderComponent from './components/AppHeader'
import FooterComponent from './components/AppFooter'
import SidebarComponent from './components/AppSidebar'
import homeStore from "./store/homeStore"

// import '../sass/app.scss'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(
   homeStore
)

const router = new VueRouter({
routes,
mode: 'history',
base: window.location.pathName,
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
  })

const app = new Vue({
    vuetify,    
    components: {
        HeaderComponent, 
        FooterComponent,          
        SidebarComponent
    },
    router,
    store
 }).$mount('#app');
























// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'