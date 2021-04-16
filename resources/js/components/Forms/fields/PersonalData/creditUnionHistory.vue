<template>
  <div>
      
      <label class="mt-7 pl-10 pr-10">Please indicate the names of immediate relatives
           (mother, father, children, husband, spouse, in-laws, sister, brothers) 
          employed to and/or who volunteers at Credit Unions, 
          and the Credit Unions they are affiliated with:</label>
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_name1"
                       
            label="Name of Immediate Relative"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_branch1"
                       
            label="Credit Union"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.cok_relatives_relation1"
                     
            label="Relationship"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_name2"
                       
            label="Name of Immediate Relative"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_branch2"
                       
            label="Credit Union"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.cok_relatives_relation2"
                     
            label="Relationship"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_name3"
                       
            label="Name of Immediate Relative"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_branch3"
                       
            label="Credit Union"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.cok_relatives_relation3"
                     
            label="Relationship"
            validate-on-blur
            
          ></v-text-field>
        </v-col>      

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_name4"
                       
            label="Name of Immediate Relative"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_branch4"
                       
            label="Credit Union"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.cok_relatives_relation4"
                     
            label="Relationship"
            validate-on-blur
            
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_name5"
                       
            label="Name of Immediate Relative"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="4" >   
          <v-text-field
            v-model="staff.cok_relatives_branch5"
                       
            label="Credit Union"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.cok_relatives_relation5"
                     
            label="Relationship"
            validate-on-blur
            
          ></v-text-field>
        </v-col>     

      </v-row>

      <hr/>
      
      <label class="mt-7 pl-10 pr-10">Are you or any of your immediate relatives related to any Politically Exposed Persons? (PEP) –
           These include head of state, judicial or of government, senior politicians,
           and senior government ministers, members of parliament, senior executives of state owned entities. </label>
 <v-row  justify="center" class="ml-3 mr-3">
             <v-col
  cols="12"
  md="3"
  
  >
    <v-radio-group
      v-model="staff.pep_check"  
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
            v-model="staff.pep_persons"
                     
            label="If yes, state position(s) held: "
            validate-on-blur
            
          ></v-text-field>
        </v-col>  

 </v-row>

      <!-- -------------- Short Training Courses (Outside of COK Sponsored Courses) ---------- -->
  </div>
</template>

<script>
import { Staff } from '../includes/Staff';
import {Rules} from '../includes/Rules';

export default {
    name:'creditUnionHistory',
        data: () => ({
      valid: false,
      staff: Staff,
      rules: Rules,
      title: null,
     
    }),

}
</script>

<style>

</style>