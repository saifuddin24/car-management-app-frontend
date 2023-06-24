<template>

  <v-card color="white">
    <router-view name="top" v-model:page="page"></router-view>

    <v-card-title class="border-b d-lg-flex justify-space-between align-center">
      <div>
        <div>
          Hello Table
        </div>

        <div class="pl-0 d-inline-block text-subtitle-2 text-wrap text-light-blue-lighten-2">
          Hello, This is your car revenue table. All of your  car revenues here. You can add a new revenue by clicking plus icon
        </div>
      </div>

      <div class="d-none d-lg-block">
        <v-btn color="primary" size="small" icon="mdi-reload" variant="tonal"/>
      </div>

    </v-card-title>

    <v-card-subtitle>
      <v-breadcrumbs :items="['Home','Car','Revenues']" divider="&raquo;" class="pl-0"></v-breadcrumbs>
    </v-card-subtitle>

    <v-card-title class="d-flex flex-column flex-lg-row justify-space-between align-lg-end" style="gap: 1rem">

      <div class="order-3 order-lg-0 d-flex justify-space-between align-center">
        <v-btn color="primary" size="small" variant="elevated" icon="mdi-plus"/>
        <div style="max-width: 100%; min-width: 180px" class="order-0 d-block d-lg-none">
          <v-text-field
            v-model="search"
            append-inner-icon="mdi-magnify"
            density="comfortable"
            label="Search"
            placeholder="Type anything to search"
            hide-details
          ></v-text-field>
        </div>
      </div>

      <v-sheet color="order-2  order-lg-1 d-lg-flex align-end" style="gap: 0.5rem">
        <v-select multiple clearable chips
                  label="Categories"
                  placeholder="select category to filter"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  density="compact"
                  style="min-width: 200px"
                  hide-details
        >

        </v-select>

        <v-select multiple clearable chips
                  label="Categories"
                  placeholder="select category to filter"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  density="compact"
                  style="min-width: 200px"
                  hide-details
        >

        </v-select>
        <v-select multiple clearable chips
                  label="Categories"
                  placeholder="select category to filter"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  density="compact"
                  style="min-width: 200px"
                  hide-details
        >

        </v-select>

      </v-sheet>

      <div style="max-width: 100%; min-width: 200px" class="order-0  order-lg-2 d-none d-lg-block">
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          density="comfortable"
          label="Search"
          placeholder="Type anything to search"
          hide-details
        ></v-text-field>
      </div>

    </v-card-title>

    <v-data-table
      v-model:page="page"
      :headers="headers"
      density="comfortable"
      :items="desserts"
      :items-per-page="itemsPerPage" hide-default-footer
      class="elevation-1 fill-height border-t"
      multi-sort
      :search="search"
      :fiexed-header="true"
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
