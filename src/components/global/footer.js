import footerbar from "@/components/footer.vue"

const footer = {
    install: (Vue) => {
        Vue.component('footerbar',footerbar);
    }
}

export default footer;