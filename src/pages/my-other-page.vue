<script lang="ts">
import OtherLayout from "../layouts/Other.vue";

export default {
  layout: OtherLayout,
};
</script>

<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <h1>My other page</h1>

    <button
      class="p-3 text-white bg-blue-400 border-2 border-blue-900"
      @click="() => count++"
    >
      Click Me: {{ count }}
    </button>
  </div>
</template>
