<template>

  <div>
    <div class="text-center">
      <v-pagination
        v-model="modelValue.page"
        :length="modelValue.pageCount"
        :total-visible="3"
      ></v-pagination>
    </div>
  </div>

</template>

<script setup lang="ts">

  import {computed} from "vue";

  import {useTableView} from "@/views/cars/table-view";

  interface TablePropsInterface {
    page:number,
    itemsPerPage:number,
    pageCount: number,
  }

  const props = defineProps<{
    modelValue:TablePropsInterface,
    page:number,
    itemsPerPage:number,
    pageCount: number,
  }>()

  const emit = defineEmits<{(e:'update:page', value:number)}>();

  const page = computed<number>({set(value: number){
      emit('update:page', value)
    }
    ,get():number{
      return props.page;
    }}
  )

</script>

<style scoped>

</style>
