<template>
  <div>
    {{ test }}
    <calendar v-model="cal">
      <template #header>Header Content</template>
    </calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "./app/components/HelloWorld.vue";
import Calendar from "primevue/calendar";
import { useStore } from "./app/store";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Calendar,
  },
  setup() {
    const cal = ref(null);

    const store = useStore();

    const test = ref(store.state.testmodule.usecase);

    return { cal, test };
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
