<template>
  <v-carousel 
  hide-delimiter-background  
  cycle
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
            Vuetify
          </h1>
          <h4 class="subheading">
            This is a {{ colors[i] +' '+ (i + 1) }}<br/>
            Build your application today!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
   

    <!-- <v-sheet
       color="transparent"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            This is a {{ colors[i] +' '+ (i + 1) }}
          </div>
        </v-row>
      </v-sheet> -->
    
    
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name: "BannerComponent",
    data: () => ({
      
        // Image Height Must be over 700px for Parallax to show
        images:
        [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
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