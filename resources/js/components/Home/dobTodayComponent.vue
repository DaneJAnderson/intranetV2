<template>
<div
 v-if="birthdays.bdayToday && birthdays.bdayToday.length" 
 class="BGColor rounded"><!---  Upcoming Birthday  ---->
    <div  v-if="birthdays"  :style="BGStyle">       


    <v-container fluid>
			
				<h3 class="textShadowbb ">All the staff here at COK would like to say a big Happy birthday to you on your special day.
				</h3><br/>
			

    <v-carousel
    :cycle=false
    height="300"
    hide-delimiter-background
    hide-delimiters
    :show-arrows="false"
    >
  <!-- --------- Birthday Slide One show-arrows-on-hover----------  -->
    <v-carousel-item v-if="birthdays.bdayToday && birthdays.bdayToday.length">
     <v-row  
     align-content="center"
     justify="center"
      >

     <v-col 
      v-for="(bday, i) in birthdays.bdayToday"  :key="i" 
      cols="6"
      md="3" sm="6"
      

      >
      <v-card :dark="false" color="transparent" max-height="320">
      <!-- -------------- Upcoming Birthday Image ------------ -->
      <img class="bdayThumb" v-if="bday.image || bday.image == ''" width="100%"
        :src="url.StorageURL+'images/profile_images/'+bday.image"
        
      />

      <!-- -------------- Upcoming Birthday No Image Male ------------ -->
      <img class="bdayThumb" v-else-if="bday.sex==0" width="100%" 
        :src="url.PublicURL+'images/Male_worker.png'"        
      />

       <!-- -------------- Upcoming Birthday No Image Female ------------ -->
      <img class="bdayThumb" v-else width="100%"
        :src="url.PublicURL+'images/Female_worker.png'"       
      />
      <!-- ---------------- Staff Details ------------------------- -->
      <v-card-title  class="title staffDetailBG">
        <span class="text-body-2">
        {{ bday.first_name+' '+bday.last_name }}<br/>
        Birthday: {{ getDateFormal(bday.dob) }}</span><br/>
        <span class="text-caption">Department: {{ bday.department}}.</span>
        </v-card-title>



      </v-card>
    </v-col>
    </v-row>
    </v-carousel-item>

   
   
    
  </v-carousel>
  </v-container>
    </div></div>
</template>


<script>
import { mapState,  mapActions, mapGetters} from 'vuex';  

export default {
    name: 'dobtodayComponent',
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
   background: rgba(255, 255, 255, 0.1);
   padding-left: 10px;
   padding-right: 5px;
   border-radius: 5px;
}

</style>