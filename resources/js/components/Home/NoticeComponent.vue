<template>
    <div>
      
		<h1 class="newsFeed mb-10"><span class="spanFeed"> Covid Tips</span></h1>
	<v-row no-gutters class="">

		<v-col cols="4" class="">
			<img class="myImg newsImg" id="l1" @click="lightbox('l1')" :src="this.url.StorageURL+this.notices[0].image1" />			
		</v-col>

		<v-col cols="4" class="">
			<img class="myImg newsImg" id="l2" @click="lightbox('l2')" :src="this.url.StorageURL+this.notices[1].image2" />
		</v-col>

		<v-col cols="4" class="">
			<img class="myImg newsImg" id="l3" @click="lightbox('l3')" :src="this.url.StorageURL+this.notices[2].image3" />
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

import { mapState } from 'vuex';            
export default {
    name: 'NoticeComponent',
    data() { return {
        images: {
            images: ''
		},
				
    }
	},
	computed: {
		...mapState([
			'notices','url'
		]),
				// Another way of Calling State
		/* 
		notices (){
			return this.$store.state.notices;
		},
		url(){
			return this.$store.state.url.StorageURL
		} */
	},
	mounted() {	},

	methods: {
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
		
			}	
	}
}
</script>
<style scoped>
.newsImg{
	max-width: 100%;
	width: 100%;
	max-height: 80vh;
	height: 80vh ;
}

.newsFeed {
	padding: 10px 0px 10px 0px;
	text-align: center;
}

.spanFeed {
	border: 1px solid rgba(255, 166, 0, 0.507);
	padding: 5px 20px 10px 20px;
	border-radius: 15px;
	background-color: rgb(0, 195, 255);
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