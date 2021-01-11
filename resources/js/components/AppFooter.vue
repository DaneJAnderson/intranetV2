<template>
    <div class="mt-15">   

       
  <v-footer
    dark
    class="grey darken-4"
  >
    <v-card
      flat
      tile
      class="grey darken-4 white--text text-center "
    >
      <v-card-text>
        
        <v-btn
          v-for="(icon,i) in icons"
          :key="i"
          class="mx-4 white--text"
          icon
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>

            <v-divider></v-divider>
        
      </v-card-text>


    <v-row >
    <v-col offset="1" cols="4" class="pl-10 pt-5"  align="start"
      justify="start">
        <h3>COK Sodality <br/>Co-operative Credit Union Ltd</h3>
      <!-- <v-card-text class="white--text pt-0 text-left "> -->
    <div>
       COK Sodality Co-operative Credit Union Ltd. (COK), formerly City of Kingston Co-Operative Credit Union Ltd., was incorporated in October 1967 to serve the financial needs of its members in Kingston and St. Andrew.
    </div>
      <!-- </v-card-text> -->

    </v-col>

    <v-col offset="3" cols="4" align="start"
      justify="start" class="">

      		
						<h4>Contact <span>Information</span></h4>					

								<div class="address-right">
									<h6>Phone Number</h6>
									<p>
                  <v-icon size="24px">{{ this.contact.phone }}</v-icon> 1-876-960 - I CAN (4226)
                  </p>			
							</div>							
		
								<div class="address-right">
									<h6>Email Address</h6>
									<p><v-icon size="24px" color="white">{{ this.contact.email }}</v-icon> Email :<a href="mailto:contactus@cokcu.com">
                     contactus@cokcu.com</a></p>
								</div>						

								<div class="address-right">
									<h6>Location</h6>
									<p>
									<v-icon size="24px">{{ this.contact.map }}</v-icon>	66 Slipe Road, KIngston 5, Jamaica.
									</p>
								</div>	
					

    </v-col>


    </v-row>

      <v-divider></v-divider>

      <v-card-text class="white--text mb-15">
        {{ new Date().getFullYear() }} &copy; <strong>COK Sodality Co-Operative Credit Union LTD. Designed and Developed by <a href="mailto:danderson@cokcu.com">Dane J. Anderson.</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>


    </div>
</template>

<script>
import { mdiFacebook,
        mdiTwitter,
        mdiLinkedin,
        mdiInstagram,mdiPhone, mdiEmail, mdiMapMarkerOutline,  } from '@mdi/js'

export default {
    name: 'FooterComponent',
     data: () => ({
      icons: [
       {icon: mdiFacebook, link:'https://www.facebook.com/coksodality/'} ,
       {icon: mdiTwitter, link:''} ,
       {icon: mdiLinkedin, link:''},
       {icon: mdiInstagram, link:'https://instagram.com/cok_sodality'},
      ],
      contact: {phone: mdiPhone, email: mdiEmail, map: mdiMapMarkerOutline}
    }),

    mounted(){
      // console.dir(this.icons)
    }
}
</script>
