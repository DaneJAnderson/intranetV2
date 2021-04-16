<template>
<div>
     <v-form v-model="valid">
    <!-- <v-container> -->
<!-- --------------------- Personal Information Data Sheet ----------------- -->

<!-- --------------------------- TRN NIS ---------------------------------- -->
<v-row justify="center" class=" mr-3">

  <v-col
  cols="12"
  md="3"
  > 
<employedDate WhichDate="emp_date" Name="Employment Date"></employedDate>
  </v-col>
  
  <v-col cols="12" md="3"> <v-text-field
            v-model="staff.trn"
            :rules="rules.trnRules"            
            label="TRN"
            :counter="9"
            validate-on-blur
            required
          ></v-text-field>

  </v-col>

  <v-col cols="12" md="3"> <v-text-field
            v-model="staff.nis"
            :rules="rules.nisRules"            
            label="NIS"
            :counter="7"
            validate-on-blur
            required
          ></v-text-field>

  </v-col>
  
  <v-col cols="12" md="3"> <v-text-field
            v-model="staff.gov_id"
            :rules="rules.idRules"            
            label="ID#"            
            validate-on-blur
            required 
          ></v-text-field>

  </v-col>
  </v-row>
  
  <div class="HR"><h5 class="pl-5 white--text"> Name Information</h5>
  
   <effectiveDate WhichDate="effective_date_name_info" Name="Effective Date"></effectiveDate>

  </div>
<!-- -----------------------   END TRN NIS -------------------------- -->
<label></label>

<!-- ------------------------- Name Information DOB Title -------------------- -->
  <v-row justify="center">
    <v-col
  cols="12"
  md="3"
  > 
<employedDate WhichDate="dob" Name="Date of birth"></employedDate>
  </v-col>

  <v-col
  cols="12"
  md="5" align-self="center" 
  offset="1"
  >
    <v-radio-group
      v-model="staff.title"
      label="Tilte:"      
      required
      row
    >
      <v-radio
        label="Dr."
        value="Dr."
      ></v-radio>
      <v-radio
        label="Mr."
        value="Mr."
      ></v-radio>
      <v-radio
        label="Mrs."
        value="Mrs."
      ></v-radio>
      <v-radio
        label="Miss"
        value="Miss"
      ></v-radio>
      <v-radio
        label="Ms."
        value="Ms."
      ></v-radio>


    </v-radio-group> 

  </v-col>
  <v-col
  cols="12"
  md="3"
  >
    <v-radio-group
      v-model="staff.gender"
      label="Gender:"
      required
      row
    >
      <v-radio
        label="Male"
        value="Male"
      ></v-radio>
      <v-radio
        label="Female"
        value="Female"
      ></v-radio>



    </v-radio-group> 

  </v-col>
  </v-row>
<hr/>

<!-- ------------------------------ NAMES -------------------------------- -->
      <v-row justify="center" class="ml-3 mr-3">
        <v-col
          cols="12"
          md="4"
        >
        
        <!-- :counter="10" -->
          <v-text-field
            v-model="staff.fname"
            :rules="rules.nameRules"            
            label="First name"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        
        <!-- :counter="10" -->
          <v-text-field
            v-model="staff.middle_name"                       
            label="Middle name"
            validate-on-blur
           
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="staff.lname"
            :rules="rules.nameRules"
           
            label="Last name"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="staff.prev_name"
            
           
            label="Previous Name"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <!-- <v-col
          cols="12"
          md="4"
        >        
          <v-text-field
            v-model="staff.email"
            :rules="rules.emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>  -->

      </v-row>
<div class="HR"><h5 class="pl-5 white--text">Address Information</h5>

<effectiveDate WhichDate="effective_date_address_info" Name="Effective Date"></effectiveDate>
  
</div>
      <!-- ---------------- End NAMES ------------ -->

<label></label>
<!-- ------------------------------ ADDRESSES -------------------------------- -->
      <v-row justify="center" class="ml-3 mr-3">
        <v-col
          cols="12"
          md="4"
        >
        
        <!-- :counter="10" -->
          <v-text-field
            v-model="staff.address1"
            :rules="rules.emptyRules"            
            label="Address 1"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="staff.address2"
            :rules="rules.emptyRules"           
            label="Address 2"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="staff.city"
            :rules="rules.emptyRules"            
            label="Town/City"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>

        

      </v-row>

      <!-- ---------------- End ADDRESSES ------------ -->

      <!-- --------  Contacts Home and Cell Phone Email ---- -->

<v-row justify="start" class="ml-3 mr-3">
      <v-col
          cols="12"
          md="6"
        >
        <v-row dense>
        <v-col cols="6" >
        <label class="mt-5" for="Length of time at this address:">Length of time at this address:</label>
        </v-col>
          <v-col cols="2">
            <v-text-field
            v-model="staff.address_duration_year"
            :rules="rules.isNumRules"
            label="Year(s)"          
            required>
          </v-text-field>
          </v-col>
          <b class="mt-6">/</b>
              <v-col cols="2">
                <v-text-field
            v-model="staff.address_duration_month"
            :rules="rules.isNumRules"
            label="Month(s)"
            required
          ></v-text-field>
        </v-col>

        </v-row>
        </v-col>

   
