let app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    imageurl:
      'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    // inStock: true,
    inventory: 10,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg',
      },
    ],
    sizes: ['S', 'M', 'L'],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    deleteFromCart() {
      this.cart -= 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
