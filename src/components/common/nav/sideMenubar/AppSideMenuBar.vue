<template>
  <v-navigation-drawer :expand-on-hover="false" permanent>
    <h1>BDash.</h1>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <template v-for="(item, index) in menuList" :key="index">
        <v-list-item
          :class=" isActiveRoute(item.path) ? 'border-right-primary': ''"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          variant="plain"
          @click="goto(item.path)"
        ></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menuList } from "@/utils/enum/menuList";

export default defineComponent({
  name: "AppSideMenuBar",
  data() {
    return {
      menuList
    };
  },
  methods: {
    goto(path: string) {
      this.$router.push(path);
    },
    isActiveRoute(path: string){
      return this.$route.path === path;
    }
  },
});
</script>

<style scoped>
.v-list-item {
    align-items: center !important;
    display: grid !important;
    flex: none !important;
    outline: none !important;
    max-width: 100% !important;
    padding: 4px 16px !important;
    position: relative !important;
    text-decoration: none !important;
    border-radius: 8px; /* Rounded corners */
    margin: 8px 0; /* Margin between list items */
}
  .border-right-primary::before {
    content: "";
    position: absolute;
    left: -12px;
    top: 0;
    bottom: 0;
    width: 7px; /* Width of the border */
    border-radius: 10px;
    background-color: blue; /* Color of the border */
}
.v-list-item--active{
  color: blue;
}
</style>
