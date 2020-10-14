<template>
    <div>
        
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

  <!-- <v-list
        nav
        dense
        flat
        
      >
        <v-list-item-group
          v-model="group"
          
        > -->
          <!-- active-class="font-weight-bold orange--text"         -->
          <!-- active-class="deep-purple--text text--accent-4" -->

<scrollactive class="my-nav mt-10"  :active-class="'orange--text'" :offset="90" v-on:itemchanged="onItemChanged"
:duration="800" bezier-easing-value=".5,0,.35,1" :alwaysTrack="true"  :highlightFirstItem="true"
 :scrollOffset='89'>
<!-- scrollOffset must be < offset -->

    <ul style="list-style-type: none;">
        <li >
          <a href="#sec1" class="scrollactive-item ">
          <!-- <v-list-item href="#sec1" class="scrollactive-item nav-item"> -->
            Section 1
          <!-- </v-list-item> -->
          </a></li>

          <li>
          <a href="#sec2" class="scrollactive-item">           
              Section 2             
          </a></li>

          <li>
          <a href="#sec3" class="scrollactive-item">
            Section 3
          </a></li>

        <li>
          <a href="#sec4" class="scrollactive-item">           
              Section 4             
          </a></li>

        </ul>

</scrollactive>
        <!-- </v-list-item-group>
      </v-list> -->
    </v-navigation-drawer>
        
    </div>
</template>
<script>

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
        // console.log("SideBar "+event.srcElement.scrollingElement.scrollTop);       
        //  console.dir(document.scrollingElement.scrollTop + ' SideBar')
        window.posGlobal = event.srcElement.scrollingElement.scrollTop;

      }
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

</style>