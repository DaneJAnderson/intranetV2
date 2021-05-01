<template>
  <div>

<!-- ------------------------------------------------------------------------------- -->
<v-col cols="auto" class="float-left mt-n3">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="info"
            v-bind="attrs"
            v-on="on"
          >Upload Gallery Photos</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>

<!-- ----------------------------- UPLOAD FILE closeDialog;noticeDialog----------------------------- -->
            <uploadGalleryComp @closeDialog="dialog.value = false" ></uploadGalleryComp>
           
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    <!-- ---------------------------------------------------------------------------------------- -->

      <h3 class="text-center mb-10">
        <span class="grey lighten-1 white--text rounded-lg p-2"> Gallery Admin Panel </span></h3>        

      <v-row v-if="this.gallery.data && this.gallery.data.length >0"  class="">

		  <v-col v-for="(image, index) in this.gallery.data" :key="index" cols="4" lg="3" md="4" class="">
      <v-card>
			<img class="noticeImg" width="100%" height="260px" :src="url.StorageURL+'images/galleries/'+image.image" />
 
      <v-tooltip top :open-delay="700">
      <template #activator="data">
      <v-btn :elevation=0 :depressed='true' class="float-md-right white mt-n7" @click="imageID(image.id)"
      v-on="data.on">
        <v-icon color="red">{{icons.mdiDelete}}</v-icon></v-btn>
       </template> 
      <span>Delete Notice</span> 
      </v-tooltip>

<!------------------------ Confirmation Dialog Popup ---------------- -->
      <v-dialog
      v-model="dialog"
      width="300"
      :retain-focus="false"
    >
      <v-card>
        <v-card-title class="headline">
          <span class="grey lighten-5 ">
            Are You Sure You Want to Delete this Photo?</span>
        </v-card-title>

        <v-card-text>
          
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="amber darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="deletePhoto()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      </v-card>
		</v-col> 
	</v-row>

    <div class="text-center float-right mt-10">
    <v-pagination
      v-model="currentPage"
      :length="lastPage"
      :total-visible="7"
    ></v-pagination>
  </div>
  
  </div>
</template>

<script>

import { mapState,  mapActions, mapGetters, mapMutations } from 'vuex';  
import { mdiClipboardEdit, mdiDelete, mdiContentSaveEdit } from '@mdi/js';
import uploadGalleryComp from './uploadGallery';

export default {
    name: 'AdmnoticeComponent',
    data () {
      return{
        editable: false,
        setIndex:-1, 
        dialog: false,
        noticeDialog:false,
        imageid: -1,
      
      icons: {mdiClipboardEdit,mdiDelete,mdiContentSaveEdit}
    }
    },
    components: {uploadGalleryComp},
	mounted(){    

      const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');
    const username = sessionStorage.getItem('username');
    // const token = localStorage.getItem('token');
    // const username = localStorage.getItem('username');
    const auth = this.$store.getters['adminStore/auth'];

    if((!token&&!auth.token) || (!username&&!auth.username)){
      this.$router.replace('/');
    }
    
      this.GET_GALLERY();
      // this.$store.dispatch("galleryStore/PUT_Notice_Name");   
  },
    computed: {     
      ...mapGetters('galleryStore', ['gallery','url']),

      setEdit(){
        return this.setIndex;
      },

       currentPage: { 
            get(){
                
                return this.gallery.current_page
            },
            set(value){
				
                this.SET_CURRENTPAGE(value);
                // this.$store.commit("galleryStore/SET_CURRENTPAGE",value)
            }
        },

        lastPage: {
            get(){
                return this.gallery.last_page }
        }
        

  },  

  watch:{

        currentPage(newValue, oldValue) {      
           try{
             window.topsfunc(); 
            }catch(e){}
            setTimeout(()=>  this.GET_GALLERY(newValue), 1);
        },
    
  },

	methods: {    

    
        ...mapMutations('galleryStore', ['SET_CURRENTPAGE']), // set data in store

      ...mapActions('galleryStore', ['GET_GALLERY','PUT_Notice_Name','DELETE_GALLERY']),
        // paginatePage(pageNum) { this.$store.dispatch("galleryStore/GET_Notices",pageNum); },

      makeEditable: function(index){        

        this.setIndex = index;
        this.editable = !this.editable;        

      },

      saveEditedName(index,id){

        let name = document.getElementById('notice_'+index).value;           
        // this.$store.dispatch("galleryStore/PUT_Notice_Name",{index, name});
        this.PUT_Notice_Name({id,name})
        this.makeEditable(index);

      }, 

      deletePhoto(){
       
        this.DELETE_GALLERY(this.imageid);
        this.dialog = false;
        
      },
      imageID(id){
         this.dialog = true;
        this.imageid = id;
      },

    /*   closeDialog(f){
        console.log('we are here '+f);
        this.noticeDialog = f;
      } */
   
  }

}
</script>

<style scoped>

.noticeImg {
  height: 270px !important;
}

</style>


























<!--

				// Another way of Calling State		
    /*
    
		// ...mapState('homeStore',['notices','url'] ),
    
    notices (){
			return this.$store.state.homeStore.notices;
		},
		url(){
			return this.$store.state.homeStore.url
    }, 
    
   // this.$store.dispatch("homeStore/GET_Notices");// Another way yo call actions
    
    */


    -->