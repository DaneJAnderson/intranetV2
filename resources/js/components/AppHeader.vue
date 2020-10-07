
<template>
  <div >   

    <v-app-bar color="#fff" fixed elevation=2 clipped-right height="80">  
    <v-bottom-navigation v-model="value" color="#FF8F00"  >
    
  <!-- <v-app-bar-nav-icon ></v-app-bar-nav-icon> -->


      <v-img class="ml-1"
        contain
        max-height="60"
        max-width="300"
        :src="publicurl+'/images/COKSODALITY_LOGO.svg'"
      ></v-img>       
     

  <!-- lazy-src="/images/COKSODALITY_LOGO.png" -->
  <!-- <v-toolbar-title>Page title</v-toolbar-title> -->
  <v-spacer></v-spacer>
      
      <div class="mr-15" >
      <router-link to="/" class="text-decoration-none"><v-btn icon>
        <span>Home</span>
        <v-icon>{{icons.mdiHome}}</v-icon>
      </v-btn></router-link>

      
      <router-link to="/tools" class="text-decoration-none"><v-btn icon >
        <span>Tools</span>
        <v-icon >{{icons.mdiTools}}</v-icon>
      </v-btn></router-link>
      
      <v-btn icon >
        <span>HR Plus</span>
        <v-icon>{{icons.mdiHumanQueue}}</v-icon>
      </v-btn>
      </div>

      <v-spacer></v-spacer> 

      <span class="btn mr-10 mt-1" @click.stop="drawer = !drawer"  v-ripple>
         <v-icon size="40" :color="drawer?'#FF8F00':'#000'" >{{icons.mdiMenu}}</v-icon>         
      </span>
   
      </v-bottom-navigation>
    </v-app-bar>    

    <v-navigation-drawer id="rightNavDrawer"
      v-model="drawer"
      app      
      clipped 
      hide-overlay          
      right
      :style="`margin-top: ${       
        this.$vuetify.breakpoint.name=='sm'|
        this.$vuetify.breakpoint.name=='xs'
        ?
        $vuetify.application.top+80:
        $vuetify.application.top+80}px`"
      :value="true"
      disable-resize-watcher
      disable-route-watcher
      height="100vh"
      :mobile-breakpoint="`${this.$vuetify.breakpoint.name}`"
      
          >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo {{publicurl}}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <banner-component class="banner"></banner-component>
  </div>
</template>


<script>
import { mdiHome, mdiTools, mdiHumanQueue,mdiMenu } from '@mdi/js'
import BannerComponent from './HeaderBanner'

export default {
    name: 'HeaderComponent',
    props: ['publicurl'],
    components:{
      BannerComponent, 
    },
     data: () => ({
       value:0,
       drawer: false,
       group: null,
     icons:
     {mdiHome,mdiTools,mdiHumanQueue,mdiMenu,
     }
    }),
    
     watch: {
      group () {
        this.drawer = false
      },
    },
   
}
</script>

<style >
.v-bottom-navigation {
  border: none !important;
  box-shadow:none !important;
}
.btn { cursor: pointer;}

/* Nav Icon Active Color */
.theme--light.v-btn.v-btn--icon {
  color: #FF8F00 !important;
  /* color: blue !important; */
}

/* Nav Icon inActive Color */
.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color:black !important;
}


.v-app-bar {
  border-top: 2px solid #FF8F00  !important;

}

.banner {
  margin-top: 80px;
}

/* Right v-navigation-drawer properties */
#rightNavDrawer .v-navigation-drawer__content{
  border-top: 1px solid rgba(0, 0, 0, 0.3) !important
}


</style>