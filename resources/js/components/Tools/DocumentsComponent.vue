<template>
  <div>
    <!-- <meta http-equiv="refresh" content="2;url=http://intranew/intranet/public/document_types" /> -->
    <div class="sticky  ml-n5 mr-n5">
      <h3 class="text-center pb-3 font-weight-bold grey--text ">Document Type</h3>
    </div>

  <v-row   align-content="center"  >
   
<v-row justify="center" class="mt-15 pt-15" v-if="!this.docType[0]">
      <v-progress-circular 
      :size="250"
      :width="7"
      color="amber"
      indeterminate
    ></v-progress-circular>        
</v-row>

     <v-col 
      v-for="(docs, i) in docType"  :key="i" 
      cols="6"
      md="3" sm="6" 
      >

      <router-link v-if="true" :to="'/tools/documents/document/'+docs.id">
     <v-card class="rounded-xl icon " :dark="false" color="" min-height="200" max-height="200" height="200"  hover> 
       <v-card-actions class="justify-center">
      <img class="zoom" width="100%" height="50%"
        :src="url.PublicURL+'/images/documents_types/clipboard.png'"       
      />
       </v-card-actions> 
   
        <h5 class=" text-center pb-1  pt-2 font-weight-bold blue-grey--text "> {{ docs.name }}</h5> 
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
this.$store.dispatch("documentStore/GET_DocType");  
},

computed: {
  ...mapGetters('documentStore', ['docType','url',]),      
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
  padding: 0px;
  padding-top: 10px;
  /* background-color: green; */
  max-width: 80px; 
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

div.sticky  {
  position: -webkit-sticky;
  position: sticky;
  top: 70px;
  background-color: white;
  padding: 15px 5px 0px 5px;
  
  z-index: 2;
}
</style>