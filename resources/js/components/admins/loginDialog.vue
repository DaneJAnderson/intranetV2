<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >


      <v-card>
        <v-card-title>
          <span class="headline amber--text">{{title}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
          
          <!-- -----  Username Field ----- -->
              <v-col cols="12">
                <v-text-field
                  label="Username*"
                  v-model="username"
                  required
                ></v-text-field>
              </v-col>

        <!-- -------- Password ------------ -->
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <h4 v-if="error" class="red--text text-center mb-2">**Incorrect Username or Password !</h4>
          <b class="blue--text">*Login using your desktop Credentials*</b>
        </v-card-text>

        <v-card-actions >
          <v-spacer></v-spacer>

          <!-- ------- Close Button ------- -->
          <v-btn
            color="amber lighten-2  white--text "
            class="mr-3"
            @click="dialog = false; "
          >
          
            Close
          </v-btn>

          <!-- ---------- Login --------- -->
          <v-btn
            color="green lighten-2 white--text"
            class="mr-3"
            @click="login();"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
      name: 'loginDialog',      
    data () {
        return{        
      dialog: false,  
      username: '',
      password: '',
      error:false,  
      mode: '',  
      route: '',
      title: '',
      ldap: '',

    }
    },

  methods:{
    openLogin(mode){
        this.dialog = true;
        this.mode = mode;
    if(mode == 'yearly'){
      this.title = 'COK USER';
      this.route = '/tools/forms';
      this.ldap = 'everybody';
    }
    else if(mode == 'admins'){
      this.title = 'COK ADMINISTRATOR';
      this.route = '/admins';
      this.ldap = "COK_bookings";
    }
        // console.log(val);
    },

    login(){

      // this.$emit('iLogin', { 'username':this.username, password:this.password}); send to toolsComponent

        // this.error = true;

      
      this.$store.dispatch("adminStore/POST_Login",{ldap:this.ldap, username:this.username, password:this.password})
      .then(() =>{
        let auth = this.$store.getters['adminStore/auth'];
        console.log(auth.status);
        if(auth.status){
          this.$router.push(this.route);    
        this.dialog = false;
        }

      } ).catch(err => console.log(err));

      
    },
  }


  }
</script>