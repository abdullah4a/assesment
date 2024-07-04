<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      label="Search"
      prepend-inner-icon="fas fa-search"
      rounded
      flat
      variant="solo-filled"
    ></v-text-field>
    <v-spacer></v-spacer>
    <div class="pe-4">
      <v-btn icon>
        <v-icon>fas fa-cog</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>fas fa-bell</v-icon>
      </v-btn>
      <v-avatar>
        <v-img
          alt="John"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
        ></v-img>
      </v-avatar>
    </div>
  </v-app-bar>
</template>

<script setup>
// Imports
import { defineProps, ref } from "vue";

// Props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
// Properties
const title = ref(props.title);
const darkMode = ref(false);

// Methods
</script>

<style scoped></style>
