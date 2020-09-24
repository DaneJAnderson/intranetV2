
require('./bootstrap');

window.Vue = require('vue');
import BootstrapVue from 'bootstrap-vue'; //Importing 
import vuetify from '../plugins/vuetify';


Vue.use(BootstrapVue) 


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('test-component', require('./components/TestComponent.vue').default);


const app = new Vue({
    vuetify,
    components: {
        // TestComponent
    }
    // el: '#app',
}).$mount('#app');























// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'