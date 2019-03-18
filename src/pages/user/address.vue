<template>
  <div>
    <div>
      <ul>
        <ol v-for="(product,index) in products" :key="index">
          <span>{{product.name}}</span>
          <span>{{product.price}}</span>
        </ol>
      </ul>
    </div>
    <footerbar active="3"></footerbar>
  </div>
</template>

<script>
export default {
  name: "productcart",
  data: () => {
    return {
      products: [
        {
          name: "手机",
          price: "1234"
        },
        {
          name: "充电宝",
          price: "89"
        }
      ]
    };
  },
  computed: {
    totalprice: () => {
      let total = 0;
      for (const item of this.products) {
        total += item.price;
      }
      return total;
    }
  }
};
</script>
