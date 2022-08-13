<script lang="ts" setup>
import { RouterLink } from "vue-router";
import AppView from "./AppView.vue";

import "./App.css";
</script>

<template>
  <div>
    <AppView />

    <div class="fixed bottom-0 left-0 w-full">
      <div class="flex items-center justify-center w-full py-3 gap-x-4">
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/my-other-page">Other Page</RouterLink> |
        <RouterLink to="/my-page-without-a-layout">
          Page Without Layout
        </RouterLink>
      </div>
    </div>
  </div>
</template>
