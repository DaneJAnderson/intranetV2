
<template>
  <div class="container">
    <h2 class="pb-5 text-center grey--text">Upload Documents</h2>
    <div class="large-12 medium-12 small-12 cell">
      <label>
        <input type="file" id="files" ref="files"  v-on:change="handleFilesUpload()"/> <!-- multiple  -->
      </label>
    </div>
    <div class="large-12 medium-12 small-12 cell">
      <div v-for="(file, key) in files" :key="key" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>
    </div>
    <br>
    <div class="large-12 medium-12 small-12 cell">
      <v-btn color="info" v-on:click="addFiles()">Add File</v-btn>
    </div>
    <br>

    <!-- ----------------------------------------------------------- -->
<v-row justify="center">
  <v-col cols="6">
 <!-- {{-- Document Name --}} -->
        <div class="form-group">
          <label for="Document Name"> Document Name </label>
          <input v-model="name" type="text" class="form-control shadow-none" id="docUpName" name="name" 
          placeholder="Document Name" minlength="3" autocomplete="off" required>        
        </div><br/>

    <!-- {{-- Document (file) Uri  file uri and extention --}} -->
    <div class="form-group">
            <label for="Documents Url"> Documents Url </label>
            <input v-model="urls" type="text" class="form-control shadow-none" id="docUpUrl" name="url" 
            placeholder="Documents Url" minlength="3" autocomplete="off" >        
        </div><br/>

        <!-- {{-- Documents Format word|pdf|png --}} -->
        <div class="form-group">
                <label for="Document Format">Document Format</label>
                <select v-model="format" class="form-control shadow-none" id="selectFormat" minlength=1 @change="addUrLPrefix()" name="format"  required>
                    <option value="">Select Format</option>
                    <option value="1" >PDF</option>
                    <option value="2">Word</option>
                    <option value="3">Excel</option>
                    <option value="4">Link</option>
                    <option value="5">Folder</option>
                </select>
                </div><br/>

        <div class="form-group" id="selectsubfolder">
                <label for="Subfolder">Subfolder</label>
                <select v-model="subfolder" class="form-control shadow-none"  name="subfolder" minlength="1" @change="addSubfolder(subfolder)"  required>
                    <option value="">Select Subfolder</option>  
                    <option value="doctype">Document Type</option>
                    <option v-for="(sub,i) in this.subfolders" :key="i" :value="sub.id">{{sub.name}}</option>                 
                </select>
                </div><br/>
              

        <!-- {{-- Document Type Member|Credit|MIS|HR|Policy --}} -->
        <div class="form-group">
                <label for="Documents Type">Documents Type</label>
                <select v-model="type" class="form-control shadow-none " id="" name="type" minlength="1" required>
                  <option value="">Select Document Type</option>
                  <option v-for="(type,i) in this.docType" :key="i" :value="type.id">{{type.name}}</option>
                  <!-- <option value="1" >Member</option>
                  <option value="2">Credit</option>
                  <option value="3">Operation Procedures</option>
                  <option value="4">MIS</option>
                  <option value="5">DMU</option>
                  <option value="6">HR & Learning</option>
                  <option value="7">Other</option>
                  <option value="8">Policy</option>
                  <option value="9">Risk & Compliance</option>
                  <option value="10">Universa Training Manuals</option>
                  <option value="11">Letters to Network</option> -->
                </select>
              </div><br/>
  </v-col>
     </v-row> 

<!-- ------------------------------------------------------------------------------------------------------ -->



    <div class="large-12 medium-12 small-12 cell">
      <v-btn  color="light-green white--text float-left" v-on:click.stop="submitFiles()">Submit</v-btn>
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
     name: 'admindocumentComponent',
   
    data(){
      return {
        files: [],
        name:'',
        urls: '',
        format: '',
        subfolder: '',
        type: '',
        snackbar: false,
        text: 'File uploaded successfully !!',
        timeout: 3000,
      }
    },
   
   mounted() {
     
       const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');
    const username = sessionStorage.getItem('username');
    // const token = localStorage.getItem('token');
    // const username = localStorage.getItem('username');
    const auth = this.$store.getters['adminStore/auth'];

    if((!token&&!auth.token) || (!username&&!auth.username)){
      this.$router.replace('/');
    }
    
    //    this.$store.dispatch('adminStore/POST_Documents');
    //    this.$store.getters['adminStore/url']
    this.$store.dispatch("documentStore/GET_DocType");  
    this.$store.dispatch('adminStore/GET_Subfolder');  
   },
   computed:{

     ...mapState('adminStore', ['notices','subfolders']), 
      ...mapGetters('documentStore', ['docType','url',]), 
      
   },

    methods: {
     
        // Adds a file     
      addFiles(){
        this.$refs.files.click();        
      },
     
        // Submits files to the server   
      submitFiles(){
  
        let formData = new FormData();
        
          formData.append('name', this.name);
          formData.append('url', this.urls);
          formData.append('format', this.format);
          formData.append('type', this.type);
          formData.append('parent_category', this.subfolder);
       
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }

       if(this.subfolder == 'doctype'){

         this.$store.dispatch('adminStore/POST_DocType', this.name);

       }else{

                 
         this.$store.dispatch('adminStore/POST_Documents', formData);
       }

       this.snackbar = true;

       this.files = [];
       this.name = '';
       this.urls = '';
       this.format = '';
       this.type = '';
       this.subfolder = '';
       
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

        this.addName();
      },
      /*
        Removes a select file the user has uploaded
      */
      removeFile( key ){
        this.files.splice( key, 1 );
      },


       // Create Url and File Name from File Object
     addName(){

        var name = this.name;
        var n1 = this.files[0].name.split('.').slice(0, -1).join('.');
        n1 = n1.replace(/_\d*$/g,""); // Remove Numbers at the End of the string   
        this.name = n1.replace(/_/g,' '); // Remove UnderScore
        this.urls = this.files[0].name;
    },

        // Add File format to beginning of file URL
     addUrLPrefix(){

      /*  if(this.format == 5){
          let sub = document.getElementById('selectsubfolder');
          sub.style.display = "block"
       } */

        var selectFormat = document.getElementById("selectFormat");
        var selectedValue = selectFormat.options[selectFormat.selectedIndex].value;
        if(selectedValue == 1){
        var uri = document.getElementById("docUpUrl");       
        this.urls = "PDF/"+uri.value ;
        }
        if(selectedValue == 2){
        var uri = document.getElementById("docUpUrl");       
        this.urls = "WORD/"+uri.value ;
        }
        if(selectedValue == 3){
        var uri = document.getElementById("docUpUrl");       
        this.urls = "EXCEL/"+uri.value ;
        }
    },
    
    addSubfolder(subId){

      if(subId && subId!='doctype'){
      let sub = this.subfolders.filter(subs => subs.id == subId)
      this.type = sub[0].type;
      }
    }
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

 /*  #selectsubfolder {
    display: none;
  } */
  
</style>
