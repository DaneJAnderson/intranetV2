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
          >Upload A Notice</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>

<!-- ----------------------------- UPLOAD FILE closeDialog;noticeDialog----------------------------- -->
            <uploadNotciesComp @closeDialog="dialog.value = false" ></uploadNotciesComp>
            <!-- <v-toolbar
              color="primary"
              dark
            >Opening from the bottom</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text> -->
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
        <span class="grey lighten-1 white--text rounded-lg p-2"> Noticeboard Administrator Panel </span></h3>        

      <v-row v-if="this.notices.data && this.notices.data.length >0"  class="">

		  <v-col v-for="(notice, index) in this.notices.data" :key="index" cols="4" lg="3" md="4" class="">
      <v-card>
			<img class="noticeImg" width="100%" height="260px" :src="url.StorageURL+notice.image" />
      <v-text-field :id="'notice_'+index" dense
      label="Title of Notice"
      :disabled="index==setEdit?!editable:true"
      :full-width="true"       
      v-model="notice.name"></v-text-field>	

<!-- --------------------  Edit Button Icon ------- -------------->
      <v-tooltip v-if="index==setEdit?!editable:true" top :open-delay="700">
      <template #activator="data">

      <v-btn :elevation=0 :depressed='true' class="mr-15 white" @click="makeEditable(index)"
       v-on="data.on">        
        <v-icon color="orange">{{icons.mdiClipboardEdit}}</v-icon>
      </v-btn>

      </template> 
      <span>Edit Title</span> 
      </v-tooltip>

<!-- ------------------------- Save Button Icon ----------------- -->
      <v-tooltip v-else  top :open-delay="700">
      <template #activator="data">

      <v-btn :elevation=0 :depressed='true' class="mr-15 white" @click="saveEditedName(index,notice.id)" 
       v-on="data.on"><v-icon color="blue">{{icons.mdiContentSaveEdit}}</v-icon></v-btn> 
      </template> 
      <span>Save Title</span> 
      </v-tooltip>

<!-- --------------------------- Delete Button Icon ------------- -->
      <v-tooltip top :open-delay="700">
      <template #activator="data">
      <v-btn :elevation=0 :depressed='true' class="float-md-right white" @click="noticeID(notice.id)"
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
            Are You Sure You Want to Delete this Notice?</span>
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
            @click="deleteNotice()"
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
import uploadNotciesComp from './uploadNotices';

export default {
    name: 'AdmnoticeComponent',
    data () {
      return{
        editable: false,
        setIndex:-1, 
        dialog: false,
        noticeDialog:false,
        noticeid: -1,
      
      icons: {mdiClipboardEdit,mdiDelete,mdiContentSaveEdit}
    }
    },
    components: {uploadNotciesComp},
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
    
      this.GET_Notices();
      // this.$store.dispatch("noticeStore/PUT_Notice_Name");   
  },
    computed: {     
      ...mapGetters('noticeStore', ['notices','url']),

      setEdit(){
        return this.setIndex;
      },

       currentPage: { 
            get(){
                
                return this.notices.current_page
            },
            set(value){
				
                this.SET_CURRENTPAGE(value);
                // this.$store.commit("noticeStore/SET_CURRENTPAGE",value)
            }
        },

        lastPage: {
            get(){
                return this.notices.last_page }
        }
        

  },  

  watch:{

    
        currentPage(newValue, oldValue) {          

          
           try{
             window.topsfunc(); 
            }catch(e){}
            setTimeout(()=>  this.GET_Notices(newValue), 1);
        },
    
  },

	methods: {    

    
        ...mapMutations('noticeStore', ['SET_CURRENTPAGE']), // set data in store

      ...mapActions('noticeStore', ['GET_Notices','PUT_Notice_Name','DELETE_Notice']),
        // paginatePage(pageNum) { this.$store.dispatch("noticeStore/GET_Notices",pageNum); },

      makeEditable: function(index){        

        this.setIndex = index;
        this.editable = !this.editable;        

      },

      saveEditedName(index,id){

        let name = document.getElementById('notice_'+index).value;           
        // this.$store.dispatch("noticeStore/PUT_Notice_Name",{index, name});
        this.PUT_Notice_Name({id,name})
        this.makeEditable(index);

      }, 

      deleteNotice(){
       
        this.DELETE_Notice(this.noticeid);
        this.dialog = false;
        
      },
      noticeID(id){
         this.dialog = true;
        this.noticeid = id;
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