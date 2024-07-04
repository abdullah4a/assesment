<template>
  <div>
    <v-app>
      <v-card class="h-100">
        <v-layout class="h-100">
          <!-- Side Menu Bar -->
           <app-side-menu-bar />
          <v-main>
            <router-view />
          </v-main>
        </v-layout>
      </v-card>
    </v-app>
  </div>
</template>

<script setup lang="ts">
</script>
<style>
.h-100{
  height: 100vh;
}
</style>