<template>
  <v-card>
    Username: Hello... {{props.loading}} {{props.a}}
  </v-card>
</template>

<script setup lang="ts">


import {DefaultViewPropsInterface} from "@/layouts/interfaces";

const props = defineProps<DefaultViewPropsInterface>();


</script>

<style scoped>

</style>
