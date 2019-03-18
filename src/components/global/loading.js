import myloading from '@/components/loading.vue'

const loading={
     install: function(Vue){
        Vue.component('loading',myloading);
     }
}

export default loading
