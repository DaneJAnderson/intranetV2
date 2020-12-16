<template>
<div >
  
      <h3 class="text-center mb-10 grey--text"><b> Websites and Apps</b></h3>
       <router-view :key="$route.path" />

    <v-row  
     align-content="start"
     justify="start"
      >
   
     <v-col 
      v-for="(tool, i) in tools"  :key="i" 
      cols="6"
      md="3" sm="6" 

      >

      <router-link v-if="tool.link.includes('tools')" :to="tool.link">
        <v-card class="rounded-xl icon zoom" :dark="false" color="" min-height="320" max-height="320" max-width="350"  hover>  
       
      <img class="bdayThumb " width="100%" 
        :src="url.PublicURL+tool.icon"       
      />
      
      <div class="title" >
        <h3 class="text-body-2 ">
        {{ tool.title }}</h3>      
        <span class="overline mb-10">{{ tool.subtitle}}</span>
      </div>

      </v-card>
      </router-link>

      <a v-else :href="tool.link"  target="_blank">
      <v-card class="rounded-xl icon zoom" :dark="false" color="" min-height="320" max-height="320" max-width="350"  hover>  
       
      <img class="bdayThumb" width="100%" 
        :src="url.PublicURL+tool.icon"       
      />
      
      <div class="title" >
        <h3 class="text-body-2 ">
        {{ tool.title }}</h3>      
        <span class="overline mb-10">{{ tool.subtitle}}</span>
      </div>

      </v-card>
      </a>
    </v-col>
    </v-row>
       
  </div>
</template>

<script>

import { mapState,  mapActions, mapGetters} from 'vuex';  
export default {
    name: 'ToolsComponent',
    components: {
        
    },
    mounted(){

      // this.$store.dispatch("toolsNdocTypeStore/GET_DocType");  
    },
    computed: {
      ...mapGetters('toolsNdocTypeStore', ['docType','url','tools']),
    },
     beforeDestroy() {
                          
                window.topsfunc();   
                     
        }

}
</script>

<style scoped>

.title {
  padding: 0px 10px 5px 10px;
}

.icon:hover {
  border: 2px solid rgb(188, 219, 255);
  
}
.icon {
  border: 2px solid transparent;
  
}

a {
  text-decoration: none;
}

/* ------------------ Zoom on Hover ------------- */

* {
  box-sizing: border-box;
}

.zoom {
  /* padding: 50px; */
  max-width: 100%; 
  transition: transform .2s;
 
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.05); 
}

/* ------------------- End Zoom ---------------- */

</style>