<template>
<!-- <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Date"   
              prepend-icon="mdi-calendar"
              v-bind="attrs"             
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu = false"
          ></v-date-picker>
        </v-menu> -->
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="name"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"       
        single-line 
        :hint="name"
        persistent-hint        
        :rules="empDateRules"   

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
      name: 'DateComponent',
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
        if(this.whichDate == 'emp_date'){
          Staff.emp_date = this.date;
        } 
        else if(this.whichDate == 'dob'){
          Staff.dob = this.date;
        } 
        else if(this.whichDate == 'child-dob1'){       
          Staff.family_child_dob1 = this.date;
        } 
        else if(this.whichDate == 'child-dob2'){
          Staff.family_child_dob2 = this.date;
        } 
        else if(this.whichDate == 'child-dob3'){
          Staff.family_child_dob3 = this.date;
        } 
        else if(this.whichDate == 'child-dob4'){
          Staff.family_child_dob4 = this.date;
        } 
        else if(this.whichDate == 'child-dob5'){
          Staff.family_child_dob5 = this.date;
        } 
      },
    },
  }
</script>

<style scoped>

</style>