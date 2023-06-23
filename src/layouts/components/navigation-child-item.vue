<template>

  <v-menu :open-on-hover="true" location="end" v-if="props.rail" >

    <template v-slot:activator="{ props:menuProp }">
      <v-list-item
        :prepend-icon="props.prependIcon"
        color="primary"
        v-bind="menuProp"
        :title="props.title"
      ></v-list-item>
    </template>

    <v-list dencity="compact" class="pa-2 ml-2" elevation="2">
        <v-list-item  class="text-left text-blue-darken-3 border-b border-dashed bg-green-accent-2"
                      density="compact" :title="props.title"
                      v-bind="getAttrs"
        />
        <navigation-item
          v-for="child in children"
          :key="child.title"
          :nav="child"
          :hover-item="true"
        ></navigation-item>
    </v-list>

  </v-menu>

  <v-list-group
     v-else
      :value="props.value"
      v-bind="getAttrs"
  >

    <template v-slot:activator="{ props:listProps }">

        <v-list-item
          v-bind="listProps"
          :title="props.title"
          :prepend-icon="props.prependIcon"
          :value="props.value"
        >
        </v-list-item>

    </template>

    <navigation-item
      v-for="child in children"
      :key="child.title"
      :nav="child"
    ></navigation-item>

  </v-list-group>

</template>

<script setup lang="ts">

import {NavItem, SubNavItem} from "@/configs";
import {computed} from "vue";
import NavigationItem from "@/layouts/components/navigation-item.vue";

interface NavItemPropsInterface extends NavItem{
  rail: boolean,
  drawer: boolean,
  prependIcon: string
}


const props = defineProps<NavItemPropsInterface>( );
const children = computed<SubNavItem[]>(():SubNavItem[] => {
  if( props.children && Array.isArray(props.children) ) {
    return props.children
  }
  return [];
});

const getAttrs = computed(():object => {

  const attrs = {};
  if( props.route ) {
    attrs.to = `/${props.route.path}`;
  }

  return attrs;
});

</script>

<style scoped>

</style>