</v-row>
<!-- ---------------- End Contacts ------------ -->
<div class="HR"><h5 class="pl-5 white--text">Personal Data</h5>

<effectiveDate WhichDate="effective_date_persona_data" Name="Effective Date"></effectiveDate>

</div>

<!-- --- Personl DATA Marital Status Body Mass ---- -->
<label></label>


<v-row justify="center" class="ml-3 mr-3">
<v-col cols="12" md="4"> <v-text-field
            v-model="staff.homephone"                       
            label="Home Phone"
            @keyup="addDashes(staff.homephone,'home')"
            :counter="12"
            hint="876-555-5555"
            validate-on-blur 
            
          ></v-text-field>

  </v-col>
 <!-- autocomplete="off" -->
  <v-col cols="12" md="4"> <v-text-field
            v-model="staff.cellphone"
            :rules="rules.phoneRules"            
            label="Cell Phone: Flow/Digicel:"
            @keyup="addDashes(staff.cellphone,'cell')"
            :counter="12"
            hint="876-555-5555"
            validate-on-blur
            required
          ></v-text-field>

  </v-col>

  <v-col
          cols="12"
          md="4"
        >        
          <v-text-field
            v-model="staff.personal_email"
            :rules="rules.emailRules"
            label="Personal Email"
            validate-on-blur
            required
          ></v-text-field>
        </v-col> 

</v-row>

<v-row justify="center" class="ml-3 mr-3">
   
  <v-col
  cols="12"
  md="6" align-self="center" 
 
  >
    <v-radio-group
      v-model="staff.martial_status"
      label="Marital Status: "
      row
    >
      <v-radio
        label="Single"
        value="Single"
      ></v-radio>
      <v-radio
        label="Married"
        value="Married"
      ></v-radio>
      <v-radio
        label="Divorced"
        value="Divorced"
      ></v-radio>
      <v-radio
        label="Separated"
        value="Separated"
      ></v-radio>
      <v-radio
        label="Widowed"
        value="Widowed"
      ></v-radio>


    </v-radio-group> 

  </v-col>

  <v-col
  cols="12"
  md="3"
  class="mt-5"
  >
   <v-text-field
            v-model="staff.weight"
            :rules="rules.emptyRules"
            label="Weight"
            validate-on-blur
            required
          ></v-text-field>

  </v-col>

  <v-col
  cols="12"
  md="3"
  class="mt-5"
  >
   <v-text-field
            v-model="staff.height"
            :rules="rules.emptyRules"
            label="Height"
            validate-on-blur
            required
          ></v-text-field>

  </v-col>

  </v-row>

  <!-- ---- End Martial Status Body Mass -->
<div class="HR"><h5 class="pl-5 white--text">Emergency Contact</h5>

<effectiveDate WhichDate="effective_date_emergency" Name="Effective Date"></effectiveDate>
 
</div>
<label></label>

  <!-- ------- EMERGENCY cONTACT ------------->
  <v-row justify="center" class="ml-3 mr-3">

  <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.emergency_name"
            :rules="rules.nameRules"           
            label="Name"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>
  <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.emergency_relationship"
            :rules="rules.emptyRules"           
            label="Relationship"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>
  <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.emergency_homephone"
            label="Home Phone"          
            @keyup="addDashes(staff.emergency_homephone,'Ephone')"
            :counter="12"
            hint="876-555-5555"           
            validate-on-blur
          ></v-text-field>
        </v-col>
  <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.emergency_cellphone"                     
            label="Cell Phone"
            :rules="rules.phoneRules" 
            @keyup="addDashes(staff.emergency_cellphone,'Ecell')"
            :counter="12"
            hint="876-555-5555"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>



  </v-row>
<hr/>
 <v-row justify="center" class="ml-3 mr-3">
        <v-col
          cols="12"
          md="4"
        >
        
        <!-- :counter="10" -->
          <v-text-field
            v-model="staff.emergency_address1"
            :rules="rules.emptyRules"            
            label="Address 1"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="staff.emergency_address2"
            :rules="rules.emptyRules"           
            label="Address 2"
            validate-on-blur
            required
          ></v-text-field>
        </v-col>

   
  <v-col
          cols="12"
          md="4"
        >        
          <v-text-field
            v-model="staff.emergency_email"
            :rules="rules.emailRules"
            label="Personal Email"
            validate-on-blur
            required
          ></v-text-field>
        </v-col> 

        

      </v-row>
      
<!-- --------------- End  EMERGENCY cONTACT ---------->

<div class="HR"><h5 class="pl-5 white--text">Family Information</h5>

<effectiveDate WhichDate="effective_date_family_info" Name="Effective Date"></effectiveDate>

</div>

