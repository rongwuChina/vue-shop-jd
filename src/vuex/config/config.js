export default {
    state: {
        data: 0,
        datas: ['家用电器', '家用小电器']
    },
    mutations: {
        //修改数据   $store.commit('setdata',data)
        setdata(state, data) {
            state.data = state.data + data;
        }
    },
    actions: {
        fetchdata(context, data) {
            context.commit('setdata', data);
        }
    }
}