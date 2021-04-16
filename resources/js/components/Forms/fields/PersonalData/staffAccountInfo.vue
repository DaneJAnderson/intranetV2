<template>
  <div>
<label class="mt-7 pl-8 pr-5"><b>Accounts and Investments held with Banks, Financial Institutions, Credit Unions,
     Money Market Brokers, etc.</b> (Please include investments in Alternative Investments Schemes):
 </label>
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.banking_institution1"                       
            label="Name of Institution/Branch"
            validate-on-blur            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.banking_account_type1"
                       
            label="Type of Account (savings, loan, etc)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.banking_joint_holder1"
                     
            label="Name of Joint Account Holder (if applicable)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.banking_account_balance1"
            label="Balance (approximately)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.banking_institution2"
                       
            label="Name of Institution/Branch"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.banking_account_type2"
                       
            label="Type of Account (savings, loan, etc)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.banking_joint_holder2"
                     
            label="Name of Joint Account Holder (if applicable)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.banking_account_balance2"
            label="Balance (approximately)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>
      
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.banking_institution3"
                       
            label="Name of Institution/Branch"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.banking_account_type3"
                       
            label="Type of Account (savings, loan, etc)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.banking_joint_holder3"
                     
            label="Name of Joint Account Holder (if applicable)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.banking_account_balance3"
            label="Balance (approximately)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.banking_institution4"
                       
            label="Name of Institution/Branch"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.banking_account_type4"
                       
            label="Type of Account (savings, loan, etc)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.banking_joint_holder4"
                     
            label="Name of Joint Account Holder (if applicable)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.banking_account_balance4"
            label="Balance (approximately)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

<hr/>
      <label class="mt-7 pl-8 pr-5"><b>Other Accounts controlled by the employee
           (e.g. by way of Power of Attorney/or as Guarantor)</b>       
 </label>
  <v-row  justify="center" class="ml-3 mr-3">
             <v-col
  cols="12"
  md="3"
  
  >
    <v-radio-group
      v-model="staff.guarantor_check"  
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
            v-model="staff.guarantor_details"
                     
            label="If yes, state position(s) held: "
            validate-on-blur
            
          ></v-text-field>
        </v-col>  

 </v-row>

<hr/>
<!-- ----------------------------------------------------- -->
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.guarantor_poa_institution1"
                       
            label="Name of Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.guarantor_poa_branch1"
                       
            label="Branch"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.guarantor_poa_account_type1"
                     
            label="Type of Account (savings, loan, etc.)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.guarantor_poa_joint_holder1"
            label="Name of Joint Account Holder (if applicable)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.guarantor_poa_institution2"
                       
            label="Name of Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.guarantor_poa_branch2"
                       
            label="Branch"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.guarantor_poa_account_type2"
                     
            label="Type of Account (savings, loan, etc.)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.guarantor_poa_joint_holder2"
            label="Name of Joint Account Holder (if applicable)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.guarantor_poa_institution3"
                       
            label="Name of Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.guarantor_poa_branch3"
                       
            label="Branch"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.guarantor_poa_account_type3"
                     
            label="Type of Account (savings, loan, etc.)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.guarantor_poa_joint_holder3"
            label="Name of Joint Account Holder (if applicable)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.guarantor_poa_institution4"
                       
            label="Name of Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.guarantor_poa_branch4"
                       
            label="Branch"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.guarantor_poa_account_type4"
                     
            label="Type of Account (savings, loan, etc.)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.guarantor_poa_joint_holder4"
            label="Name of Joint Account Holder (if applicable)"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

    <v-row  justify="center" class="ml-3 mr-3">  
         <v-col cols="1" md="1" class="mr-n3 mt-7" > 
 <v-checkbox
      v-model="staff.confirm_info"      
       :rules="rules.checkRules"
      value="Yes"></v-checkbox>
         </v-col>

          <v-col cols="11" md="11" class="ml-n10"> 
     <label class="mt-7 pl-0 pr-0 text-justify"> 
    <b>I confirm that the information provided by me in this document is, to the best of my knowledge,
           complete and accurate; and I understand that making false or willful omissions may result in disciplinary action being taken.
I undertake that during my employ with the Credit Union, I will update this information, should there be a change in the information provided above.
</b>       
 </label></v-col>
    </v-row>

      <!-- -------------- Short Training Courses (Outside of COK Sponsored Courses) ---------- -->

  </div>
</template>

<script>
import { Staff } from '../includes/Staff';
import employedDate from '../includes/Date';
import {Rules} from '../includes/Rules';
import {mdiPlusCircleOutline} from '@mdi/js';
export default {
    name:'staffAccountInfo',
        data: () => ({
      valid: false,
      staff: Staff,
      rules: Rules,
      title: null,
      icons:{mdiPlusCircleOutline},
    }),
    components:{employedDate},
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

      this.staff.homephone = npa + '-' + nxx + '-' + last4;
    }else if(p=='cell'){
       this.staff.cellphone = npa + '-' + nxx + '-' + last4;
    }
      },
    }

}
</script>

<style scoped>

.HR {
      height:10px; border:2px solid rgb(127, 155, 173); background:rgb(145, 160, 167);
      color:white;
}
</style>