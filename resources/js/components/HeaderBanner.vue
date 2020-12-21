<template>
<div>
  <v-row justify="center" class="mt-15 pt-15" v-if="!this.images[0]">
      <v-progress-circular 
      :size="250"
      :width="7"
      color="amber"
      indeterminate
    ></v-progress-circular>        
</v-row>

  <v-carousel 
  hide-delimiter-background  
  :cycle=true
  show-arrows-on-hover
  height="500"
  interval="7000"
  >

  

    <v-carousel-item
      v-for="(item,i) in images"
      :key="i"
      
    >


     <v-parallax
      dark
      :src="item.src"
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
            COK Sodality Co-operative Credit Union <span style="font-size: 80%">LTD.</span>
          </h1>
          <h4 class="subheading">
           Intranet
          </h4>
        </v-col>
      </v-row>
    </v-parallax>   

    
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
export default {
    name: "BannerComponent",
    data: () => ({
      
        // Image Height Must be over 700px for Parallax to show
        images:
        [
          {        
            src:  window.publicURL+'/images/banner1.png',
          },
          {
           
            src:  window.publicURL+'/images/banner2.jpg',
          },
          {
            
            src:  window.publicURL+'/images/banner3.jpg',
          },
       /*    {
            
            src:  window.publicURL+'/images/cok-building2.jpg',
          }, */
        ],

        colors: [
        'squirrel',
        'sky',
        'sky',
        'planet',       
      ],

        // },
     
    }),

}
</script>

<style scope>



</style>