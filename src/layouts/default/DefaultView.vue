<template>
  <v-card color="white" class="fill-height position-relative" :loading="loading" :disabled="disabled">

    <v-overlay v-model="loading" :contained="true" class="align-center justify-center">
      <v-progress-circular indeterminate></v-progress-circular>
    </v-overlay>
    <router-view v-bind="props" v-if="!loading" ></router-view>
    <div>
      <pre>
        {{ props}}
      </pre>
    </div>
  </v-card>
</template>

<script setup lang="ts">

  import {ref, watch} from "vue";

  import {ViewPropsInterface} from "@/layouts/interfaces";

  const props = defineProps<ViewPropsInterface>();

  const loading = ref<boolean>(props.loading);
  const disabled = ref<boolean>(props.disabled);

  watch(

    () =>  (
        props.loading ||
        props.appConfig ||
        props.disabled
    ),

    ()=> {
      loading.value = props.loading;
      disabled.value = props.disabled;
    }

  )

</script>
