<template>
<div>

     <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
        
        <!-- :counter="10" -->
          <v-text-field
            v-model="staff.fname"
            :rules="nameRules"            
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="staff.lname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >        
          <v-text-field
            v-model="staff.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col> 

      </v-row>

       <v-btn
      class="mr-4"
      @click="submit"
      :disabled="!valid"
      small
    >
      Save
    </v-btn>

    <v-btn class="" @click="callForms(1)"
 absolute color="info lighten-1" :disabled='!valid'
 small
>Save & Continue </v-btn>
    </v-container>

  </v-form>
</div>
  
</template>

<script>
import { mapActions, mapGetters} from 'vuex';  
import { Staff } from './Staff';
export default {
    name: 'personlinfoForm',
        data: () => ({
      valid: false,
      staff: Staff,
           
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length >= 2 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        // v => /.+@.+/.test(v) || 'E-mail must be valid',
        v => /^\S+@\S+\.\S+$/.test(v) || 'E-mail must be valid',
      ],
    }),

    mounted(){

      // this.$store.dispatch("adminStore/PUT_Notice_Name");
      this.GET_Forms();     
    },

        methods: {

          ...mapActions('formsStore', ['GET_Forms','UPDATE_Forms', 'POST_Forms']),
      submit () {
        
        if(this.valid){
           
            // let data = {'fname': this.fname,'lname': this.lname, 'email': this.email};
            let data = this.staff;
            this.POST_Forms(data);
           
        }
      },
      clear () {
        this.$v.$reset()
        this.fname = ''
        this.lname = ''
        this.email = ''       
      },
      callForms(nextTab){
        
         this.$emit('nextTab', { 'tabnum': 1}); // send to toolsComponent
      }

    },

}
</script>

<style>

</style>