<template>
    <div class="">


<div class="shadow-lg rounded-bl-lg rounded-br-lg">
        <h2 class="text-center white--text warning"> Gallery</h2>
      <v-container fluid >
  <v-row dense class="grey darken-3 rounded-lg">
    <v-col
      v-for="(image,i) in this.gallery.data"
      :key="i"
      class=""
      cols="4"
      md="4"
    > 
    <!-- aspect-ratio="1" -->
      <img
        :src="url.StorageURL+'images/galleries/'+image.image" 
        class="grey lighten-2 thumb rounded cursor" width="100%" height="260px"
        @click="openLightBox();currentSlide(i+(currentPage-1)* gallery.per_page)"
      />
     
    </v-col>
  </v-row>
    </v-container>
    </div>

    <div class="text-center">
    <v-pagination
      v-model="currentPage"
      :length="lastPage"
      :total-visible="7"
    ></v-pagination>
    </div>


    	<!-- ---------------------------- LightBox ------------------------- -->
		<div id="galleryLightBox" class="LightBox">
		  <span class="close cursor" style=" opacity:1" @click="closeGLightBox">&times;</span>
		  <div class="LightBox-content">

			<div v-for="(image,i) in galleryAll" :key='i' class="mySlides" > 
				<span class="numbertext"> {{i +1}} / {{ galleryAll.length }}</span>
				<img :src="url.StorageURL+'images/galleries/'+image.image"  @click="openLightBox();currentSlide(i)" class="hover-shadow cursor imageSize" />
				<div class="caption">{{image.name}}</div>
			</div>	
			
		  </div>

		  <a class="prev" @click="plusSlides(-1)">&#10094;</a>
		  <a class="next" @click="plusSlides(1)">&#10095;</a>
		</div>




    </div>
</template>
<script>
import { mapState,  mapActions, mapGetters, mapMutations } from 'vuex';  

export default {
    name: 'GalleryComponent',
    mounted(){
        this.$store.dispatch("homeStore/GET_Gallery",1); 
		this.$store.dispatch("homeStore/GET_GalleryAll"); 
		
    },
    data() {
      return {
        count: 1,
        slideIndex: 0,
      }
	},

    computed: {

        ...mapGetters('homeStore', ['gallery','galleryAll','url']), // get data from store

        currentPage: { 
            get(){
                // console.dir(this.gallery);
                return this.gallery.current_page
            },
            set(value){
				this.count=2;
                this.SET_CURRENTPAGE(value);
                // this.$store.commit("homeStore/SET_CURRENTPAGE",value)
            }
        },

        lastPage: {
            get(){
                return this.gallery.last_page }
        }
        

    },

    watch: { // Watch for Changes in variables and computed values

        currentPage(newValue, oldValue) {
          
          if (this.count>1){

              var gt = document.getElementById("galleryTop");
              gt.click(); 
            //   console.log(this.count);
            }
              this.count=2;
           try{ window.scrollFunc(); }catch(e){}
            setTimeout(()=> this.paginatePage(newValue), 1000);
        },
         
    },

    methods: {

        ...mapMutations('homeStore', ['SET_CURRENTPAGE']), // set data in store

        paginatePage(pageNum) { this.$store.dispatch("homeStore/GET_Gallery",pageNum); },

  // -------------------------- LightBox ------------------------- //
  
    closeGLightBox() {      
		document.getElementById("galleryLightBox").style.display = "none";
    },
    
	  openLightBox() {    
		document.getElementById("galleryLightBox").style.display = "block";
    }, 

	  showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		
		if (n > slides.length-1) {this.slideIndex = 0}
		if (n < 0) {this.slideIndex = slides.length-1}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		if(slides[this.slideIndex]){
		slides[this.slideIndex].style.display = "block";
		}
	  },
	  
			plusSlides (n) {
			  this.showSlides(this.slideIndex += n);
			},
			currentSlide(n) {				
			  this.showSlides(this.slideIndex = n);
			},
  // ---------------------- End LightBox --------------------- //
    },
}
</script>


<style scoped>
.thumb {
    max-height: 300px !important;
}

.imageSize {
  width: 100%;
}
		
	  * {
	  box-sizing: border-box;
	}
	
		
	.LightBox {
	  display: none;
	  position: fixed;
	  z-index: 1;
	  padding-top: 100px;
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 100%;
	  overflow: auto;
	  background-color: rgba(0, 0, 0, 0.7);
	}
	
	
	#galleryLightBox .LightBox-content {
	  position: relative;
	  /* background-color: #fefefe; */
	  background-color: black;
	  margin: auto;
	  padding: 3px;
    border-radius: 7px; 
	  width: 90%;
	  max-width: 1200px;
	 
	}
	

	.close {
	  color: white;
	  position: absolute;
	  top: 18%;
	  right: 2%;
	  font-size: 40px;
	  font-weight: bold;
	}
	
	.close:hover,
	.close:focus {
	  color: #999;
	  text-decoration: none;
	  cursor: pointer;
	}
	
	.mySlides {
	  display: none;	  
	}
	
	.cursor {
	  cursor: pointer;
	}
	
	
	#galleryLightBox .prev,
	#galleryLightBox .next {
	  background-color: rgba(0, 0, 0, 0.5);
	  cursor: pointer;
	  position: absolute;
	  top: 50%;
	  width: auto;
	  padding: 16px;
	  margin-top: -50px;
	  color: white;
	  font-weight: bold;
	  font-size: 20px;
	  transition: 0.6s ease;
	  border-radius: 0 3px 3px 0;
	  user-select: none;
	  -webkit-user-select: none;
	}
	

	.next {
	  right: 0;
	  border-radius: 3px 0 0 3px;
	}
	
	
	.prev:hover,
	.next:hover {
	  background-color: rgba(0, 0, 0, 0.8);
	}
	
	
	.numbertext {
	  color: #f2f2f2;
	  font-size: 12px;
	  padding: 8px 12px;
	  position: absolute;	 
	  margin-top: -1%;
	}
	
	
	.caption-container {
	  text-align: center;
	  background-color: black;
	  padding: 2px 16px;
	  color: white;
	}
	.mySlides img {
		max-height: 80vh;
	}
	.caption {
		text-align: center;		
		margin-top: 5px !important;

	}
	.col-xs-3{
		padding: 1px;
	}

    .heading {
        text-align:center;
        background: orange;
        color: white;
        padding: 5px;
    }

    .preview {
        color:rgba(255, 255, 255, 0.685);
        margin-top:-22%;
        margin-left:40%;
        position:absolute;
        font-size: 500%;
    }
	.preview:hover {
		opacity: 1;
		color: orange;
	}

	</style>