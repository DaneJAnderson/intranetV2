<template>
<div>

<!---
<dobtoday-component 
v-if="birthdays.bdayToday && birthdays.bdayToday.length"
 class="mb-5"></dobtoday-component>  Birthday Today ---->

<div class="BGColor rounded"><!---  Upcoming Birthday  ---->

    <div  v-if="birthdays.firstHalf && birthdays.firstHalf.length"  :style="BGStyle">    <!--- Background Confetti --->   


    <v-container fluid  >
      <h3 class="textShadowbb text-center mb-5">
        Staff celebrating their birthday this month.
			</h3>

    <v-carousel
    :cycle=true
    height="300"    
    hide-delimiter-background
    hide-delimiters
    show-arrows-on-hover   
    interval="7000"
    >
  <!-- --------- Birthday Slide One ----------  -->
    <v-carousel-item v-if="birthdays.firstHalf && birthdays.firstHalf.length">
     <v-row  
     align-content="center"
     justify="center"
    
      >

     <v-col 
      v-for="(bday, i) in birthdays.firstHalf"  :key="i" 
      cols="6"
      md="4" sm="6" lg="3"

      >
      <v-card  :dark="false" color="transparent" max-height="300">
      <!-- -------------- Upcoming Birthday Image ------------ -->
      <img class="bdayThumb" v-if="bday.image && bday.image != ''" width="100%"
        :src="url.StorageURL+'images/profile_images/'+bday.image"
        
      />

      <!-- -------------- Upcoming Birthday No Image Male ------------ -->
      <img class="bdayThumb" v-else-if="bday.sex==0" width="100%" 
        :src="url.PublicURL+'/images/Male_worker.png'"        
      />

       <!-- -------------- Upcoming Birthday No Image Female ------------ -->
      <img class="bdayThumb" v-else width="100%"
        :src="url.PublicURL+'/images/Female_worker.png'"       
      />
      <!-- ---------------- Staff Details ------------------------- -->
      <v-card-title class="title staffDetailBG">
        <ul>
        <li><span class="text-body-2">
        {{ bday.first_name+' '+bday.last_name }} </span></li>
        <li><span class="text-body-2">
        Birthday: {{ getDateFormal(bday.dob)}}</span></li>
        <li>
        <p v-if="bday.department" class="text-caption">Department: {{ bday.department.substr(0,21)}}.</p>
        <p v-else class="text-caption">Department: {{ bday.department}}.</p></li>
        </ul>
        </v-card-title>



      </v-card>
    </v-col>
    </v-row>
    </v-carousel-item>

  <!-- --------- Birthday Slide Two ----------  -->
    <v-carousel-item v-if="birthdays.secHalf && birthdays.secHalf.length" >
     <v-row 
     align-content="center"
     justify="center"
      >

     <v-col 
      v-for="(bday, i) in birthdays.secHalf"  :key="i" 
      cols="6"
      md="4" sm="6" lg="3"

      >
      <v-card :dark="false" color="transparent" max-height="300">
      <!-- -------------- Upcoming Birthday Image ------------ -->
      <img class="bdayThumb" v-if="bday.image && bday.image != ''" width="100%"
        :src="url.StorageURL+'images/profile_images/'+bday.image"
        
      />

      <!-- -------------- Upcoming Birthday No Image Male ------------ -->
      <img class="bdayThumb" v-else-if="bday.sex==0" width="100%" 
        :src="url.PublicURL+'/images/Male_worker.png'"        
      />

       <!-- -------------- Upcoming Birthday No Image Female ------------ -->
      <img class="bdayThumb" v-else width="100%"
        :src="url.PublicURL+'/images/Female_worker.png'"       
      />
      <!-- ---------------- Staff Details ------------------------- -->
      <v-card-title class="title staffDetailBG">
        <ul>
        <li><span class="text-body-2">
        {{ bday.first_name+' '+bday.last_name }} </span></li>
        <li><span class="text-body-2">
        Birthday: {{ getDateFormal(bday.dob)}}</span></li>
        <li>
        <p v-if="bday.department" class="text-caption">Department: {{ bday.department.substr(0,21)}}.</p>
        <p v-else class="text-caption">Department: {{ bday.department}}.</p></li>
        </ul>
        </v-card-title>



      </v-card>
    </v-col>
    </v-row>
    </v-carousel-item>

    <!-- --------- Birthday Slide Three ----------  -->
    <v-carousel-item v-if="birthdays.thirdHalf && birthdays.thirdHalf.length" >
     <v-row 
     align-content="center"
     justify="center"
      >

     <v-col 
      v-for="(bday, i) in birthdays.thirdHalf"  :key="i" 
      cols="6"
      md="4" sm="6" lg="3"

      >
      <v-card :dark="false" color="transparent" max-height="300">
      <!-- -------------- Upcoming Birthday Image ------------ -->
      <img class="bdayThumb" v-if="bday.image && bday.image != ''" width="100%"
        :src="url.StorageURL+'images/profile_images/'+bday.image"
        
      />

      <!-- -------------- Upcoming Birthday No Image Male ------------ -->
      <img class="bdayThumb" v-else-if="bday.sex==0" width="100%" 
        :src="url.PublicURL+'/images/Male_worker.png'"        
      />

       <!-- -------------- Upcoming Birthday No Image Female ------------ -->
      <img class="bdayThumb" v-else width="100%"
        :src="url.PublicURL+'/images/Female_worker.png'"       
      />
      <!-- ---------------- Staff Details ------------------------- -->
      <v-card-title class="title staffDetailBG">
        <ul>
        <li><span class="text-body-2">
        {{ bday.first_name+' '+bday.last_name }} </span></li>
        <li><span class="text-body-2">
        Birthday: {{ getDateFormal(bday.dob)}}</span></li>
        <li>
        <p v-if="bday.department" class="text-caption">Department: {{ bday.department.substr(0,21)}}.</p>
        <p v-else class="text-caption">Department: {{ bday.department}}.</p></li>
        </ul>
        </v-card-title>



      </v-card>
    </v-col>
    </v-row>
    </v-carousel-item>

    <!-- --------- Birthday Slide Four ----------  -->
    <v-carousel-item v-if="birthdays.forthHalf && birthdays.forthHalf.length" >
     <v-row  
     align-content="center"
     justify="center"
      >
        <!-- {{birthdays.forthHalf}} -->
     <v-col 
      v-for="(bday, i) in birthdays.forthHalf"  :key="i" 
      cols="6" 
      md="4" sm="6" lg="3" 

      >
      <v-card :dark="false" color="transparent"  max-height="300">
      <!-- -------------- Upcoming Birthday Image ------------ -->
      <img class="bdayThumb" v-if="bday.image && bday.image != ''" width="100%"
        :src="url.StorageURL+'images/profile_images/'+bday.image"
        
      />

      <!-- -------------- Upcoming Birthday No Image Male ------------ -->
      <img class="bdayThumb" v-else-if="bday.sex==0" width="100%" 
        :src="url.PublicURL+'/images/Male_worker.png'"        
      />

       <!-- -------------- Upcoming Birthday No Image Female ------------ -->
      <img class="bdayThumb" v-else width="100%"
        :src="url.PublicURL+'/images/Female_worker.png'"       
      />
      <!-- ---------------- Staff Details ------------------------- -->
      <v-card-title class="title staffDetailBG">
        <ul>
        <li><span class="text-body-2">
        {{ bday.first_name+' '+bday.last_name }} </span></li>
        <li><span class="text-body-2">
        Birthday: {{ getDateFormal(bday.dob)}}</span></li>
        <li>
        <p v-if="bday.department" class="text-caption">Department: {{ bday.department.substr(0,21)}}.</p>
        <p v-else class="text-caption">Department: {{ bday.department}}.</p></li>
        </ul>
        </v-card-title>



      </v-card>
    </v-col>
    </v-row>
    </v-carousel-item>
   
    
  </v-carousel>
  </v-container>
    </div></div></div>
