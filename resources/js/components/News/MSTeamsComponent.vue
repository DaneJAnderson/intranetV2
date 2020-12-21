<template>
  <div class="mt-5 grey lighten-4 rounded-lg brown--text" >
     <v-row >

<v-col  align="center" class="pt-10 pb-10 " cols="12">
    <h2>How to Schedule a Meeting in Microsoft Teams? One</h2>
<video width="60%"  controls controlsList="nodownload">
    <source :src="url.StorageURL+'videos/How_to_Schedule_Meetings_Microsoft_Teams.mp4'" type="video/mp4">    
</video>
</v-col>
 
<v-col align="center" class="pt-10 pb-10" cols="12">
<h2>How to Schedule a Meeting in Microsoft Teams? Two</h2>
<video width="60%"  controls controlsList="nodownload">
    <source :src="url.StorageURL+'videos/How_to_Schedule_in_Microsoft_Teams.mp4'" type="video/mp4">    
</video>
</v-col>


<v-col align="center" class="pt-10 pb-10" cols="12">
<h2>How to join a Microsoft Teams meeting? One</h2>
<video width="60%"  controls controlsList="nodownload">
    <source :src="url.StorageURL+'videos/How_to_Join_a_Microsoft_Teams_Meeting_1.mp4'" type="video/mp4">    
</video>
</v-col>

<v-col align="center" class="pt-10 pb-10" cols="12">
<h2>How to join a Microsoft Teams meeting? Two</h2>
<video width="60%"  controls controlsList="nodownload">
    <source :src="url.StorageURL+'videos/How_to_join_a_Microsoft_Teams_meeting.mp4'" type="video/mp4">    
</video>
</v-col>

     </v-row>

  </div>
</template>

<script>
export default {
    name: 'msteamsComponent',
    computed:{
        url(){
            return this.$store.getters['newsStore/url'];
        }
    }

}
</script>

<style>

</style>