<template>

  <v-app class="bg-blue-grey-lighten-5">
    <app-header v-model:drawer="drawer"></app-header>
    <navigation-drawer v-model="drawer" v-model:rail="rail"></navigation-drawer>
    <v-main style="min-height: 400px;" class="bg-grey-lighten-1">
      <v-sheet color="grey-lighten-3" class="align-start pa-4 fill-height">
        <ViewComponent :app-config="appConfig"
                       :loading="loading"
                       :disabled="disabled"
                       class="elevation-6 fill-height"/>
      </v-sheet>
    </v-main>
  </v-app>

</template>

<script lang="ts" setup>

  import {computed, ref, watch} from "vue";
  import {useRoute} from "vue-router";
  import DefaultView from './DefaultView.vue';
  import TableView from './TableView.vue';
  import FormView from './FormView.vue';
  import NavigationDrawer from "@/layouts/components/drawer.vue";
  import AppHeader from "@/layouts/components/header.vue";
  import {AppConfig} from "@/layouts/interfaces";

  const drawerOpen = sessionStorage.getItem('__drawer' ) ?? 'open';
  const railClosed = sessionStorage.getItem('__rail' ) ?? 'open';
  const location = useRoute();
  const drawer = ref<boolean>( drawerOpen === 'open' );
  const rail = ref<boolean>( railClosed==='open' );

  const appConfig = ref<AppConfig>({
    drawer: drawer.value,
    rail: rail.value,
  });

  const loading = ref<boolean>(true);
  const disabled = ref<boolean>(true);

  watch( drawer,(open: boolean) => {
    appConfig.value.drawer = open;
    sessionStorage.setItem( '__drawer', open ? 'open':'closed')
  })

  watch( rail,(open: boolean) => {
    appConfig.value.rail = open;
    sessionStorage.setItem( '__rail', open ? 'open':'closed')
  })

  setTimeout(() => {
    loading.value = false;
    disabled.value = false;
  }, 4000)

  const ViewComponent = computed<any>(() => {
    switch(location.meta.view) {
      case 'table':
        return TableView;
      case 'form':
        return FormView;
      default:
        return DefaultView
    }
  })


</script>
