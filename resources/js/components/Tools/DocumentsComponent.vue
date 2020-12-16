<template>
  <div>
    <!-- <meta http-equiv="refresh" content="2;url=http://intranew/intranet/public/document_types" /> -->
      <h1 class="text-center pb-10 font-weight-bold grey--text ">Document Type</h1>

  <v-row   align-content="center"  >
   
     <v-col 
      v-for="(docs, i) in docType"  :key="i" 
      cols="6"
      md="3" sm="6" 
      >



      <router-link v-if="true" :to="'/tools/documents/document/'+docs.id">
     <v-card class="rounded-xl icon " :dark="false" color="" min-height="200"  hover> 
       <v-card-actions class="justify-center">
      <img class="zoom" width="100%" 
        :src="url.PublicURL+'/images/documents_types/clipboard.png'"       
      />
       </v-card-actions> 
   
        <h5 class=" text-center pb-5 font-weight-bold blue-grey--text "> {{ docs.name }}</h5>      
  

      </v-card>
      </router-link>




     </v-col>
  </v-row>

  </div>
</template>

<script>
import { mapState,  mapActions, mapGetters} from 'vuex';  
export default {

name:'DocumentsComponent',

     data: () => ({
      val:'',
    }),

mounted(){
this.$store.dispatch("toolsNdocTypeStore/GET_DocType");  
},

computed: {
  ...mapGetters('toolsNdocTypeStore', ['docType','url',]),      
},

beforeDestroy() {
                      
    window.topsfunc();                
},


}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.zoom {
  padding: 50px;
  /* background-color: green; */
  max-width: 200px; 
  transition: transform .2s;
  /* width: 150px; */
  /* height: 120px; */
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2); 
}
</style>