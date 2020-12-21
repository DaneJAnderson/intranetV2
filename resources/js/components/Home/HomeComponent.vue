<template>
<div>

<!-- -------- Notice Board Component --------- -->
<div id="noticeBoard" class="mb-15">        
        <notice-component></notice-component>
</div>


<!-------------------- Birthday Today -------------->
<dobtoday-component id="happy-birthday" class="mb-5"></dobtoday-component> 

<!-- -------------  Birthday Component ------------ -->
<div id="upcoming-birthday" class="pt-5 white  mb-15">        
        <birthday-component></birthday-component>
</div>

<!-- ------------------ COK Cross Roads Building Front and Back ------ -->
<div>
      <div v-for="(image,i) in this.images" :key="i">
        <v-parallax
      dark
      :src="url+image"
      height="500"
        >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-1 font-weight-thin mb-4">
            <!-- Vuetify -->
          </h1>
          <h4 class="subheading">
            <!-- This is a {{ colors[i] +' '+ (i + 1) }}<br/> -->
            <!-- Build your application today! -->
          </h4>
        </v-col>
      </v-row>
    </v-parallax> 
    </div>
</div>


<!-- ---------------  Gallery Component ------------ -->
<div id="gallery" class="pt-5 mb-15">
        <gallery-component></gallery-component>

</div>

<div id="promotions" class=" ">
        <h3 class="text-center pb-15 pt-10 "><b>Promotions </b></h3>

        <div v-for="(image,i) in this.promos" :key="i"  ><!--style="margin-top: 100px"-->
        <v-parallax class="rounded-lg"
      dark
      :src="url+image"
      height="500"
      
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-1 font-weight-thin mb-4">
            <!-- Vuetify -->
          </h1>
          <h4 class="subheading">
            <!-- This is a {{ colors[i] +' '+ (i + 1) }}<br/> -->
            <!-- Build your application today! -->
          </h4>
        </v-col>
      </v-row>
    </v-parallax> 
    </div>
       
</div>

    </div>
</template>
<script>
import NoticeComponent from './NoticeComponent'
import BirthdayComponent from './BirthdayComponent'
import GalleryComponent from './GalleryComponent'
import dobtodayComponent from './dobTodayComponent';

export default {
    name: 'HomeComponent',
    components: {
        NoticeComponent,
        BirthdayComponent,
        GalleryComponent,
        dobtodayComponent 
    },
    beforeDestroy() {
                          
                window.topsfunc();                
        },

    data:()=> ({
                url: window.publicURL,
                images: ['/images/cok-building2.jpg', '/images/cok-building1.png'],
                promos: ['/images/Debitcard-promo.png', '/images/goGreen-promo.png']
        })

}
</script>
<style scoped>


</style>