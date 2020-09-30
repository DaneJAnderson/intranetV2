
<template>
  <div>
    <v-app-bar color="#fff"  >    
    <v-bottom-navigation v-model="value" color="primary" grow>

    
  <!-- <v-app-bar-nav-icon ></v-app-bar-nav-icon> -->


      <v-img class="ml-1"
        contain
        max-height="60"
        max-width="300"
        src="/images/COKSODALITY_LOGO.png"
      ></v-img>
  <!-- lazy-src="/images/COKSODALITY_LOGO.png" -->
  <!-- <v-toolbar-title>Page title</v-toolbar-title> -->
  <v-spacer></v-spacer>
      
      <div class="mr-15">
      <v-btn icon>
        <span>Home</span>
        <v-icon>{{icons.mdiHome}}</v-icon>
      </v-btn>

      <v-btn icon>
        <span>Tools</span>
        <v-icon>{{icons.mdiTools}}</v-icon>
      </v-btn>
      <v-btn icon >
        <span>HR Plus</span>
        <v-icon>{{icons.mdiHumanQueue}}</v-icon>
      </v-btn>
      </div>

      <v-spacer></v-spacer> 

      <span class="btn mr-10 mt-2" @click.stop="drawer = !drawer"  v-ripple>
         <v-icon size="40" color="#000"   >{{icons.mdiMenu}}</v-icon>         
      </span>
   
      </v-bottom-navigation>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app      
      clipped
      bottom      
      right
      :style="`margin-top: ${$vuetify.application.top+65}px`"
      :value="true"
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
            <v-list-item-title>Foo</v-list-item-title>
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

  </div>
</template>


<script>

import { mdiHome, mdiTools, mdiHumanQueue,mdiMenu } from '@mdi/js'
export default {
    name: 'HeaderComponent',
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
</style>