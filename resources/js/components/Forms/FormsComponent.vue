<template>
  <div>

      <h5 class="mb-5"><u><b>Yearly Staff Information Forms </b> </u></h5>
<v-card max-width="1600px" >
    <v-tabs
      v-model="tab"
      background-color="blue-grey"
      color="white"
      slider-color="amber lighten-3"
      dark
    >
      <v-tab active-class='blue-grey darken-1'
        v-for="tab in this.formTabs"
        :key="tab.header"
      >
        {{ tab.header }}
      </v-tab>
      <!-- <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab> -->
    </v-tabs>

    <v-tabs-items v-model="tab" class="mt-10">
 
<!-- --------------- Personal Information Data Sheet -------- -->
      <v-tab-item >
        <v-card >
         <!-- {{this.formTabs[0].header}}  -->

         <personalinfo-Form @nextTab="nextTab" :cok_email="cok_email"></personalinfo-Form>

        </v-card>
      </v-tab-item>

<!-- ------------- Connected Party Annual Declaration Form ------ -->
      <v-tab-item >
        <v-card flat>
         {{this.formTabs[1].header}} 
         <connectedparty-Form></connectedparty-Form>
        </v-card>
      </v-tab-item>
    
<!-- ------------ Annual Ethics & Conflict of Interest Statement ----- -->
      <v-tab-item >
        <v-card flat>
         {{this.formTabs[2].header}} 
         <ethicsconflictForm></ethicsconflictForm>
        </v-card>
      </v-tab-item>

<!-- -------- Anti-Money Laundering & Counter Financing of Terrorism ---- -->
      <v-tab-item >
        <v-card flat>
         {{this.formTabs[3].header}} 
         <moneylaunderingForm></moneylaunderingForm>
        </v-card>
      </v-tab-item>

<!-- ------- Employee Confidentiality Agreement -------------->
      <v-tab-item >
        <v-card flat>
         {{this.formTabs[4].header}} 
         <confidentialagreementForm></confidentialagreementForm>
        </v-card>
      </v-tab-item>

  <!-- ------ Staff Declaration -------- -->
      <v-tab-item >
        <v-card flat>
         {{this.formTabs[5].header}} 
         <staffdeclarationForm></staffdeclarationForm>
        </v-card>
      </v-tab-item>


    </v-tabs-items>
  <!--   <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
  </v-card>


  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';  
import personalinfoForm from './fields/personalInfoData';
import connectedpartyForm from './fields/connectedParty';
import ethicsconflictForm from './fields/ethicsConflict';
import moneylaunderingForm from './fields/moneyLaundering';
import confidentialagreementForm from './fields/confidentialAgreement';
import staffdeclarationForm from './fields/staffDeclaration';


export default {

  name: 'formsComponent',
  components: {
    personalinfoForm,
    connectedpartyForm,
    ethicsconflictForm,
    moneylaunderingForm,
    confidentialagreementForm,
    staffdeclarationForm,
    
  },
  data () {
      return {
        tab: null,
        items: [],
        cok_email: '',
      }
    },  

	mounted(){    
    // this.$store.dispatch("formsStore/GET_Forms");
    // setTimeout(()=>{this.loading = false; }, 9000); 

    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');
    const username = sessionStorage.getItem('username');
    // const token = localStorage.getItem('token');
    // const username = localStorage.getItem('username');
    const auth = this.$store.getters['adminStore/auth'];

    // console.log(email);
    this.cok_email = auth.email?auth.email:email;

    if((!token&&!auth.token) || (!username&&!auth.username)){
      this.$router.replace('/tools');
    }

      
  },
  	computed: {
    ...mapGetters('formsStore', ['formTabs','url']),      
	},
  methods:{

    nextTab(nextTab){
      // console.log(nextTab);
      this.tab = nextTab.tabnum;
    }
  },
  

}
</script>

<style>

</style> 