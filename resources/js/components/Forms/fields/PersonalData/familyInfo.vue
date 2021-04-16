<template>
  <div>
      <!---------------------- Family Information ------------------------>
<label></label>
   <v-row justify="center" class="ml-3 mr-3">

     <v-col cols="12" md="4" align-self="start" >
    <v-radio-group
      v-model="staff.family_spouse_type"
      label="Relationship Status: "
      row
    >
      <v-radio
        label="Husband"
        value="Husband"
      ></v-radio>
      <v-radio
        label="Signification Other"
        value="Signification Other"
      ></v-radio>
      <v-radio
        label="Partner"
        value="Partner"
      ></v-radio>
      <v-radio
        label="Common Law"
        value="Common Law"
      ></v-radio> 
    </v-radio-group> 

  </v-col>

         <v-col cols="12" md="2">
 <v-checkbox
      v-model="staff.family_spouse_change"
      label="Check if this is a change"
      value="Yes"
    ></v-checkbox>
        </v-col>

            <!-- :rules="rules.nameRules"            -->
         <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.family_spouse_name"
            label="Name"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

          <v-col cols="12" md="3"> <v-text-field
            v-model="staff.family_spouse_cellphone"
                    
            label="Cell Phone: Flow/Digicel:"
            @keyup="addDashes(staff.family_spouse_cellphone,'cell')"
            :counter="12"
            hint="876-555-5555"
            validate-on-blur
            
          ></v-text-field>

  </v-col>
  

 
 </v-row>
<v-row  justify="center" class="ml-3 mr-3">

            <!-- :rules="rules.emptyRules"             -->
      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.family_spouse_address1"
            label="Address 1"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.family_spouse_address2"
            label="Address 2"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emailRules" -->
          <v-col cols="12" md="3">        
          <v-text-field
            v-model="staff.family_spouse_email"
            label="E-mail"
            validate-on-blur
            
          ></v-text-field>
        </v-col> 

            <!-- :rules="rules.isNumRules" -->
        <v-col cols="3">
            <v-text-field
            v-model="staff.family_childnum"
            label="Number of Chrildren (Adult or Minor)"          
            >
          </v-text-field>
          </v-col>

</v-row>

<!-- ------------ Family Child Count -------------- -->
<v-row  justify="center" class="ml-3 mr-3">

   <v-col
  cols="12"
  md="1"><label class="mt-5" for=""><h5>{{1}}.</h5></label></v-col>
 
            <!-- :rules="rules.nameRules"            -->
   <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.family_child_name1"
            label="Name of Child"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

    <v-col
  cols="12"
  md="3"
  > 
<dob WhichDate="child-dob1" Name="Date of birth"></dob>
  </v-col>
  
  <v-col
  cols="12"
  md="3"
  offset="1"
  >
    <v-radio-group
      v-model="staff.family_child_gender1"
      label="Gender:"
      
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

  <!-- <v-col
  cols="12"
  md="1" 
  >
  <v-btn @click="newRow" icon class="mt-9 ml-n16">   
        <v-icon large>{{icons.mdiPlusCircleOutline}}</v-icon>
      </v-btn>
  </v-col> -->

  </v-row>
  <!-- ---------------End  Family Child 1 --------- -->

<!-- ------------ Family Child 2 -------------- -->
<v-row  justify="center" class="ml-3 mr-3">

   <v-col
  cols="12"
  md="1"><label class="mt-5" for=""><h5>{{2}}.</h5></label></v-col>
 
            <!-- :rules="rules.nameRules"            -->
   <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.family_child_name2"
            label="Name of Child"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

    <v-col
  cols="12"
  md="3"
  > 
<dob WhichDate="child-dob2" Name="Date of birth"></dob>
  </v-col>
  
  <v-col
  cols="12"
  md="3"
  offset="1"
  >
    <v-radio-group
      v-model="staff.family_child_gender2"
      label="Gender:"
      
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

  <!-- <v-col
  cols="12"
  md="1" 
  >
  <v-btn @click="newRow" icon class="mt-9 ml-n16">   
        <v-icon large>{{icons.mdiPlusCircleOutline}}</v-icon>
      </v-btn>
  </v-col> -->

  </v-row>
  <!-- ---------------End  Family Child 2 --------- -->

