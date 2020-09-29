
import Vue from 'vue'
import Vuetify, {  VToolbar,VCard,
   VApp,VSheet,VContainer, VAppBar,
  } from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: { 
    VApp,VCard,VContainer,
    VToolbar,VSheet,VAppBar
  },
  directives: {
    Ripple,
  },
})

const opts = {}

export default new Vuetify(opts)
















/* import Vue from 'vue'
import Vuetify, {
   VCard,
   VMenu,
  VRating,
  VToolbar,
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
     VCard,
     VMenu,
    VRating,
    VToolbar,
  },
  directives: {
    Ripple,
  },
})

const opts = {}

export default new Vuetify(opts) */