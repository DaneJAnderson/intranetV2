<template>
<div >
  
      <h3 class="text-center mb-10 grey--text"><b> Websites and Apps</b></h3>
       <router-view :key="$route.path" />

    

    <v-row  
     align-content="start"
     justify="start"
      >

<v-row justify="center" class="mt-15 pt-15" v-if="!this.tools[0]">
      <v-progress-circular 
      :size="250"
      :width="7"
      color="amber"
      indeterminate
    ></v-progress-circular>        
</v-row>
   
     <v-col 
      v-for="(tool, i) in tools"  :key="i" 
      cols="6"
      md="4" sm="6" lg="3"

      >

      <router-link v-if="tool.link.includes('tools')" :to="tool.link">
        <v-card class="rounded-xl icon zoom" :dark="false" color="" min-height="280" max-height="280" max-width="300"  hover>  
       
      <img class="bdayThumb " width="100%" height="180px"
        :src="url.PublicURL+tool.icon"       
      />
      
      <div class="title" >
        <h3 class="text-body-2 pt-2">
        {{ tool.title }}</h3>      
        <p class="overline mb-10">{{ tool.subtitle}}</p>
      </div>

      </v-card>
      </router-link>

      <a v-else :href="tool.link"  target="_blank">
      <v-card class="rounded-xl icon zoom" :dark="false" color="" min-height="280" max-height="280" max-width="300"  hover>  
       
      <img class="bdayThumb" width="100%" height="180px"
        :src="url.PublicURL+tool.icon"       
      />
      
      <div class="title" >
        <h3 class="text-body-2 pt-2">
        {{ tool.title }}</h3>      
        <p class="overline mb-10">{{ tool.subtitle}}</p>
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

      // this.$store.dispatch("toolsStore/GET_DocType");  
    },
    computed: {
      ...mapGetters('toolsStore', ['docType','url','tools']),
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
  transform: scale(1.07); 
}
.overline{
line-height: 1.6;

}
/* ------------------- End Zoom ---------------- */

</style>