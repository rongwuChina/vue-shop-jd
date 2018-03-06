  
  <template>
  <div class="home-contain">
    <headerbar></headerbar>
    <swiper :options="swiperOption" ref="mySwiper">
       <!-- slides -->
       <swiper-slide>
        <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t16408/50/2132441154/66722/396419bb/5a94c2dbN7a83c0ef.jpg!q70.jpg" alt="">
       </swiper-slide>
       <swiper-slide>
        <img src="https://img1.360buyimg.com/da/jfs/t17467/149/584943303/434400/ae743e60/5a98f957N647870eb.jpg" alt="">
       </swiper-slide>
       <swiper-slide>
        <img src="https://img1.360buyimg.com/da/s750x366_jfs/t16579/322/2174294359/148386/94c3a591/5a990e75Ncf096051.jpg" alt="">
       </swiper-slide>
       

       <!-- Optional controls -->
       <div class="swiper-pagination"  slot="pagination"></div>

       

       <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>

      <div class="real-show clearfix">
          <div class="graphic-text fL"  v-for="articleli in article">
                      <div class="fL graphic-word">
                        <p class="graphic-tit" data-titcolor="#000000" style="color: rgb(0, 0, 0);">
                          <b>{{articleli.pagename}}</b>
                        </p>
                        
                        <p class="graphic-wz" style="color:#D663E1">
                          {{articleli.content}}
                        </p>

                      </div>
                      
                      <div class="graphic-img fR">
                        <img v-bind:src="articleli.categoryimg" class="opa1" style="opacity: 1;">
                      </div>
                      
          </div>
      </div>
      <div class="floor-title floor-tit-img" data-floorname="特色推荐">
                  <span class="tit-img"><img src="https://m.360buyimg.com/mobilecms/jfs/t15142/226/2262661292/27096/4495e446/5a796754N3c01a224.png!q70.jpg"> </span>         
      </div>
      <div class="pro-box clearfix">
            <div class="proli-box fL" v-for="proli in product">
                  <img v-bind:src="proli.img" alt="">
                  <p class="proli-name">
                    {{proli.name}}
                  </p>

                  <p class="pro-price">
                    ¥&nbsp;{{proli.price}}
                  </p>

                  <p class="clearfix">
                      <span class="front-light fL"
                      >
                        好评率<span class="price">{{proli.good}}</span>
                      </span>
                      <span class="base-btn fR">
                        看相似
                      </span>
                  </p>

            </div>
      </div>

      <footerbar active="0"></footerbar>
      
    
    <router-link to="/" exact>首页</router-link>

  </div>
  
  </template>
           <script src="../assets/js/plugins/swiper.min.js"></script>
  <script type="text/javascript" charset="utf-8">
                    import headerbar from "./header.vue"
                    import footerbar from "./footer.vue"
                    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
      name: "home",
      data () {
        return {
          product:[
            {
              name:"王者荣耀英雄人偶兼容乐高白起曹操赵云吕布机甲积木拼装人仔玩具 14款王者送防御塔炮车",
              price:"99",
              good:"90%",
              img:"https://m.360buyimg.com//mobilecms/s370x370_jfs/t17389/30/450815776/487731/7bc82bb6/5a7a7a8dN9443dcec.jpg!q70.jpg"
            },{
              name:"完美芦荟胶40g 3支装",
              price:"99",
              good:"90%",
              img:"https://m.360buyimg.com//mobilecms/s370x370_jfs/t17389/30/450815776/487731/7bc82bb6/5a7a7a8dN9443dcec.jpg!q70.jpg"
            },{
              name:"完美芦荟胶40g 3支装",
              price:"99",
              good:"90%",
              img:"https://m.360buyimg.com//mobilecms/s370x370_jfs/t17389/30/450815776/487731/7bc82bb6/5a7a7a8dN9443dcec.jpg!q70.jpg"
            },{
              name:"完美芦荟胶40g 3支装",
              price:"99",
              good:"90%",
              img:"https://m.360buyimg.com//mobilecms/s370x370_jfs/t17389/30/450815776/487731/7bc82bb6/5a7a7a8dN9443dcec.jpg!q70.jpg"
            }
          ],
          article: [
          {
          pagename:"个护清洁",
          content:"满199减100" ,
          categoryimg:"https://m.360buyimg.com/mobilecms/s160x160_jfs/t5131/193/590214959/19467/155e612a/5902a18eNf84157b1.png!q70.jpg"
          },{
          pagename:"男装馆",
          content:"新品低至五折" ,
          categoryimg:"https://m.360buyimg.com/mobilecms/s160x160_jfs/t13579/127/1699056130/42021/1ef56cff/5a27b976Nac9e1408.jpg!q70.jpg"
          },{
          pagename:"大家电馆",
          content:"满千减百" ,
          categoryimg:"https://m.360buyimg.com/n1/s160x160_jfs/t13630/79/83717/175246/5a7b5670/5a016416N62c825e9.jpg!q70.jpg"
          },{
          pagename:"母婴馆",
          content:"熊孩子来淘货" ,
          categoryimg:"https://m.360buyimg.com/mobilecms/s160x160_jfs/t7516/134/2068531536/18906/84593984/59a7d506Nfa832633.jpg!q70.jpg"
          }
          ],
          swiperOption:{
            // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                   // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                   notNextTick: true,
                   // direction : 'vertical',
                   effect:"coverflow",
                  
                   pagination :{
                    el:'.swiper-pagination'
                   } ,
                   paginationClickable :true,
                   paginationType:"bullets",
                   
              
                   loop:true,
                   autoplay:{

                   },
                   autoHeight: true,
                   

          }
        }
      },
      components:{
        headerbar,
        footerbar,
          swiper,
         swiperSlide
      }
    }
    
             
    
  </script>
  <style type="text/css">
  @import url('../assets/css/plugins/swiper.min.css');


    .home-contain:before{
          content:'';
          display: block;
          height:52px;
    }
    .home-contain:after{
          content:'';
          display: block;
          height:63px;
    }
    h2{
      color:#ff6607;
      line-height: 30px;
    }
    .swiper-wrapper {
        width: 100%;
        height: 300px;
    }
    .swiper-wrapper img{
      width:100%;
     
    }
    .graphic-text{
      width:50%;
      box-sizing:border-box;
      border-bottom: solid 1px #f4f4f4;
      padding:20px 0;
    }
    .graphic-text:nth-child(odd){
      border-right:solid 1px #f4f4f4;

    }
    .graphic-img{
      width:40%;
      float: right;
    }
    .graphic-word{
      width:60%;
    }
    /*商品标签展示box*/
    .proli-box.fL {
        width: 48%;
        margin: 1%;
        background:white;
        padding-bottom:10px;
    }
    .proli-name {
        height: 40px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding:0 10px;
    }
    .pro-price {
        text-align: left;
        line-height: 30px;
        color: red;
        padding:0 10px;
    }

    .front-light {
        color: #8a8a8a;
        font-size: 0.8rem;
        padding:0 10px;
    }
    .base-btn {
        border: solid 1px #dcdcdc;
        padding: 3px 5px;
        font-size: 0.9rem;
        margin-right:10px;
    }
    .real-show{
        background:white; 
    }
    .graphic-wz {
        font-size: 0.8rem;
        line-height: 28px;
    }
    a {
        color: #333;
    }
  </style>