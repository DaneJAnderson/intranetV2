<template>
  <div>
    <label></label>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.edu_institution1"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.edu_institution_location1"
                       
            label="Location"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.edu_qualification1"
                     
            label="Type of Degree/Qualification/License"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.edu_year_graduated1"
            label="Year of Graduation/Confirmation"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.edu_institution2"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.edu_institution_location2"
                       
            label="Location"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.edu_qualification2"
                     
            label="Type of Degree/Qualification/License"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.edu_year_graduated2"
            label="Year of Graduation/Confirmation"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.edu_institution3"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.edu_institution_location3"
                       
            label="Location"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.edu_qualification3"
                     
            label="Type of Degree/Qualification/License"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.edu_year_graduated3"
            label="Year of Graduation/Confirmation"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.edu_institution4"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.edu_institution_location4"
                       
            label="Location"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.edu_qualification4"
                     
            label="Type of Degree/Qualification/License"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.edu_year_graduated4"
            label="Year of Graduation/Confirmation"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>
<!-- <hr/> -->
<div class="HR "></div>
<!-- -------------- Short Training Courses (Outside of COK Sponsored Courses) ---------- -->

<label class="ml-7 mt-5"> Short Training Courses (Outside of COK Sponsored Courses): </label>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_institution1"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_location1"
                       
            label="Address"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_certification1"
                     
            label="Certification"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_year_graduated1"
            label="Date"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_institution2"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_location2"
                       
            label="Address"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_certification2"
                     
            label="Certification"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_year_graduated2"
            label="Date"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_institution3"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_location3"
                       
            label="Address"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_certification3"
                     
            label="Certification"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_year_graduated3"
            label="Date"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_institution4"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_location4"
                       
            label="Address"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_certification4"
                     
            label="Certification"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_year_graduated4"
            label="Date"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row  justify="center" class="ml-3 mr-3">

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_institution5"
                       
            label="Institution"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="3" >   
          <v-text-field
            v-model="staff.training_location5"
                       
            label="Address"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_certification5"
                     
            label="Certification"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

            <!-- :rules="rules.emptyRules"            -->
        <v-col cols="12" md="3" >
          <v-text-field
            v-model="staff.training_year_graduated5"
            label="Date"
            validate-on-blur
            
          ></v-text-field>
        </v-col>

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
    name:'educationHistory',
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