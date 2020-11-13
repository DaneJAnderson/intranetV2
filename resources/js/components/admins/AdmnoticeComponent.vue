<template>
  <div>
      <h1>Admin Notice </h1>

        

      <v-row v-if="this.notices[0]"  class="">

		  <v-col v-for="(notice, index) in this.notices" :key="index" cols="4" lg="3" md="4" class="">
      <v-card>
			<img class="noticeImg" width="100%" height="280px" :src="url.StorageURL+notice.image" />
      <v-text-field :id="'notice_'+index"
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
      max-width="290"
      :retain-focus="false"
    >
      <v-card>
        <v-card-title class="headline">
          
        </v-card-title>

        <v-card-text>
          Are You Sure You Want to Delete this Notice?
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
  
  </div>
</template>

<script>

import { mapState,  mapActions, mapGetters} from 'vuex';  
import { mdiClipboardEdit, mdiDelete, mdiContentSaveEdit } from '@mdi/js'

export default {
    name: 'AdmnoticeComponent',
    data () {
      return{
        editable: false,
        setIndex:-1, 
        dialog: false,
        noticeid: -1,

/*      

      allowSpaces: false,
      match: 'Foobar',
      max: 0,
      model: '', */
      
      icons: {mdiClipboardEdit,mdiDelete,mdiContentSaveEdit}
    }
    },

    computed: {     
      ...mapGetters('adminStore', ['notices','url']),

      setEdit(){
        return this.setIndex;
      }
  },

  	mounted(){    
      this.GET_Notices();
      // this.$store.dispatch("adminStore/PUT_Notice_Name");
    // console.dir(this.url);
  },

  watch:{
    
  },

	methods: {    
      ...mapActions('adminStore', ['GET_Notices','PUT_Notice_Name','DELETE_Notice']),

      makeEditable: function(index){        

        this.setIndex = index;
        this.editable = !this.editable;        

      },

      saveEditedName(index,id){

        let name = document.getElementById('notice_'+index).value;
        console.log(name);      
        // this.$store.dispatch("adminStore/PUT_Notice_Name",{index, name});
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
   
  }

}
</script>

<style>

.noticeImg {
  max-height: 280px !important;
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