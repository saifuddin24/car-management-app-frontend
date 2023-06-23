<template>
  <v-sheet>

    <v-card-title class="border-b mb-4">
      About US
    </v-card-title>

    <v-card-text>
      About our Website<br>
      <pre>
        {{ props.appConfig }}
      </pre>

    </v-card-text>
  </v-sheet>

</template>

<script lang="ts" setup>

import {AppConfig} from "@/layouts/interfaces";

const props = defineProps<{
  appConfig: AppConfig;
}>();

</script>
