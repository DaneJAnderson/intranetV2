
<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>
        <input type="file" id="files" ref="files" multiple  v-on:change="handleFilesUpload()"/> <!-- multiple  -->
      </label>
    </div>
    <div class="large-12 medium-12 small-12 cell">
      <div v-for="(file, key) in files" :key="key" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>
    </div>
    <br>
    <div class="large-12 medium-12 small-12 cell">
      <v-btn color="info" v-on:click="addFiles()">Add Images</v-btn>
    </div>
    <br><br/>

 <div class="large-12 medium-12 small-12 cell">
      <v-btn  color="light-green white--text float-left" v-on:click.stop="submitFiles(); closeDialog()">Upload</v-btn>
    </div>


    <!-- ----------------------  SnackBar ----------------- -->
     <v-snackbar
    top
      v-model="snackbar"
      :timeout="timeout"
      color="lime--text"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="amber"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
import { mapState,  mapActions, mapGetters} from 'vuex'; 
  export default {
     name: 'uploadGalleryComp',
   
    data(){
      return {
        files: [],
        // name:'',
        image:'',
        // link: '', 
        // type: '',
        snackbar: false,
        text: 'File uploaded successfully !!',
        timeout: 3000,
        Disable : false,
      }
    },
   
   mounted() {

    //    this.$store.dispatch('adminStore/POST_Documents');
    //    this.$store.getters['adminStore/url']
    // this.$store.dispatch("documentStore/GET_DocType");  
    // this.$store.dispatch('adminStore/GET_Subfolder');  
   },
   computed:{

    //  ...mapState('adminStore', ['notices','subfolders']), 
    //   ...mapGetters('documentStore', ['docType','url',]), 
      
   },

    methods: {
     
        // Adds a file     
      addFiles(){
        this.$refs.files.click();        
      },
     
        // Submits files to the server   
      submitFiles(){
  
        let formData = new FormData();
        
        //   formData.append('name',  this.name);
        //   formData.append('image', this.image);
        //   formData.append('link',  this.link);
        //   formData.append('type',  this.type);
          
       
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }

         this.$store.dispatch('galleryStore/POST_GALLERY', formData);

       this.snackbar = true;

       this.files = [];
    //    this.name = '';
    //    this.image = '';
    //    this.link = '';
    //    this.type = '';       
       
      },
     
        // Handles the uploading of files      
      handleFilesUpload(){
        let uploadedFiles = this.$refs.files.files;
        /*
          Adds the uploaded file to the files array
        */
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }

        // this.addName();
      },
      /*
        Removes a select file the user has uploaded
      */
      removeFile( key ){
        this.files.splice( key, 1 );
      },


       // Create Url and File Name from File Object
    /*  addName(){

        var name = this.name;
        var n1 = this.files[0].name.split('.').slice(0, -1).join('.');
        n1 = n1.replace(/_\d*$/g,""); // Remove Numbers at the End of the string   
        this.name = n1.replace(/_/g,' '); // Remove UnderScore
        this.image = 'images/News_Feed/'+this.files[0].name;
    }, */
     closeDialog(){
        
         this.$emit('closeDialog', false); // send to toolsComponent
      },
     /*  setLinkPost(){
        if(this.type == 3){
          this.link = 'images/News_Feed/';
          this.Disable = true;          
        }
        else if(this.type == 1){
          this.link = '';
          this.Disable = true;         
        }
        else{
          this.Disable =false;
        }
      } */


    }
  }
</script>

<style scoped>
  input[type="file"]{
    position: absolute;
    top: -500px;
  }
  div.file-listing{
    width: 80%;
  }
  span.remove-file{
    color: red;
    cursor: pointer;
    float: right;
  }

</style>
