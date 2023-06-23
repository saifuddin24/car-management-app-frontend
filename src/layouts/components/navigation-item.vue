<template>

  <navigation-child-item
    :title="props.nav.title"
    :prependIcon="props.nav.prepend_icon"
    :exact="props.nav.exact"
    :value="props.nav.value"
    :children="children"
    :rail="props.rail"
    v-if="hasChildren"
  />

  <v-list-item
      v-else
      v-bind="getAttrs"
      :title="props.nav.title"
      :prependIcon="props.nav.prepend_icon"
      :exact="props.nav.exact"
      :value="props.nav.value"
      density="compact"
  ></v-list-item>

</template>

<script setup lang="ts">

import {NavItem, SubNavItem} from "@/configs/index.ts";
import {computed} from "vue";
import NavigationChildItem from "@/layouts/components/navigation-child-item.vue";

export interface NavItemInterface {
  nav: NavItem|SubNavItem,
  rail: boolean,
  drawer: boolean,
  hoverItem: boolean
}

const props = defineProps<NavItemInterface>( );
const children = computed<SubNavItem[]>(():SubNavItem[] => {

  if( props.nav.children && Array.isArray(props.nav.children) ) {
    return props.nav.children
  }
  return [];

});

const hasChildren = computed<boolean>(():boolean => children.value.length> 0 );

const getAttrs = computed(():object => {

  const attrs = {};
    if( !hasChildren.value ) {
  }

  if( props.nav?.route ) {
    attrs.to = `/${props.nav.route.path}`;
  }

  return attrs;
});

</script>

<style scoped>

</style>
