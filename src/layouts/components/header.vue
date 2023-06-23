<template>
  <v-app-bar title="Application bar"
             scroll-behavior="elevate"
             class="border-b"
             color="primary"
             density="compact"
  >

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.prevent="toggleDrawer"></v-app-bar-nav-icon>
    </template>

  </v-app-bar>
</template>

<script setup lang="ts">

  interface HeaderProps {
    drawer?: boolean
  }

  const props = defineProps<HeaderProps>()

  const emit = defineEmits<{(e:'update:drawer', type: boolean)}>();

  const toggleDrawer = () => {
    emit('update:drawer', !props.drawer );
  };



</script>

<style scoped>

</style>
