<template>
  <div>
    {{ testmodule.galaxies }}
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
import { TestmoduleStore } from "./app/store/testmodule";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Calendar,
  },
  setup() {
    const cal = ref(null);

    const store = useStore();

    const test: Ref<Galaxy[]> = ref([]);

    const testmodule: TestmoduleStore = getModule(TestmoduleStore, store);
    testmodule.fetchItems();

    return { cal, testmodule };
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
