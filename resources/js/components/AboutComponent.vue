<template>
  <div>
      <h2 class="text-center pb-15"><b> About US </b></h2>

      <v-row>
        <v-col md='6'>
      
      <v-img class="shadow rounded"  
        :src="url.PublicURL+'/images/GsBZBH7Qc1.jpg'"
      ></v-img> 
       
        </v-col>
        <v-col md='6' class="grey lighten-4 rounded">
          <p class="text-justify pr-15">
            COK Sodality Co-operative Credit Union Ltd. (COK), formerly City of Kingston Co-Operative Credit Union Ltd., was incorporated in October 1967 to serve the financial needs of its members in Kingston and St. Andrew. Over the years COK has evolved into a solid, safe and financially secure, financial services institution well known for its high level of innovativeness in the Credit Union Movement.</p>
<p class="text-justify pr-15">
COK is headquartered in Kingston; serving members across Jamaica through its network of Branches in Kingston & St. Andrew, St. Catherine, Mandeville and Montego Bay. COK also serves its members who reside overseas in North America, the UK, Grand Cayman, and other parts of the Caribbean.</p>
<p class="text-justify pr-15">
COK provides a variety of services to meet the personal or business needs of its members through its branch network, ATM services, and multi-service call center, which manages both telephone and online inquiries.</p>
<p class="text-justify pr-15">
COK manages a multi-billion portfolio of over J$6.2B in savings and J$7.3BM in assets for its approximately 245,000 members. COK currently enjoys the largest membership base among the credit unions in Jamaica and the English Speaking Caribbean..</p>
<p class="text-justify pr-15">
COK’s workforce consists of highly knowledgeable and experienced staff , led by Chief Executive Officer, Ambassador Aloun Ndombet- Assamba, JP. who reports to the Board of Directors led by President, Mr. Steadman Pitterson. The Board of Directors appoints other non-statutory committees from among membership and staff. COK’s strength is its members, who, at the Annual General Meetings AGM), elects the Board, Supervisory and Credit Committees, and who also influence decisions on the direction and activities of the credit union. COK works in conjunction with other Credit Unions in Jamaica, the Caribbean and across the globe; sharing operational best practices.
          </p>
        </v-col>

      </v-row>
  </div>
</template>

<script>
export default {
    name: 'AboutComponent',
    computed:{

      url(){
        return this.$store.getters['homeStore/url'];   // Square Brackets for getters    
      }
    }

}
</script>

<style>

</style>