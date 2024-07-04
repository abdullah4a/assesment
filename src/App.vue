<script lang="ts">
export default {
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      return this.$route.meta.layout || 'DefaultLayout';
    },  getTheme(){
            return localStorage.getItem('theme');
        }
  },
  created() {
    // that will set initial theme for app in Local storage
    localStorage.setItem('theme', "light")
  },
};
</script>

<template>
    <v-theme-provider :theme="getTheme">
      <component :is="layout" />
    </v-theme-provider>
</template>
<style>
.v-card{
  border-radius: 20px !important;
}
</style>