</template>


<script>
import { mapState,  mapActions, mapGetters} from 'vuex';  
// import dobtodayComponent from './dobTodayComponent';


export default {
    name: 'BirthdayComponent',
    components:{
      // dobtodayComponent       
    },
    	computed: {

    ...mapGetters('homeStore', ['birthdays','url']),

    BGStyle() {
          return {  
            // "background": 'red'      
        "background-image": `url(${this.url.PublicURL}/images/confetti.gif)`,        
        "background-repeat":  'repeat',

      };
    }, 
      
    
  },
  
  mounted(){
    this.$store.dispatch("homeStore/GET_Birthdays");  
        
  },
  methods: {

    getDateFormal(date){

  var d = new Date(date);
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var m = month[d.getMonth()];
  var day = d.getDate();

        // console.log(m+' '+day);
        return m+' '+day;

    }


  },

}
</script>

<style scoped>
.bdayThumb{

height: 200px;
max-height: 200px;
}

.staffDetailBG {
	background-color: rgb(0, 0, 204,0.6);
	color: white !important;
  
	/* font-size: 12px !important; */
}

.BGColor {
    background-image: linear-gradient(to right, violet,orange,yellow,#ffd11a,#ffd11a,yellow,orange,violet);    
}

.textShadowbb {
	text-shadow: -1px -1px 0 rgba(59, 2, 73, 0.5), 
	1px -1px 0 rgba(59, 2, 73, 0.5),
	 -1px 1px 0 rgba(59, 2, 73, 0.5),
     1px 1px 0 rgba(59, 2, 73, 0.5) !important;
     
	 color: white;

}

ul li {
  list-style-type: none;
  padding: 0;
  /* margin-top: -10px; */
  display: flex;
  margin-left: -20px !important;
  
}
.text-caption{
  word-wrap: break-word !important;
}
</style>