<template>
  <v-data-table
    :headers="headers"
    :items="this.suggestions"
    sort-by="created_at"
    :sort-desc="[true]"
    class="elevation-1" 

    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="subject"
    show-expand

    :search="search"
     
  >
  <!-- :items="desserts" -->
    
      <!-- :options.sync="options"
      :server-items-length="totalDesserts"
      :loading="loading" -->
      
    <template v-slot:top>   
   
      <v-toolbar
        flat class="mb-10"
      >        

        <v-dialog
          v-model="dialog"
          max-width="800px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary--text"
              small
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              <b>Download</b>
            </v-btn>
          </template>           

          <v-card>
            <v-card-title>
              <span class="headline orange--text ">{{ formTitle }}</span>
            </v-card-title>

<!-- ------------------------  Edit Suggestion ----------------------- -->
            <v-card-text>
              <v-container>
                <v-row id="suggestionEdit">
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <v-select
                  :items="[{text:'Active',value:1},{text:'InActive', value:2}, {text:'Disabled', value:3}]"                  
                   v-model="editedItem.status"
                   label="Status"
                  ></v-select>

                    <!-- <v-text-field
                      v-model="editedItem.status"
                      label="Status"
                    ></v-text-field> -->
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    offset="2"
                    
                  >

                     <v-textarea
                  name="Subject"
                  label="Subject"                  
                  v-model="editedItem.subject"                  
                  ></v-textarea>

                    <!-- <v-text-field
                      v-model="editedItem.subject"
                      label="Subject"
                    ></v-text-field> -->
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >

                   <v-textarea
                  name="Suggestion"
                  label="Suggestion"
                  v-model="editedItem.suggestion"                  
                  ></v-textarea>

                    <!-- <v-text-field
                      v-model="editedItem.suggestion"
                      label="Suggestion"
                    ></v-text-field> -->
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >

                   <v-textarea
                  name="Response"
                  label="Response"
                  v-model="editedItem.response"                  
                  ></v-textarea>

                    <!-- <v-text-field
                      v-model="editedItem.response"
                      label="Response"
                    ></v-text-field> -->
                  </v-col>
                
                  
                </v-row>
              </v-container>
            </v-card-text>

  <!-- -------------------------------------------------------------------- -->

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

<v-spacer></v-spacer>

        <v-toolbar-title><b class="orange--text ">Great Ideas</b></v-toolbar-title>

<!-- <v-divider class="mx-4" inset vertical ></v-divider> -->
        

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>



        
<!-- ---------------------- Single Expander --------------------- -->

 <v-spacer></v-spacer>

  <!-- --------------------- Search Field ------------------- -->
<v-col md="3" cols='6'>
        <v-text-field
        v-model="search"
        :append-icon="icons.mdiMagnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
</v-col>

        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
<!-- --------------------------------- -->
      </v-toolbar>

    </template>



<!-- -------------------- SLot Subject ------------------------ -->

    <template  v-slot:[`item.subject`]="{ item }">

           <p class="textWrap" >{{ item.subject.length>200?item.subject.substr(0,200)+'...':item.subject }}</p> 

            <!-- <v-chip ></v-chip> -->
          
    </template>


<!-- -------------------- SLot Status ------------------------ -->

    <template v-slot:[`item.status`]="{ item }">
            <v-chip
            
            :class="getColor(item.status)"
            dark 
            >
            <!-- -->
            {{ getStatus(item.status) }}
          </v-chip>
    </template>

 

      <!-------------  Edit & Delete Section ----------->

    <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-4"
        @click="editItem(item)"
        color="amber"
      >       
        {{icons.mdiPencil}}
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
        color="red"
      >       
        {{icons.mdiDelete}}
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
<!-- -------------- End Edit & Delete --------------- -->


<!-- ------------------------------ Slot Subject Expandable Like Accordian ------------------- -->

    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length" >
       
         <v-card flat class="mr-15 mt-2 mb-2 pl-10 pr-10 pt-5 pb-5 text-start grey lighten-5 ">
            <b class="subjectFont">{{ item.subject }}</b> <p class="text-justify"> {{item.suggestion }} </p> </v-card>

          <v-card v-if="item.response" flat class="ml-15 mt-2 mb-2 pl-10 pr-10 pt-5 pb-5 light-blue lighten-5">
             <p class="text-justify subjectFont font-weight-bold"> {{item.response }} </p>  </v-card>
         
      </td>
    </template>
<!-- ------------------------------------------------------------------------------ -->

  </v-data-table>
</template>

<script>
import { mdiHome, mdiPencil, mdiDelete,mdiMagnify } from '@mdi/js';
import { mapState,  mapActions, mapGetters, mapMutations } from 'vuex';  

export default {
    name:'suggestionBoxComp',
//   data: () => ({
    data(){return{
        
      // totalDesserts: 0,       
        loading: true,
        options: {},
        search:'',

        expanded: [],
        singleExpand: false,

      dialog: false,
      dialogDelete: false,
      icons:{mdiPencil, mdiDelete,mdiMagnify},
      headers: [
        /* {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        }, */
        { text: 'Date', value: 'created_at', width: '150px' },
        { text: 'Subject', value: 'subject' },
        { text: 'Status', value: 'status', width: '150px' },
        // { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false, width: '100px' },
        { text: '', value: 'data-table-expand' },
      ],
      // desserts: [],
      editedIndex: -1,
      editedItem: {
        hradmin: 'unknown',
    /*     name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0, */
      },
    /*   defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      }, */
        }},
    // }),

    mounted(){

    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');
    const username = sessionStorage.getItem('username');
    // const token = localStorage.getItem('token');
    // const username = localStorage.getItem('username');
    const auth = this.$store.getters['adminStore/auth'];

    if((!token&&!auth.token) || (!username&&!auth.username)){
      // this.$router.replace('/');
    }
      if(username){
        this.editedItem.hradmin = username;
      }

       this.$store.dispatch("suggestionStore/GET_Suggestions"); 

    },

    computed: {

      ...mapGetters('suggestionStore', ['suggestions','url']),

      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Suggestion'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    methods: {

      ...mapActions('suggestionStore', ['POST_Response','DELETE_Suggestion']),
        // paginatePage(pageNum) { this.$store.dispatch("galleryStore/GET_Notices",pageNum); },

      
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


      getColor (status) {
        if (status === 3) return 'red'
        else if (status === 2 ) return 'orange'
        else return 'green pr-4 pl-4'
      },

      getStatus(status){

        if (status === 3) return 'Disabled'
        else if (status === 2 ) return 'inActive'
        else return 'Active'

      },
      
      editItem (item) {
        this.editedIndex = this.suggestions.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.suggestions.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
       
      },

      deleteItemConfirm () {
        this.suggestions.splice(this.editedIndex, 1)
        this.closeDelete()

        this.DELETE_Suggestion(this.editedItem);
         
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.suggestions[this.editedIndex], this.editedItem)
        } else {
          this.suggestions.push(this.editedItem)
        }
        this.close()

          this.POST_Response(this.editedItem);
        
      },
    },

}
</script>

<style >



.subjectFont {

  /* font-family: Arial, Helvetica, sans-serif; */
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

table thead tr th {
  font-size: 14px  !important;
}
/* table.v-table tbody tr td {
  font-size: 24px;
} */
#suggestionEdit textarea{

  margin-top: 10px !important;
  padding: 5px !important;
  background: rgb(245, 245, 245);
  /* border-radius: 7px; */

}

</style>