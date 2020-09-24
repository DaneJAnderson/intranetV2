<template>
  <div class="text-center">
      <!-- <v-app> -->
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Click me please
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="method">
          <v-list-item-title>Option 1</v-list-item-title>
        </v-list-item>
        <v-list-item disabled>
          <v-list-item-title>Option 2</v-list-item-title>
        </v-list-item>
        <v-list-item @click="method">
          <v-list-item-title>Option 3</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- </v-app> -->
  </div>
</template>

<script>
  export default {
    methods: {
      method () {
        // Perform an action
      },
    },
  }
</script>