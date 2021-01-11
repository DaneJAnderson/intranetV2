
<template>
  <div>   

    <v-app-bar color="#fff" fixed elevation=2 clipped-right height="80">  
    <v-bottom-navigation v-model="value" color="#FF8F00"
    :mandatory='true'  >

      <a :href="PublicURL+'/'" class="text-decoration-none">
      <v-img class="ml-1" 
        contain
        max-height="60"
        max-width="300"
        :src="PublicURL+'/images/COKSODALITY_LOGO.svg'"
      ></v-img>       
      </a>
 
  <v-spacer></v-spacer>
      
      <div class="mr-15  d-none d-md-flex" >
      <router-link to="/" class="text-decoration-none" ><v-btn @click="toTop" icon>
        <span>Home</span>
        <v-icon>{{icons.mdiHome}}</v-icon>
      </v-btn>
      </router-link>
      
      <router-link to="/tools" class="text-decoration-none"><v-btn icon >
        <span>Tools</span>
        <v-icon >{{icons.mdiTools}}</v-icon>
      </v-btn></router-link>      
     
       <a href="http://192.168.110.132/" class="text-decoration-none" target="_blank" >
       <v-btn icon >
        <span>HR Plus</span>
        <v-icon color="black">{{icons.mdiHuman}}</v-icon>
      </v-btn></a>

       <a href="https://outlook.office365.com/mail" class="text-decoration-none" target="_blank" >
       <v-btn icon >
        <span>Web Mail</span>
        <v-icon color="black">{{icons.mdiEmail}}</v-icon>
      </v-btn></a>


      </div>
      <v-spacer></v-spacer>

       <!------  Menu Nav Icon ---- -->      
      
      <v-btn iconclass=" mr-10 mt-1" @click="drawerRoute" v-ripple>
         <v-icon size="40" :color="drawer?'#FF8F00':'#000'" >{{icons.mdiMenu}}</v-icon>
      </v-btn>
   
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
        flat
      >
        <v-list-item-group
          v-model="group"
          color="#000"
          active-class="black--text"
          
        >          

<!-- ----------------- Mobile Navigation ----------------- -->
      <div class=" " >
      
        <router-link to="/" class="text-decoration-none">
        <v-list-item class=" d-none d-sm-flex d-md-none mt-1" v-ripple="{ class: 'amber--text text--accent-4'}">
    <v-divider></v-divider>
         <v-list-item-title><v-icon class="ml-5">{{icons.mdiHome}}
           </v-icon ><span class="ml-5">Home</span></v-list-item-title>        
        </v-list-item>
        </router-link>          

        <router-link to="/tools" class="text-decoration-none ">
        <v-list-item class="  d-none d-sm-flex d-md-none mt-5" v-ripple="{ class: 'amber--text text--accent-4'}">
    <v-divider></v-divider>
         <v-list-item-title>
           <v-icon class="ml-5">{{icons.mdiTools}}</v-icon>
           <span class="ml-5">Tools</span></v-list-item-title>        
        </v-list-item>
        </router-link>          

        <a href="http://192.168.110.132/" class="text-decoration-none" target="_blank" >
        <v-list-item class=" d-none d-sm-flex d-md-none mt-5" v-ripple="{ class: 'amber--text text--accent-4'}">
    <v-divider></v-divider>
         <v-list-item-title>
              <v-icon color="black" class="ml-5">{{icons.mdiHuman }}</v-icon>
          <span class="ml-5">HR Plus</span></v-list-item-title>        
        </v-list-item>  
          </a>
      </div> 
        <!-- ----------------- End Mobile Nav ----------------  -->

      <div class=" " >

                     
        <router-link to="/about" class="text-decoration-none ">
        <v-list-item class="mt-5" v-ripple="{ class: 'amber--text text--accent-4'}">
         <v-list-item-title>
           <v-icon class="ml-5">{{icons.mdiAccountGroup}}</v-icon>
           <span class="ml-5">About COK</span></v-list-item-title>        
        </v-list-item>
        </router-link>   
 <v-divider></v-divider>

    <!-- <v-divider class="  d-none d-sm-flex d-md-none mt-5"></v-divider> -->
        <router-link to="/tools/documents" class="text-decoration-none" @click="currentRouteName">
        <v-list-item class="mt-5" v-ripple="{ class: 'amber--text text--accent-4'}">
         <v-list-item-title><v-icon class="ml-5">{{icons.mdiFileDocument}}
           </v-icon ><span class="ml-5 ">Documents</span></v-list-item-title>        
        </v-list-item>
        </router-link>  

    <v-divider></v-divider>
        <a href="http://intranew/Meeting/signin.php" class="text-decoration-none " target="_blank">
        <v-list-item class="mt-5" v-ripple="{ class: 'amber--text text--accent-4'}">
         <v-list-item-title>
           <v-icon color="black" class="ml-5">{{icons.mdiCalendar}}</v-icon>
           <span class="ml-5">Meeting Schedular</span></v-list-item-title>        
        </v-list-item>
        </a>   

    <v-divider></v-divider>
        <router-link to="/news" class="text-decoration-none ">
        <v-list-item class="mt-5" v-ripple="{ class: 'amber--text text--accent-4'}">
         <v-list-item-title>
           <v-icon class="ml-5">{{icons.mdiNewspaper}}</v-icon>
           <span class="ml-5">Notice Board</span></v-list-item-title>        
        </v-list-item>
        </router-link>     

    <v-divider></v-divider>
        <!-- <a href="http://intranew/queuing_system/" class="text-decoration-none " target="_blank" > -->
        <a href="http://192.168.110.26/queuing_system/" class="text-decoration-none " target="_blank" >
        <v-list-item class="mt-5" v-ripple="{ class: 'amber--text text--accent-4'}">
         <v-list-item-title>
              <v-icon color="black" class="ml-5">{{icons.mdiHumanQueue}}</v-icon>
          <span class="ml-5">Queueing System</span></v-list-item-title>        
        </v-list-item>  
          </a>


    <v-divider></v-divider>
        <!-- <router-link to="/admins" class="text-decoration-none "> -->
        <v-list-item class="mt-5" v-ripple="{ class: 'amber--text text--accent-4'}">
         <v-list-item-title>
           <v-icon class="ml-5">{{icons.mdiAccountCog}}</v-icon>
           <span class="ml-5">Administrator</span></v-list-item-title>        
        </v-list-item>
        <!-- </router-link>   -->



  

      </div>   

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> 

    <banner-component class="banner" v-if="this.$route.name == 'Home'"></banner-component>

  </div>
