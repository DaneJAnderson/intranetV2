<template>

  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
        <!-- :label="name" -->
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"       
        single-line 
        hint="Effective Date"
        persistent-hint        
        class="float-right mt-n13 mr-5 "                          
        label="Effective Date" 
        color="blue--text"
        dark  

      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      no-title     
      @change="save"
    ></v-date-picker>
  </v-menu>
</template>

<script>
    import {Staff} from './Staff';
  export default {
      name: 'effectiveDate',
      props:['WhichDate','Name'],
    data () {return{
    //   date: null,
      date: Staff.emp_date,
      menu: false,
      whichDate: this.WhichDate,
      name: this.Name,      
      empDateRules: [
        v => !!v || 'Date is required',       
      ],
    }},
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    mounted(){
      if(this.whichDate.includes('child-dob')){   
        this.empDateRules = [true];       
        // console.log('We good !');
      }
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
        console.log(this.whichDate);
        if(this.whichDate == 'effective_date_name_info'){
          Staff.effective_date_name_info = this.date;
        } 
            
          else if(this.whichDate == 'effective_date_address_info'){
          Staff.effective_date_address_info = this.date;
        } 
          else if(this.whichDate == 'effective_date_persona_data'){
          Staff.effective_date_persona_data = this.date;
        } 
          else if(this.whichDate == 'effective_date_emergency'){
          Staff.effective_date_emergency = this.date;
        } 
          else if(this.whichDate == 'effective_date_family_info'){
          Staff.effective_date_family_info = this.date;
        } 
          else if(this.whichDate == 'effective_date_edu_history'){
          Staff.effective_date_edu_history = this.date;
        } 
          else if(this.whichDate == 'effective_date_credit_history'){
          Staff.effective_date_credit_history = this.date;
        } 
          else if(this.whichDate == 'effective_date_charity'){
          Staff.effective_date_charity = this.date;
        } 
          else if(this.whichDate == 'effective_date_staff_acc'){
          Staff.effective_date_staff_acc = this.date;
        } 
      },
    },
  }
</script>

<style scoped>

</style>