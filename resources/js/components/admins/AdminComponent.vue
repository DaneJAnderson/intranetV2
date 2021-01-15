<template>
  <div>
        <h3 class="text-center mb-10">
          <span class="grey lighten-1 white--text rounded-lg p-2"> Administrator Panel </span></h3>

<v-row>

<v-col  v-for="(img,index) in this.adminIcons" :key="index" md="4" lg="3">

 <v-tooltip top :open-delay="600" color="grey">
      <template #activator="data">

        <router-link :to="img.link" >
        <v-img v-on="data.on" class="rounded-lg grey lighten-2 pl-3 pr-3"
        :lazy-src="url.PublicURL+img.img" contain
        :src="url.PublicURL+img.img"  
        max-width="200px" v-ripple="{ class: `amber--text` }"
        max-height="150px"        
        min-height="150px"        
        ></v-img>
        </router-link>

        </template> 
             <span>{{img.name}}</span> 
      </v-tooltip>

        <!-- <h5>{{ img.name  +' '+ index}} </h5> -->

</v-col>

</v-row>


 <!--  <v-btn>
      <router-link to="/admins/notice">
    Notice Board
      </router-link>
  </v-btn> -->
      
  </div>
</template>

<script>
import AdmnoticeComponent from './AdmnoticeComponent'
import { mapState } from 'vuex';

export default {

name: 'AdminComponent',
components: {
  AdmnoticeComponent,
},
computed: {

...mapState('adminStore',['adminIcons']),
...mapState('homeStore',['notices','url']),
    		
/* 		notices (){
			return this.$store.state.homeStore.notices;
		},
		url(){
			return this.$store.state.homeStore.url.StorageURL
		} */

},
mounted(){

}

}
</script>

<style>

</style>