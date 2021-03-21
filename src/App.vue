<template>
  <div>
    {{ galaxyStore.galaxies }}
    <button @click="addGalaxy">Hallo</button>
    <calendar v-model="cal">
      <template #header>Header Content</template>
    </calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import HelloWorld from "./app/components/HelloWorld.vue";
import Calendar from "primevue/calendar";
import { useStore } from "./app/store";
import Galaxy from "./domain/model/galaxy";
import { getModule } from "vuex-module-decorators";
import { GalaxyStore } from "./app/store/galaxy/galaxyModule";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Calendar,
  },
  setup() {
    const cal = ref(null);

    const store = useStore();

    const galaxyStore: GalaxyStore = getModule(GalaxyStore, store);
    galaxyStore.fetchGalaxies();

    function addGalaxy() {
      galaxyStore.addGalaxy("Hallo");
    }

    return { cal, galaxyStore, addGalaxy };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
