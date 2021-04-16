<template>
  <div>
     <div  class="row primary mt-5 ml-n10 mr-n10 rounded" >

 
      <v-img class="mt-n15 ml-n16" 
        contain
        max-height="200"
        max-width="300"
        :src="url.PublicURL+'/images/suggestion-box.png'"
      ></v-img> 

    <v-spacer></v-spacer>
    <!-- <v-row justify="center"><h4 ><span class="suggestionHeading" >Suggestion Box</span></h4> -->
    <v-row justify="center"><h4 ><span class="suggestionHeading" >GREAT IDEAS</span></h4>
    <v-spacer></v-spacer>

          <!-- {{---------- Login Link ------------}} -->
    <v-btn depressed class="mr-5 mt-n9 transparent orange--text"><i>HR Signin</i></v-btn></v-row>

     
     <div class="row container-fluid col-sm-12">
     <div class="col-sm-5 col-lg-6 col-xs-8 responses">
    <!-- {{-- ------------------------------- Suggestions with Response --------------------------}} -->
     <div >    

       <table width="100%">

        <tr  v-for="(suggest,i) in this.suggestions.data" :key="i">           
              
        
       <td> <!------- Date Function to format datetime ------->
        <i style="font-size: 75%"> {{ getDateFormal(suggest.created_at) }} </i>
        
        <i style="font-size: 75%"> </i>

          <p class="suggestSub">
            <span><b> {{suggest.subject}}. </b></span> {{suggest.suggestion}} </p>      
        
          
            <!-- {{-------------------- Response  ------------------}} -->
        <div class="textarea1 col-xs-offset-1" :id="'textarea_'+suggest.id" >
          <span :id="'response_'+suggest.id" >{{suggest.response}}</span>

        <!-- <div class="textarea1 col-xs-offset-1" :id="'textarea_'+1" >
          <span :id="'response_'+1" >{{'A Response to the Suggestion'}}</span> -->
          
        </div>
        <hr style=" opacity: 0.2; background: black;"/>
        </td>

        </tr>
        <tr  > 
          
        
        <td> <!--{{------- Date Function to format datetime -------}} -->
        <i style="font-size: 75%"> {{ getDateFormal(new Date()) }} </i>
        <!-- <i style="font-size: 75%"> {{ 'date of Suggestion' }} </i> -->

          <p class="suggestSub">
            <span><b>How to submit my suggestion? </b></span> I would like to voice an opinion. </p>      
          
            <!-- {{-------------------- Response  ------------------}} -->
        <div class="textarea1 col-xs-offset-1"  >
          <span  >To submit a suggestion, simply fill out the fields on this page and click submit. 
            Be sure to add a topic in the subject field with regards to what your suggestion is about. Thank you.</span>
          
        </div>
        <hr style=" opacity: 0.2; background: black;"/>
        </td>

        </tr>

       </table>       
   <div class="text-center">
    <v-pagination
      v-model="currentPage"
      :length="lastPage"
      :total-visible="7"
    ></v-pagination>
    </div>

     </div><br/><br/>
     </div>

     <!-- {{-- --------------------------------------------- Forms Fields  ----------------------------------------- --}} -->
<v-spacer></v-spacer>
<div class="col-sm-4 col-xs-10 col-sm-offset-0 float-right col-xs-pull-1 col-sm-pull-0">
    <form name="suggestForm" style="" >

      <div class="">    
          <label for="fname" class="text-white" style="padding: 5px;"><h3>Subject</h3></label>        
          <input type="text" v-model="subject" class="form-control" id="fname" name="firstname" placeholder="What is this about ?" required>        
      </div><br/>      
   
      <div class="">      
          <label for="subject" class="text-white" style="padding: 5px;"><h3>Suggestion</h3></label>       
          <textarea id="subject" v-model="suggestion" class="form-control" name="subject" placeholder="Write your Suggestion.." style="height:200px"  required></textarea>        
      </div><br/>

      <div style="margin-right: 0px;" class="row float-right">
        <input class="btn btn-success " @click.stop="getSuggestion()" type="submit" value="Submit">
        
      </div>
      <br/><br/><br/><br/>

      </form>

</div>     

  </div>
     </div>

<!-- ----------------------  SnackBar ----------------- -->
     <v-snackbar
    top
      v-model="snackbar"
      :timeout="timeout"
      color="lime--text"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="amber"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
import { mapState,  mapActions, mapGetters, mapMutations } from 'vuex';  

export default {
  name: 'SuggestboxComponent',
  data: ()=>({
    subject: '',
    suggestion: '',
    count: 1,
    slideIndex: 0,
    snackbar: false,
      text: 'Your suggestion was successfully posted !!',
      timeout: 6000,
  }),
 
  mounted()
  {
    this.$store.dispatch("toolsStore/GET_Suggestions",1); 

  },
  

    computed: {

        ...mapGetters('toolsStore', ['suggestions','url']), // get data from store

        currentPage: { 
            get(){
                
                return this.suggestions.current_page
            },
            set(value){
                    this.count=2;
                    
                // this.SET_CURRENTPAGE(value);
                this.$store.commit("toolsStore/SET_CURRENTPAGE",value)
            }
        },

        lastPage: {
            get(){
                return this.suggestions.last_page }
        }
        

    },

    watch: { // Watch for Changes in variables and computed values

        currentPage(newValue, oldValue) {
          
         /*  if (this.count>1){

              var gt = document.getElementById("galleryTop");
              gt.click(); 
            //   console.log(this.count);
            }
              this.count=2;
           try{ window.scrollFunc(); }catch(e){} */

            setTimeout(()=> this.paginatePage(newValue), 1);
        },
         
    },

    methods: {

        ...mapMutations('toolsStore', ['SET_CURRENTPAGE']), // set data in store

        paginatePage(pageNum) { this.$store.dispatch("toolsStore/GET_Suggestions",pageNum); },


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

    },

    getSuggestion(){

      if (this.subject!=''&&this.suggestion!=''){
      let data = {'subject': this.subject, 'suggestion': this.suggestion};
      this.$store.dispatch("toolsStore/POST_Suggestion",data); 
      this.subject = '';
      this.suggestion = '';
      this.snackbar = true;
        }

    }

    },
beforeDestroy() {
                      
    window.topsfunc();                
},
}
</script>

<style scoped>


.responses {

  margin-left: 200px;
  background: white;
  border-radius: 10px;

}

.textarea1 {

   width:92%;
   max-height: 100%;
    background: #dce9fd;
    padding: 15px;
    border-radius: 7px;
    /* font-style: italic; */
    margin-bottom: 5%;
    font-weight: bold;
}

td { color:black;}

.signin {
  color: #ff944d !important;
  
}

.suggestSub {

  width:100%; color:black !important; border-radius: 5px;
   padding: 15px 10px 10px 10px; background: #f1eff1;
}

.signin:hover {
  color: orange !important;

}


.suggestionHeading {
  background:white;border-radius: 10px;
   padding: 10px;border: 1px solid #3385ff;color:orange;
   }

</style>