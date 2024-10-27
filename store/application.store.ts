import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
    state: () => ({
        menuIsOpen: false,
        // tvs: [] as Array<ITv>,
    }),

    getters: {
        // getTvs: (state) => state.tvs,
        getMenuIsOpen: (state) => state.menuIsOpen,
    },

    actions: {
        setMenuIsOpen(isOpen: boolean) {
            this.menuIsOpen = isOpen;
        },
        toggleMenu() {
            this.menuIsOpen = !this.menuIsOpen;
        },
        // setTvs(dataTvs: Array<ITv>) {
        //     this.tvs = dataTvs;
        // },
    }
})