<template>
    <div >
        
  <v-navigation-drawer id="leftNavDrawer"
      app
      permanent     
      clipped     
      hide-overlay 
      :style="`margin-top: ${$vuetify.application.top+80}px`"
      :value="true"
      disable-resize-watcher
      disable-route-watcher    
      height="85vh" 
    >

<scrollactive class="my-nav mt-1" :scrollOnStart="false"  :offset="90" v-on:itemchanged="onItemChanged" :active-class="'active-class'"
:duration="800" bezier-easing-value=".5,0,.35,1" :alwaysTrack="true"  :highlightFirstItem="true" 
 :scrollOffset='89' >
<!-- scrollOffset must be < offset -->

    <ul style="list-style-type: none;" >

          
        <li class="mb-3">
          <a href="#noticeBoard" class="scrollactive-item sideText" @click="scrollTrue">
          <!-- <v-list-item href="#sec1" class="scrollactive-item nav-item"> -->
            Notice Board
          <!-- </v-list-item> -->
          </a></li>
                    
            <!----------- Check Birthday Today --------->
          <li class="mb-3"
          v-if="birthdays.bdayToday && birthdays.bdayToday.length">
          <a href="#happy-birthday" class="scrollactive-item sideText" @click="scrollTrue">           
              Happy Birthday            
          </a></li>
            
          <li class="mb-3"
          v-if="birthdays.firstHalf && birthdays.firstHalf.length" >  
          <a href="#upcoming-birthday" class="scrollactive-item sideText" @click="scrollTrue">           
               Birthdays this Month            
          </a></li>

          <li class="mb-3">
          <a href="#gallery" id="galleryTop" class="scrollactive-item sideText" @click="scrollTrue">
            Gallery
          </a></li>

        <li class="mb-3">
          <a href="#promotions" class="scrollactive-item sideText" @click="scrollTrue">           
              Promotions            
          </a></li>
          

        </ul>

</scrollactive>

    </v-navigation-drawer>
        
    </div>
</template>
<script>

import { mapState,  mapActions, mapGetters} from 'vuex';  

export default {

    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {    

      onItemChanged(event, currentItem, lastActiveItem) {
     
      try{
        window.scrollFunc();      
      }catch(e){
        console.log('Scroll Function Got Catch!!');
      }

      },
      scrollTrue(){        
        window.scrollTrue = true;
      },

   
      },
      computed: {
        
         ...mapGetters('homeStore', ['birthdays','url']),
      },
        mounted(){
    // this.$store.dispatch("homeStore/GET_Birthdays");  
        
  },
  
         
}
</script>
<style scoped>
.v-navigation-drawer {
    position: relative !important;
}

/* Left v-navigation-drawer properties */
#leftNavDrawer {
  
  color:black;
  
  }

  .active-class {
    color: orange !important;
    font-weight: bold;
  }

.sideText {

  font-weight: bold;
  color: rgb(70, 40, 1);
  font-family: Garamond, serif;
}

</style>