<familyInfo></familyInfo>

<div class="HR"><h5 class="pl-5 white--text">Education History</h5>

<effectiveDate WhichDate="effective_date_edu_history" Name="Effective Date"></effectiveDate>


</div>

<educationHistory></educationHistory>

<div class="HR"><h5 class="pl-5 white--text">Credit Union History</h5>

<effectiveDate WhichDate="effective_date_credit_history" Name="Effective Date"></effectiveDate>

</div>

<creditUnionHistory></creditUnionHistory>

<div class="HR"><h5 class="pl-5 white--text">Non–Profit or Charity Group</h5>

<effectiveDate WhichDate="effective_date_charity" Name="Effective Date"></effectiveDate>

</div>

<label class="mt-7 pl-10 pr-10">Are you or any of your immediate relatives associated with any non-profitable organization or
charity group?
 </label>
 <v-row  justify="center" class="ml-3 mr-3">
             <v-col
  cols="12"
  md="3"
  
  >
    <v-radio-group
      v-model="staff.charity_check"  
      row
    >
      <v-radio
        label="YES"
        value="Yes"
      ></v-radio>
      <v-radio
        label="NO"
        value="No"
      ></v-radio>
    </v-radio-group> 
  </v-col>

   <v-col cols="12" md="8"  >
          <v-text-field
            v-model="staff.charity_persons"
                     
            label="If yes, state position(s) held: "
            validate-on-blur
            
          ></v-text-field>
        </v-col>  

 </v-row>

 <div class="HR"><h5 class="pl-5 white--text">Staff Account Information Sheet</h5>

 <effectiveDate WhichDate="effective_date_staff_acc" Name="Effective Date"></effectiveDate>


 </div>
 <staffAccountInfo></staffAccountInfo>

<v-row justify="start" class="ml-10 mr-3 mt-15 pb-5" >
       <v-btn
      class="mr-5 position-relative"
      @click="submit"
      :disabled="!valid"
      small
    >
      Save
    </v-btn>


<v-btn class=" position-relative" @click="callForms(1)"
 absolute color="info lighten-1" :disabled='!valid'
 small
>Save & Continue </v-btn>
<!-- </v-container> -->

</v-row>



  </v-form>
</div>
  
</template>

<script>
import { mapActions, mapGetters} from 'vuex';  
import { Staff } from './includes/Staff';
import employedDate from './includes/Date';
import {Rules} from './includes/Rules';
import {mdiPlusCircleOutline} from '@mdi/js';
import familyInfo from './PersonalData/familyInfo';
import educationHistory from './PersonalData/educationHistory';
import creditUnionHistory from './PersonalData/creditUnionHistory';
import staffAccountInfo from './PersonalData/staffAccountInfo';
import effectiveDate from './includes/EffectiveDates';

export default {

    name: 'personlinfoForm',
    components: {employedDate, familyInfo, educationHistory, 
    creditUnionHistory, staffAccountInfo, effectiveDate},
    props:['cok_email'],
        data: () => ({
      valid: false,
      staff: Staff,
      rules: Rules,
      title: null,
      icons:{mdiPlusCircleOutline},
    }),

    mounted(){

      // this.$store.dispatch("adminStore/PUT_Notice_Name");
      this.GET_Forms();     

      const email = sessionStorage.getItem('email');
      this.staff.cok_email= this.cok_email?this.cok_email:email;
      // console.log( this.staff.cok_email);
    },

        methods: {

          ...mapActions('formsStore', ['GET_Forms','UPDATE_Forms', 'POST_Forms']),
      submit () {
        
        if(this.valid){
            let data = this.staff;
            this.POST_Forms(data);           
        }
      },
      clear () {
        this.$v.$reset();
        // this.$refs.form.reset();
        // this.$refs.form.resetValidation();
   
      },
      callForms(nextTab){
        
         this.$emit('nextTab', { 'tabnum': 1}); // send to toolsComponent
      },

      addDashes(f,p) {
    var r = /(\D+)/g,
        npa = '',
        nxx = '',
        last4 = '';
    f = f.replace(r, '');
    npa = f.substr(0, 3);
    nxx = f.substr(3, 3);
    last4 = f.substr(6, 4);
    // f.value = npa + '-' + nxx + '-' + last4;
    if(p=='home'){

      this.staff.homephone = npa + '-' + nxx + '-' + last4;
    }else if(p=='cell'){
       this.staff.cellphone = npa + '-' + nxx + '-' + last4;
    }
    else if(p=='Ephone'){
       this.staff.emergency_homephone= npa + '-' + nxx + '-' + last4;
    }
    else if(p=='Ecell'){
       this.staff.emergency_cellphone = npa + '-' + nxx + '-' + last4;
    }
      },

      newRow(){
        alert('New Row  !!');
      }

    },

}
</script>

<style scoped>

.HR {
      height:30px; border:2px solid rgb(127, 155, 173); background:rgb(145, 160, 167);
      color:white;
}

</style>