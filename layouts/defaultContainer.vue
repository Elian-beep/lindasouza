<script lang="ts" setup>
import NavigationMenu from '~/components/header/navigationMenu.vue';
import { useApplicationStore } from '~/store/application.store';

const appStore = useApplicationStore();
</script>

<template>
    <div class="container px-6 py-10 min-h-screen relative z-10 ">
        <NavigationMenu />
        <NuxtPage />

        <div v-if="appStore.getMenuIsOpen" class="overlay z-20 fixed top-0 left-0 w-full h-full duration-300 ease transition-all"></div>
    </div>
</template>

<style scoped lang="css">
.container {
    background: linear-gradient(180deg, #FFF0E1 0%, rgba(255, 240, 225, 0.00) 100%), linear-gradient(0deg, #FFF0E1 0%, rgba(255, 240, 225, 0.00) 100%);
}

.overlay {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>