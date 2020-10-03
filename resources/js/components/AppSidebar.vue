<template>
    <div>
        
  <v-navigation-drawer
      app
      permanent     
      clipped     
      hide-overlay 
      :style="`margin-top: ${$vuetify.application.top+70}px`"
      :value="true"
      disable-resize-watcher
      disable-route-watcher    
      height="85vh" 
    >

  <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
        
    </div>
</template>
<script>

export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
   
}
</script>
<style scoped>
.v-navigation-drawer {
    position: relative !important;
}
</style>