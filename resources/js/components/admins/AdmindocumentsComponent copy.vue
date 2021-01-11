<template>

<div >
        
        
<div class="container">


   <h1 class="text-center"> Uploads Documents</h1> <br/> <br/>

     <!-- action="http://<?php echo Config::get('constants.BASE_URL'); ?>/uploads/post" method="POST" -->
<div class="container " style="width:80%">
   <form enctype="multipart/form-data">
    <!-- {{ csrf_field() }} -->

    <!-- {{-- Select File to upload --}} -->
<input type="file" m @change="handleFilesUpload();addName(this.files);" ref="files" id="fileToUpload" required><br/><br/>

    <!-- {{-- Document Name --}} -->
        <div class="form-group">
          <label for="Document Name"> Document Name </label>
          <input type="text" class="form-control" id="docUpName" name="name" 
          placeholder="Document Name" minlength="3" required>        
        </div><br/>

    <!-- {{-- Document (file) Uri  file uri and extention --}} -->
    <div class="form-group">
            <label for="Documents Url"> Documents Url </label>
            <input type="text" class="form-control" id="docUpUrl" name="url" 
            placeholder="Documents Url" minlength="3" required>        
        </div><br/>

        <!-- {{-- Documents Format word|pdf|png --}} -->
        <div class="form-group">
                <label for="Document Format">Document Format</label>
                <select class="form-control" id="selectFormat" minlength=1 onchange="addUrLPrefix()" name="format"  required>
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
                <select class="form-control" id="" name="type" minlength="1" required>
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

        <!-- {{-- Document Status active|inactive --}} -->
        <div class="form-group">
          <label for="Document Status "> Document Status </label>
          <input type="text" class="form-control" id="" value="1" name="status" 
          placeholder="Document Status" required>        
        </div><br/>

        <!-- {{-- Document Main_category --}} -->
        <div class="form-group">
          <label for="Document Main Category "> Document Main Category  </label>
          <input type="text" class="form-control" value="1" name="main_cat" id="" 
          placeholder="Document Main Category " required>
        </div>

        <!-- {{-- Document CreatedBy  --}} -->
        <div class="form-group">
          <label for=" Document Created_by "> Document Created_by  </label>
          <input type="text" class="form-control" id="" value="1" name="createdby" placeholder="CreatedBy" required>        
        </div><br/>

        <!-- {{-- Document UpdatedBy --}} -->
        <div class="form-group">
          <label for="Document UpdatedBy">Document UpdatedBy   </label>
          <input type="text" class="form-control" id="" value="1" name="updatedby" placeholder="Document UpdatedBy" required>
        </div><br/>      


        <button type="submit" @click.prevent="submitFile()" class="btn btn-primary">Submit</button>
    </form>

</div>

      

</div>

      
</div>
    
</template>
<script>
export default {
    // name: 'admindocumentComponent',

    
}
</script>
<style scoped>

</style>