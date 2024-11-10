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
    <div class="content flex justify-between">
        <picture>
            <source srcset="../../assets/icons/logo_desktop.svg" media="(min-width: 768px)" />

            <img src="../../assets/icons/logo_mobile.svg" alt="Logo LS" />
        </picture>

        <!-- Links mobile -->
        <div class="transform transition-transform duration-300 custom_menu_mobile"
            :class="appStore.getMenuIsOpen ? 'translate-x-0' : 'translate-x-full'">
            <div class="flex flex-col links_desktop">
                <NuxtLink v-for="(link, index) in menuItens" :key="index" :to="link.to"
                    :class="{ 'font-bold text-primary': link.ref === route.name }" class="pt-6 text-lg text-center"
                    @click="appStore.toggleMenu">{{ link.title }}</NuxtLink>
            </div>
        </div>

        <!-- Links desktop -->
        <div class="hidden sm:flex flex-row gap-10">
            <NuxtLink v-for="(link, index) in menuItens" :key="index" :to="link.to"
                :class="{ 'font-bold text-primary': link.ref === route.name }" class="text-lg text-center my-auto">{{
                link.title }}</NuxtLink>
        </div>

        <div class="flex justify-between items-center my-auto flex-col w-[30px] h-6 cursor-pointer duration-300 ease transition-all z-30 md:hidden"
            :class="{ 'open': appStore.getMenuIsOpen }" @click="appStore.toggleMenu">
            <span class="w-full h-[3px] duration-300 ease transition-all bg-text top"></span>
            <span class="w-full h-[3px] duration-300 ease transition-all bg-text middle"></span>
            <span class="w-full h-[3px] duration-300 ease transition-all bg-text bottom"></span>
        </div>
    </div>
</template>

<style scoped>
.content{
    @apply md:max-w-[1184px] md:mx-auto;
}

.custom_menu_mobile {
    @apply fixed top-0 right-0 pt-[50%] h-full bg-white w-72 p-4 z-30 sm:hidden;
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