<!-- ------------ Family Child 3 -------------- -->
<v-row  justify="center" class="ml-3 mr-3">

   <v-col
  cols="12"
  md="1"><label class="mt-5" for=""><h5>{{3}}.</h5></label></v-col>
 
            <!-- :rules="rules.nameRules"            -->
   <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.family_child_name3"
            label="Name of Child"
            validate-on-blur
           
          ></v-text-field>
        </v-col>

    <v-col
  cols="12"
  md="3"
  > 
<dob WhichDate="child-dob3" Name="Date of birth"></dob>
  </v-col>
  
  <v-col
  cols="12"
  md="3"
  offset="1"
  >
    <v-radio-group
      v-model="staff.family_child_gender3"
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

  <!-- <v-col
  cols="12"
  md="1" 
  >
  <v-btn @click="newRow" icon class="mt-9 ml-n16">   
        <v-icon large>{{icons.mdiPlusCircleOutline}}</v-icon>
      </v-btn>
  </v-col> -->

  </v-row>
  <!-- ---------------End  Family Child 3 --------- -->

<!-- ------------ Family Child 4 -------------- -->
<v-row  justify="center" class="ml-3 mr-3">

   <v-col
  cols="12"
  md="1"><label class="mt-5" for=""><h5>{{4}}.</h5></label></v-col>
 
            <!-- :rules="rules.nameRules"            -->
   <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.family_child_name4"
            label="Name of Child"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

    <v-col
  cols="12"
  md="3"
  > 
<dob WhichDate="child-dob4" Name="Date of birth"></dob>
  </v-col>
  
  <v-col
  cols="12"
  md="3"
  offset="1"
  >
    <v-radio-group
      v-model="staff.family_child_gender4"
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

  <!-- <v-col
  cols="12"
  md="1" 
  >
  <v-btn @click="newRow" icon class="mt-9 ml-n16">   
        <v-icon large>{{icons.mdiPlusCircleOutline}}</v-icon>
      </v-btn>
  </v-col> -->

  </v-row>
  <!-- ---------------End  Family Child 4 --------- -->

<!-- ------------ Family Child 5 -------------- -->
<v-row  justify="center" class="ml-3 mr-3">

   <v-col
  cols="12"
  md="1"><label class="mt-5" for=""><h5>{{5}}.</h5></label></v-col>
 
            <!-- :rules="rules.nameRules"            -->
   <v-col
  cols="12"
  md="3">
  <v-text-field
            v-model="staff.family_child_name5"
            label="Name of Child"
            validate-on-blur
           
          ></v-text-field>
        </v-col>

    <v-col
  cols="12"
  md="3"
  > 
<dob WhichDate="child-dob5" Name="Date of birth"></dob>
  </v-col>
  
  <v-col
  cols="12"
  md="3"
  offset="1"
  >
    <v-radio-group
      v-model="staff.family_child_gender5"
      label="Gender:"
      
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

  <!-- <v-col
  cols="12"
  md="1" 
  >
  <v-btn @click="newRow" icon class="mt-9 ml-n16">   
        <v-icon large>{{icons.mdiPlusCircleOutline}}</v-icon>
      </v-btn>
  </v-col> -->

  </v-row>
  <!-- ---------------End  Family Child 5 --------- -->

<!-- ---------- End Family Information ------------ -->
  </div>
</template>

<script>
import { Staff } from '../includes/Staff';
import dob from '../includes/Date';
import {Rules} from '../includes/Rules';
import {mdiPlusCircleOutline} from '@mdi/js';
export default {
    name:'familyInfo',
        data: () => ({
      valid: false,
      staff: Staff,
      rules: Rules,
      title: null,
      icons:{mdiPlusCircleOutline},
    }),
    components:{dob},
    methods:{
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

      this.staff.family_spouse_cellphone  = npa + '-' + nxx + '-' + last4;
    }else if(p=='cell'){
       this.staff.family_spouse_cellphone = npa + '-' + nxx + '-' + last4;
    }
      },
    }

}
</script>

<style>

</style>