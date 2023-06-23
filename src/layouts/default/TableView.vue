<template>

  <v-card color="white">

    <router-view name="top" v-model:page="page"></router-view>
    <v-card-title class="border-b d-flex justify-space-between">
      <div>Hello Table</div>
      <div>
        <v-btn color="primary" density="compact" icon="mdi-reload" variant="text"/>
      </div>
    </v-card-title>

    <v-card-title class="border-t mt-4 d-flex justify-space-between">
      <div>
        <v-btn color="primary" size="small" variant="tonal" icon="mdi-plus"/>
      </div>

      <v-sheet>
        <v-select clearable chips label="Categories" placeholder="select category to filter" multiple
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  variant="outlined"
                  density="compact"
        >

        </v-select>
      </v-sheet>

      <div class="w-25">
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </div>

    </v-card-title>

    <v-data-table
      v-model:page="page"
      :headers="headers"
      density="compact"
      :items="desserts"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1  fill-height border-t"
      multi-sort
      :search="search"
    >
    </v-data-table>

<!--    <router-view v-bind="tableProps" v-model="tableProps"></router-view>-->

  </v-card>
</template>

<script setup lang="ts">

  import {computed, ref} from "vue";
  import {dataTableItems} from "@/layouts/dummy/data";
  import { VDataTable } from 'vuetify/labs/VDataTable'
  import {useRoute, useRouter} from "vue-router";
  const desserts = ref(dataTableItems);

  const page = ref( 3);
  const itemsPerPage = ref( 5);
  const search = ref<string>( '');

  const currentRoute = useRoute();

  const headers = ref<any>([
    {
      align: 'start',
      key: 'name',
      sortable: false,
      title: 'Dessert (100g serving)',
    },
    { title: 'Calories', key: 'calories' },
    { title: 'Fat (g)', key: 'fat' },
    { title: 'Carbs (g)', key: 'carbs' },
    { title: 'Protein (g)', key: 'protein' },
    { title: 'Iron (%)', key: 'iron' },
  ]);

  const pageCount  = computed(() => {
    return Math.ceil(desserts.value.length / itemsPerPage.value )
  });


  const hasNamedComponent = ( component_name ):boolean =>{
    const components = currentRoute.matched.find(r=>r.name===currentRoute.name)
    if( components ) {
      return typeof components[component_name] != 'undefined'
    }

    return false;
  }
  const tableProps = ref({
    page,
    itemsPerPage,
    pageCount,
  });

</script>

<style scoped>

</style>
