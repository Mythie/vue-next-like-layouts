<script lang="ts" setup>
/**
 * AppView provides a wrapper around <RouterView /> allowing for the usage
 * of component level layouts.
 *
 * This was inspired by layouts in NextJS and avoids flashes of protected content
 * when navigating between pages.
 */

import type { Component, VNode } from "vue";

/**
 * Augments the `VNode` type allowing for the definition of a `layout` method
 */
type VNodeWithLayout = VNode & {
  type: VNode["type"] & {
    layout: Component;
  };
};

/**
 * Determines if a given VNode has a `layout` method defined on a component's
 * public instance where a component is available.
 */
const isVNodeWithLayout = (
  node: VNode | VNodeWithLayout
): node is VNodeWithLayout => {
  if (!node) {
    return false;
  }

  return typeof node.type === "object" && "layout" in node.type;
};

const getLayout = (node: VNode | VNodeWithLayout): Component | null => {
  if (isVNodeWithLayout(node)) {
    return node.type.layout;
  }

  return null;
};
</script>

<template>
  <RouterView v-slot="{ Component: RouteComponent }">
    <template v-if="!RouteComponent">
      <div></div>
    </template>

    <template v-else-if="isVNodeWithLayout(RouteComponent)">
      <component :is="getLayout(RouteComponent)">
        <component :is="RouteComponent" v-bind="$attrs"></component>
      </component>
    </template>

    <template v-else>
      <component :is="RouteComponent" v-bind="$attrs"></component>
    </template>
  </RouterView>
</template>
