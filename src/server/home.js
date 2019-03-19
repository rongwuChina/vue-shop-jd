import headerbar from "@/components/header.vue"
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'

//定义多个state并插入到computed中
const mapstate = mapState({
    data: state => state.config.data
})

export default {
    name: "home",
    data() {
        return {
            product: [
                {
                    name:
                        "王者荣耀英雄人偶兼容乐高白起曹操赵云吕布机甲积木拼装人仔玩具 14款王者送防御塔炮车",
                    price: "99",
                    good: "90%",
                    img:
                        "https://m.360buyimg.com//mobilecms/s370x370_jfs/t17389/30/450815776/487731/7bc82bb6/5a7a7a8dN9443dcec.jpg!q70.jpg"
                },
                {
                    name: "完美芦荟胶40g 3支装",
                    price: "99",
                    good: "90%",
                    img:
                        "https://m.360buyimg.com//mobilecms/s370x370_jfs/t17389/30/450815776/487731/7bc82bb6/5a7a7a8dN9443dcec.jpg!q70.jpg"
                },
                {
                    name: "完美芦荟胶40g 3支装",
                    price: "99",
                    good: "90%",
                    img:
                        "https://m.360buyimg.com//mobilecms/s370x370_jfs/t17389/30/450815776/487731/7bc82bb6/5a7a7a8dN9443dcec.jpg!q70.jpg"
                },
                {
                    name: "完美芦荟胶40g 3支装",
                    price: "99",
                    good: "90%",
                    img:
                        "https://m.360buyimg.com//mobilecms/s370x370_jfs/t17389/30/450815776/487731/7bc82bb6/5a7a7a8dN9443dcec.jpg!q70.jpg"
                }
            ],
            article: [
                {
                    pagename: "个护清洁",
                    content: "满199减100",
                    categoryimg:
                        "https://m.360buyimg.com/mobilecms/s160x160_jfs/t5131/193/590214959/19467/155e612a/5902a18eNf84157b1.png!q70.jpg"
                },
                {
                    pagename: "男装馆",
                    content: "新品低至五折",
                    categoryimg:
                        "https://m.360buyimg.com/mobilecms/s160x160_jfs/t13579/127/1699056130/42021/1ef56cff/5a27b976Nac9e1408.jpg!q70.jpg"
                },
                {
                    pagename: "大家电馆",
                    content: "满千减百",
                    categoryimg:
                        "https://m.360buyimg.com/n1/s160x160_jfs/t13630/79/83717/175246/5a7b5670/5a016416N62c825e9.jpg!q70.jpg"
                },
                {
                    pagename: "母婴馆",
                    content: "熊孩子来淘货",
                    categoryimg:
                        "https://m.360buyimg.com/mobilecms/s160x160_jfs/t7516/134/2068531536/18906/84593984/59a7d506Nfa832633.jpg!q70.jpg"
                }
            ],
            swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // direction : 'vertical',
                effect: "coverflow",

                pagination: {
                    el: ".swiper-pagination"
                },
                paginationClickable: true,
                paginationType: "bullets",

                loop: true,
                autoplay: {},
                autoHeight: true
            }
        };
    },
    computed: {
        ...mapstate
    },
    components: {
        headerbar,
        swiper,
        swiperSlide
    }
};