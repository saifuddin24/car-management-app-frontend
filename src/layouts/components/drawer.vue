<template>

  <v-navigation-drawer elevation="5" v-model="props.modelValue" :rail="props.rail">

    <v-list class="position-sticky"
            style="top: 0;  z-index: 1"
            :elevation="props.rail?0:3"
            bg-color="white"
    >
        <v-list-item
          to="profile"
          title="John Leider"
          subtitle="01774584879"
        >

          <template v-slot:prepend>
            <v-avatar :size=" rail? 'x-small':'large'"
                      image="https://randomuser.me/api/portraits/men/78.jpg"
            >
            </v-avatar>
          </template>

          <template v-slot:append>
            <v-badge title="driver" content="driver" inline color="blue-lighten-1 text-white"></v-badge>
          </template>
        </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" :nav="true">
      <navigation-item v-for="nav in nav_items" :rail="props.rail" :nav="nav" :key="nav.title"></navigation-item>
    </v-list>

    <v-divider></v-divider>

    <v-sheet class="text-center mt-4 position-sticky" style="bottom: 0">
      <v-btn
        variant="text"
        size="small"
        :icon="rail? `mdi-chevron-right`:`mdi-chevron-left`"
        @click.stop="toggleRail"
      ></v-btn>
    </v-sheet>

  </v-navigation-drawer>

</template>

<script setup lang="ts">

  import nav_items from '@/configs'
  import NavigationItem from "@/layouts/components/navigation-item.vue";

  console.log( { nav_items })

  interface HeaderInterface {
    modelValue: boolean;
    rail?:boolean
  }

  interface EmitInterface {
    (e:'update:modelValue', type: boolean),
    (e:'update:rail', type: boolean),
  }

  const props = defineProps<HeaderInterface>()
  const emit = defineEmits<EmitInterface>();

  const toggleRail = () => {
    emit('update:rail', !props.rail)
  }
  const enableRail = (value) => {
    emit('update:rail', value)
  }


</script>

<style scoped>

</style>
