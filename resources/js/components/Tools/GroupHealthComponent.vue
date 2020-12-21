<template>
  <div class="green lighten-4 pt-10 pr-5 mt-n5 rounded">
      <center>
<h1 class="primary--text"><u> Group Health Insurance</u></h1><br/><br/>
</center>

<v-row justify="center" v-if="!url.StorageURL">
      <v-progress-circular 
      :size="250"
      :width="7"
      color="amber"
      indeterminate
    ></v-progress-circular>
        
</v-row>

<v-row class="">
    
    
    <v-col sm="4" class=" ">
        <a  :href="url.StorageURL+'HR_Group_Health/ACTIVE PROVIDER LISTING- CANOPY.pdf'"><img class="img-thumbnail img-rounded img-responsive image"   :src="url.StorageURL+'HR_Group_Health/ACTIVE PROVIDER LISTING-CANOPY_Page_001.jpg'"></a>
        <p>ACTIVE PROVIDER LISTING-CANOPY</p>
    </v-col>

    <v-col sm="4" class=" ">
       
        <a  :href="url.StorageURL+'HR_Group_Health/Canopy - Banking Information Request Form (Individual)-FILLABLE.pdf'"><img class="img-thumbnail img-rounded img-responsive image"   :src="url.StorageURL+'HR_Group_Health/Canopy - Banking Information Request Form (Individual)-FILLABLE.jpg'"></a>
        <p>Canopy - Banking Information Request Form (Individual)</p>
    </v-col>

    <v-col sm="4" class=" ">
        
        <a  :href="url.StorageURL+'HR_Group_Health/Canopy - Change Request Form FINAL-FILLABLE.pdf'"><img class="img-thumbnail img-rounded img-responsive image"    :src="url.StorageURL+'HR_Group_Health/Canopy - Change Request Form FINAL-FILLABLE_Page_1.jpg'"></a>
        <p>Canopy - Change Request Form FINAL</p>
    </v-col>

</v-row>

    <v-row class="">

    <div class="col-sm-4 ">
        
        <a  :href="url.StorageURL+'HR_Group_Health/Canopy - Group Health Member Enrolment Form & HealthQuestionnaire FINAL-FILLABLE.pdf'"><img class="img-thumbnail img-rounded img-responsive image"   :src="url.StorageURL+'HR_Group_Health/Canopy - Group Health Member Enrolment Form & HealthQuestionnaire FINAL-FILLABLE_Page_1.jpg'"></a>
        <p>Canopy - Group Health Member Enrolment Form & Health Questionnaire FINAL</p>
    </div>

    <div class="col-sm-4 ">
        
        <a  :href="url.StorageURL+'HR_Group_Health/Member-Health-Claim-Form-FILLABLE.pdf'"><img class="img-thumbnail img-rounded img-responsive image"   :src="url.StorageURL+'HR_Group_Health/Member-Health-Claim-Form-FILLABLE_Page_1.jpg'"></a>
        <p>Member Health Claim Form</p>
        
    </div>

    <div class="col-sm-4 ">
        
        <a  :href="url.StorageURL+'HR_Group_Health/Service Providers List -FFK Discount Cards.pdf'"><img class="img-thumbnail img-rounded img-responsive image"   :src="url.StorageURL+'HR_Group_Health/Service Providers List -FFK Discount Cards_Page_1.jpg'"></a>
        <p>Service Providers List -FFK Discount Cards</p>
        
    </div>


</v-row>

<!-- {{-- ------------ Third Row ------------- --}} -->
    <div class="row ">

    <div class="col-sm-4 ">
        
        <a :href="url.StorageURL+'HR_Group_Health/JADEP_DRUG_LISTING.pdf'">
        <img class="img-thumbnail img-rounded img-responsive image" :src="url.StorageURL+'HR_Group_Health/JADEP_DRUG_LISTING.png'"></a>
        <p>NATIONAL HEALTH FUND - JADEP DRUG LIST</p>
    </div>

    <div class="col-sm-4 ">
        
        <a :href="url.StorageURL+'HR_Group_Health/NHF_and_Jadep.pdf'">
        <img class="img-thumbnail img-rounded img-responsive image" :src="url.StorageURL+'HR_Group_Health/NHF_and_Jadep.png'"></a>
        <p>NHF and Jadep</p>
        
    </div>

    <div class="col-sm-4 ">
        
        <a :href="url.StorageURL+'HR_Group_Health/NHF_Drug_Subsidy_List.pdf'">
        <img class="img-thumbnail img-rounded img-responsive image" :src="url.StorageURL+'HR_Group_Health/NHF_Drug_Subsidy_List.png'"></a>
        <p>NHF Drug Subsidy List</p>
        
    </div>


</div>

  </div>
</template>

<script>
export default {
  name: 'GrouphealthComponent',
   computed:{
        url(){
            return this.$store.getters['documentStore/url'];
        }
    },
    
beforeDestroy() {
                      
    window.topsfunc();                
},

}
</script>

<style scoped>

.image {
 height:500px;
  width: 400px;
  cursor: pointer;
  clear: both;
}

.card, p {
padding: 20px 10px 40px 0px;
font-size: 110%;
 word-wrap: break-word;
 color: rgb(100, 66, 66);
 

}

 .image:hover {border: 2px solid rgb(0, 172, 134);}

.row {padding-left: 40px; }

</style>