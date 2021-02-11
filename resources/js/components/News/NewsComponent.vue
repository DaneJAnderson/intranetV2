<template>
  <div class="grey ml-n10 mr-n10 pl-5 pr-5 rounded">

      <h3 class="text-center mb-10">
        <span class="grey lighten-1 white--text rounded-lg p-2 "><b>Notice Board  </b> </span></h3>
<v-row justify="center" v-if="!this.notices[0]&&this.loading">
      <v-progress-circular 
      :size="250"
      :width="7"
      color="amber"
      indeterminate
    ></v-progress-circular>
        
</v-row>
      <v-row v-if="this.notices[0]"  class="">

		  <v-col v-for="(notice, i) in this.notices" :key="i" cols="4" lg="3" md="4" class="">
      <v-card height="350" max-height="350">
			<!-- <img class="noticeImg" width="100%" height="260px" :src="url.StorageURL+notice.image" /> -->

      <img class="myImg newsImg" width="100%" height="260px" v-if="notice.type==1" :id="i" @click="lightbox(i)" :src="url.StorageURL+notice.image" />

      <router-link v-if="notice.type==2" :to="notice.link">
			<img class="myImg newsImg" width="100%" height="260px" :id="i" :src="url.StorageURL+notice.image" />        
      </router-link>

      <a v-if="notice.type==3" :href="url.StorageURL+notice.link" target="_blank">
			<img class="myImg newsImg" width="100%" height="260px" :id="i" :src="url.StorageURL+notice.image" />        
      </a>

      <p class="name"><b>{{notice.name.substr(0,64)+'...'}}</b><br/>
      <span class="caption pl-5">
        <v-icon>{{icons.mdiClockOutline}}</v-icon>
        {{ ' '+getDateFormal(notice.created_at) }}</span></p>
      </v-card>
		</v-col> 

    		<div id="myModal" class="modal">
			<span class="close">&times;</span>
			<img class="modal-content" id="img01">
			<div id="caption"></div>
		  </div>
	</v-row>
  
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';  
import { mdiClockOutline,} from '@mdi/js'
export default {
    name: 'NewsComponent',
    data: ()=>({
      icons:{mdiClockOutline},
      loading: true,
    })
    ,   

	computed: {

    ...mapGetters('newsStore', ['notices','url']),  
    
	},
	mounted(){    
    this.$store.dispatch("newsStore/GET_Notices");
    setTimeout(()=>{this.loading = false; }, 9000); 
      
  },
  methods:{
    			 lightbox(id){

			var modal = document.getElementById("myModal");
			var modalImg = document.getElementById("img01");
			var captionText = document.getElementById("caption");

			 var img = document.getElementById(id);
			  modal.style.display = "block";		
			  modalImg.src = img.src; 
			
			var span = document.getElementsByClassName("close")[0];
			
			span.onclick = function() { 
			  modal.style.display = "none";
			}
		
      },

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
  var year = d.getFullYear();

        // console.log(m+' '+day);
        return m+' '+day+', '+year;

    }
  },
     beforeDestroy() {
                          
                window.topsfunc();   
                     
        },

}
</script>

<style scoped>

.v-progress-circular {
  margin: 3rem;
}

.name {
  padding: 10px;

}

/* -------------------------------- */

/* .newsImg{
	max-width: 100%;
	width: 100%;
	max-height: 500px;
	height: 65vh ;
} */

.newsFeed {
	padding: 10px 0px 10px 0px;
	text-align: center;
}

.spanFeed {
	border: 1px solid rgba(255, 166, 0, 0.507);
	padding: 5px 20px 10px 20px;
	border-radius: 15px;
	/* background-color: rgb(0, 195, 255); */
	background-color: rgb(136, 147, 156);
  /* font-family: DK_Cool_Crayon;  */
	color:white;
}



.myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.myImg:hover {opacity: 0.9;padding: 5px;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
  overflow: hidden;  
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  max-width: 1000px;
  width: 80%;
  overflow: hidden;
  max-height: 84vh !important;
  height: 84vh !important;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
 .close {
  position: absolute;
  top: 50px;
  right: 35px;
  color: #ffffff;
  opacity: 1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  font-size:50px; margin-top: 50px; 
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .newsImg{height: 500px !important;}
  .modal-content {
    width: 100%;
  }
}
.carousel-indicators{
	z-index: 1;
}
#myModal {
	overflow: hidden;
	z-index: 2;
}
</style>

