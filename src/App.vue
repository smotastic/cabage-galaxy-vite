<template>
  <div>
    <app-navbar />
    <app-content>Content</app-content>
    <!-- {{ galaxyStore.galaxies }}
    <button @click="addGalaxy">Hallo</button>
    <calendar v-model="cal">
      <template #header>Header Content</template>
    </calendar> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import HelloWorld from "./app/components/HelloWorld.vue";
import Calendar from "primevue/calendar";
import { useModule } from "./app/store";
import { getModule } from "vuex-module-decorators";
import { GalaxyStore } from "./app/store/galaxy/galaxyModule";
import AppNavbar from "./app/layout/AppNavbar.vue";
import AppContent from "./app/layout/AppContent.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Calendar,
    AppNavbar,
    AppContent,
  },
  setup() {
    const cal = ref(null);

    const galaxyStore: GalaxyStore = useModule(GalaxyStore);

    galaxyStore.fetchGalaxies();

    function addGalaxy() {
      galaxyStore.addGalaxy("Hallo");
    }

    return { cal, galaxyStore, addGalaxy };
  },
});
</script>

<style></style>
