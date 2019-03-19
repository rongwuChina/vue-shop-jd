import vuex from 'vuex';
import Vue from 'vue';
import config from '@/vuex/config/config';
Vue.use(vuex);
const store = new vuex.Store({
    modules: {
        config: config
    }
})

export default store;
