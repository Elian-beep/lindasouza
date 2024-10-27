<script setup lang="ts">
import DefaultContainer from '~/layouts/defaultContainer.vue';
import { useApplicationStore } from '~/store/application.store';

const appStore =  useApplicationStore();
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <DefaultContainer />
  </div>
</template>
