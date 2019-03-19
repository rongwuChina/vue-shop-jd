import { mapState, mapActions } from 'vuex';

const mapstate = mapState({
    data: state => state.config.data,
    datas: state => state.config.datas
})
const mapactions = mapActions({
    fetchdata: 'fetchdata'
})

export default {
    name: "discover",
    computed: {
        ...mapstate
    },
    methods: {
        ...mapactions
    }
}