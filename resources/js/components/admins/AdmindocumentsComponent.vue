
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
          <input v-model="name" type="text" class="form-control" id="docUpName" name="name" 
          placeholder="Document Name" minlength="3" required>        
        </div><br/>

    <!-- {{-- Document (file) Uri  file uri and extention --}} -->
    <div class="form-group">
            <label for="Documents Url"> Documents Url </label>
            <input v-model="url" type="text" class="form-control" id="docUpUrl" name="url" 
            placeholder="Documents Url" minlength="3" required>        
        </div><br/>

        <!-- {{-- Documents Format word|pdf|png --}} -->
        <div class="form-group">
                <label for="Document Format">Document Format</label>
                <select v-model="format" class="form-control" id="selectFormat" minlength=1 @change="addUrLPrefix()" name="format"  required>
                    <option value="">Select Format</option>
                    <option value="1" >PDF</option>
                    <option value="2">Word</option>
                    <option value="3">Excel</option>
                    <option value="4">Link</option>
                    <option value="5">Folder</option>
                </select>
                </div><br/>
              

        <!-- {{-- Document Type Member|Credit|MIS|HR|Policy --}} -->
        <div class="form-group">
                <label for="Documents Type">Documents Type</label>
                <select v-model="type" class="form-control" id="" name="type" minlength="1" required>
                  <option value="">Select Document Type</option>
                  <option value="1" >Member</option>
                  <option value="2">Credit</option>
                  <option value="3">Operation Procedures</option>
                  <option value="4">MIS</option>
                  <option value="5">DMU</option>
                  <option value="6">HR & Learning</option>
                  <option value="7">Other</option>
                  <option value="8">Policy</option>
                  <option value="9">Risk & Compliance</option>
                  <option value="10">Universa Training Manuals</option>
                  <option value="11">Letters to Network</option>
                </select>
              </div><br/>
  </v-col>
     </v-row> 

<!-- ------------------------------------------------------------------------------------------------------ -->



    <div class="large-12 medium-12 small-12 cell">
      <v-btn  color="light-green white--text float-right" v-on:click="submitFiles()">Submit</v-btn>
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
  export default {
     name: 'admindocumentComponent',
    /*
      Defines the data used by the component
    */
    data(){
      return {
        files: [],
        name:'',
        url: '',
        format: '',
        type: '',
        snackbar: false,
        text: 'File uploaded successfully !!',
        timeout: 3000,
      }
    },
    /*
      Defines the method used by the component
    */
   mounted() {

    //    this.$store.dispatch('adminStore/POST_Documents');
    //    this.$store.getters['adminStore/url']
   },
   computed:{

   },

    methods: {
      /*
        Adds a file
      */
      addFiles(){
        this.$refs.files.click();
      },
      /*
        Submits files to the server
      */
      submitFiles(){
        /*
          Initialize the form data
        */
        let formData = new FormData();
        
          formData.append('name', this.name);
          formData.append('url', this.url);
          formData.append('format', this.format);
          formData.append('type', this.type);
          /*
          Iteate over any file sent over appending the files
          to the form data.
        */
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }
        /*
          Make the request to the POST /select-files URL
        */
       this.$store.dispatch('adminStore/POST_Documents', formData);
       this.snackbar = true;

       this.files = [];
       this.name = '';
       this.url = '';
       this.format = '';
       this.type = '';
       
      },
      /*
        Handles the uploading of files
      */
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
        var url = this.url;
        // var n1 = val[0].name.split('.').slice(0, -1).join('.');
        var n1 = this.files[0].name.split('.').slice(0, -1).join('.');
        n1 = n1.replace(/_\d*$/g,""); // Remove Numbers at the End of the string
   
        this.name = n1.replace(/_/g,' '); // Remove UnderScore
        this.url = this.files[0].name;
    },

        // Add File format to beginning of file URL
     addUrLPrefix(){
        var selectFormat = document.getElementById("selectFormat");
        var selectedValue = selectFormat.options[selectFormat.selectedIndex].value;
        if(selectedValue == 1){
        var uri = document.getElementById("docUpUrl");
        // uri.value = "PDF/"+uri.value ;
        this.url = "PDF/"+uri.value ;
        }
    }
    }
  }
</script>

<style>
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
