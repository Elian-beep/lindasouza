<script lang="ts" setup>
import { useApplicationStore } from '~/store/application.store';

const appStore = useApplicationStore();
const route = useRoute();

const menuItens = [
    { title: 'Home', to: '/', ref: 'index' },
    { title: 'Sobre', to: '/about', ref: 'about' },
    { title: 'Currículo', to: '/curriculum', ref: 'curriculum' },
    { title: 'Contato', to: '/contact', ref: 'contact' },
];

watch(appStore, () => {
    appStore.getMenuIsOpen ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
});
</script>

<template>
    <div class="flex justify-between">
        <div>
            logo
        </div>

        <div class="transform transition-transform duration-300 custom_menu_mobile"
            :class="appStore.getMenuIsOpen ? 'translate-x-0' : 'translate-x-full'">
            <div class="flex flex-col">
                <NuxtLink v-for="(link, index) in menuItens" :key="index" :to="link.to"
                    :class="{ 'font-bold text-primary': link.ref === route.name }" class="pt-6 text-lg text-center"
                    @click="appStore.toggleMenu">{{ link.title }}</NuxtLink>
            </div>
        </div>

        <div class="flex justify-between items-center flex-col w-[30px] h-6 cursor-pointer duration-300 ease transition-all z-30"
            :class="{ 'open': appStore.getMenuIsOpen }" @click="appStore.toggleMenu">
            <span class="w-full h-[3px] duration-300 ease transition-all bg-text top"></span>
            <span class="w-full h-[3px] duration-300 ease transition-all bg-text middle"></span>
            <span class="w-full h-[3px] duration-300 ease transition-all bg-text bottom"></span>
        </div>
    </div>
</template>

<style scoped>
.custom_menu_mobile {
    @apply fixed top-0 right-0 pt-[50%] h-full bg-white w-72 p-4 z-30;
}

.open .top {
    transform: rotate(45deg);
    transform-origin: bottom left;
}

.open .middle {
    opacity: 0;
}

.open .bottom {
    transform: rotate(-45deg);
    transform-origin: top left;
}
</style>