</template>


<script>
import { mdiHome, mdiTools, mdiHumanQueue,mdiMenu,mdiAccountCog,
mdiFileDocument,mdiCalendar, mdiNewspaper, mdiHuman, mdiEmail,
 mdiAccountGroup } from '@mdi/js'
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
     {mdiHome,mdiTools,mdiHumanQueue,mdiMenu,mdiFileDocument,
     mdiCalendar,mdiNewspaper,mdiHuman,mdiAccountCog,
     mdiAccountGroup,mdiEmail,
     }
    }),    
  
    methods: {

      drawerRoute() {        
          this.drawer = !this.drawer
          this.currentRouteName          
        }, 

        toTop(){
          window.topsfunc(); 
        }

        },
    
    computed: {  
      currentRouteName: {
        get(){
      // Route Navigation Highlighting  
        switch(this.$route.name)
        {
          case 'Home': this.value = 0;break;
          case 'tools': this.value = 1;break;
          default: this.value = 3;
        }
       
         return this.value;
      },

    }, 

    PublicURL (){
    //  return this.$store.state.url.PublicURL;
     return this.$store.state.homeStore.url.PublicURL;
    }
  
},
  watch:{

      group () {
        this.drawer = false;
        
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

.v-btn {
  outline: 0 !important;
}

/* Nav Icon Active Color */
.theme--light.v-btn.v-btn--icon {
  color: #FF8F00 !important;  
  /* color: blue !important; */
}

/* Nav Icon inActive Color */
.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color:black !important;
  outline: 0;
}


.v-app-bar {
  border-top: 2px solid #FF8F00  !important;
}

.banner {
  margin-top: 80px;
}

/* Right v-navigation-drawer properties */
#rightNavDrawer .v-navigation-drawer__content{
  border-top: 1px solid rgba(0, 0, 0, 0.3) !important; 
}

#rightNavDrawer {
   /* background: rgb(253, 251, 245); */
   background: rgba(247, 247, 247, 0.97);
   
}

.v-list-item:hover {

  background: rgb(255, 235, 198) !important;
  transition: .9s;
}


</style>