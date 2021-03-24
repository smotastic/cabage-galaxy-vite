<template>
  <div>
    <nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-12">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                  href="#"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Dashboard</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >Dashboard</a
          >
        </div>
      </div>
    </nav>
    <div
      class="container shadow-lg mx-auto bg-white pt-2 md:pt-0 mt-28 md:mt-16 h-screen"
    >
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div
              class="border-4 border-dashed border-gray-200 rounded-lg h-96"
            ></div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>

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
