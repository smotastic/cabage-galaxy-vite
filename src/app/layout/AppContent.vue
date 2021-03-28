<template>
  <div class="container shadow-lg mx-auto bg-white pt-2 md:pt-0 mt-28 md:mt-16">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-gray-200 rounded-lg h-96">
            <slot></slot>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
export default defineComponent({
  name: "AppContent",
});
</script>

<style></style>
