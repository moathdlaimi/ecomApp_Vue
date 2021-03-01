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
      },
      {
        variantId: 2235,
        variantColor: 'blue',
      },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  },
});