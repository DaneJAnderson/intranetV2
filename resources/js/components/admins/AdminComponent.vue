<template>
  <div>
      <h1>Hello From Administrator</h1>

<v-row>

<v-col  v-for="(img,index) in this.adminIcons" :key="index" md="4" lg="3">

        <router-link :to="img.link" >
        <v-img class="rounded-lg grey lighten-2 pl-3 pr-3"
        :lazy-src="url.PublicURL+img.img" contain
        :src="url.PublicURL+img.img"  
        max-width="300px" v-ripple="{ class: `` }"
        max-height="300px"        
        ></v-img>
        </router-link>

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