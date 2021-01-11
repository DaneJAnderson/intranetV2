<template>
 <div>
  
      <div class="sticky  ml-n5 mr-n5">
      <input class="search documentSearch" type="text" v-model="searchQuery" placeholder="Search..." />
        <h1 class="text-center pb-5 font-weight-bold grey--text ">{{ docType }}</h1>
        </div>

  <v-row justify="center" class="mt-15 pt-15" v-if="!this.resultQuery[0]">
      <v-progress-circular 
      :size="250"
      :width="7"
      color="amber"
      indeterminate
    ></v-progress-circular>        
</v-row>

  <v-row v-if="this.resultQuery[0]"  align-content="center"  >
   <!-- this.documents -->
     <v-col 
      v-for="(docs, i) in resultQuery"  :key="i" 
      cols="6"
      md="3" sm="6" 
     >

     <!-- ------------- Folders ---------------- -->
   
     <router-link v-if="docs.format == 5"   
     :to="'/tools/documents/subfolder/'+docs.id+'/?id='+docs.id+'&type_id='+docs.type"
     >
     <v-card class="name rounded-xl icon " :dark="false"  min-height="200" max-height="200" height="200"  hover     
     @click="setSubfolderData({'id':docs.id,'doctype':doctype,'type_id':docs.type})"> 
       <v-card-actions class="justify-center">
 
      <img class="zoom" width="100%"  :src="url.PublicURL+'/images/documents_types/folder.png'"  />     
       </v-card-actions> 
   
        <h6 class="name text-center pb-1  pt-2"> {{ docs.name }}</h6> 
      </v-card>    
     </router-link>


    <!-- ----------------- Files -------------- -->
      <a v-else :href="url.StorageURL+'documents/'+docs.file" target="_blank">
   
     <v-card class="name rounded-xl icon " :dark="false"  min-height="200" max-height="200" height="200"  hover> 
       <v-card-actions class="justify-center">
      <img class="zoom" width="100%" v-if="docs.format == 1" :src="url.PublicURL+'/images/documents_types/pdf.png'"  />      
      <img class="zoom" width="100%" v-if="docs.format == 2" :src="url.PublicURL+'/images/documents_types/word.png'"  />
      <img class="zoom" width="100%" v-if="docs.format == 3" :src="url.PublicURL+'/images/documents_types/excel.png'"  />
      <img class="zoom" width="100%" v-if="docs.format == 4" :src="url.PublicURL+'/images/documents_types/link.png'"  />
      <img class="zoom" width="100%" v-if="docs.format == 5" :src="url.PublicURL+'/images/documents_types/folder.png'"  />     
       </v-card-actions> 
   
        <h6 class="name text-center pb-1  pt-2"> {{ docs.name }}</h6>  
      </v-card>
     </a>

     
     </v-col>
  </v-row>

  </div>
</template>

<script>
import { mapState,  mapActions, mapGetters} from 'vuex'; 
export default {
  name: 'DocumentComponent',
       data: () => ({
         id: null,
         searchQuery: null,
         doctype:'',
    }),

    mounted(){
      this.id = this.$route.params.id;
      // console.log('this is route '+this.id)
      this.$store.dispatch("documentStore/GET_Documents", this.id);  
      
    },

        computed: {
      ...mapGetters('documentStore', ['documents','url',]), 
      
      // ---------------- Search -------------------- //
      resultQuery(){
      if(this.searchQuery){
      return this.documents.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }else{
        return this.documents;
      }
    },

      docType:{
        get(){

          if(this.documents[0]){
          let type_id = this.documents[0].type;
          let type = '';

          switch(type_id){

            case 1: type = 'Member'; break;
            case 2: type = 'Credit'; break;
            case 3: type = 'Operation Procedures'; break;
            case 4: type = 'MIS'; break;
            case 5: type = 'DMU'; break;
            case 6: type = 'HR & Learning'; break;
            case 7: type = 'Other'; break;
            case 8: type = 'Policy'; break;
            case 9: type = 'Risk & Compliance'; break;
            case 10: type = 'Universa Training Manuals'; break;
            case 11: type = 'Letters to Network'; break;
            // case : type = ''; break;
            default: type = 'Documents';  
          }

          this.doctype = type;
          return this.doctype ;
          }
        }
        
      }    
    },
    methods: {

      setSubfolderData(data){
        
        let post = data;
        this.$store.commit('documentStore/SET_SubfolderPostData', data); // 
      }
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
  max-width: 100px; 
  transition: transform .2s;
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(0.8); /* IE 9 */
  -webkit-transform: scale(0.8); /* Safari 3-8 */
  transform: scale(0.8); 
}

.name:hover{
color: rgb(165, 107, 0);
}

.search
{
    border: 2px solid #ffb500;
    color: #000000;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0px;
    padding-bottom: 5px;
    padding-left: 5px;
    outline: 0;
}

.documentSearch {

    outline: none !important;
    padding-left: 20px;
    border: 1px solid rgb(255, 221, 109);   
    margin-bottom: -50px;   
    float: right;  
    width: 250px;  


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