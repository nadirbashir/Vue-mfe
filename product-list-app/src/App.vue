<script>
import BaseLoader from './components/ui/BaseLoader.vue'
import ProductCard from './components/products/ProductCard.vue'

export default {
  components: { ProductCard, BaseLoader },
  data() {
    return {
      isLoading: false,
      error: null,
      products: [],
    }
  },

  methods: {
    async loadProducts() {
      try {
        this.isLoading = true
        const response = await fetch('https://dummyjson.com/products/category/smartphones')
        const result = await response.json()
        this.products = result.products
        this.isLoading = false
      } catch (err) {
        console.log(err)
        this.error = err
        this.isLoading = false
      }
    },
  },
  created() {
    this.loadProducts()
  },
}
</script>

<template>
  <div>
    <h1>Products</h1>
    <base-loader v-if="isLoading" class="loader"></base-loader>
    <div v-else class="list-container">
      <product-card
        style="margin: 0px"
        v-for="product in products"
        :id="product.id"
        :title="product.title"
        :category="product.category"
        :price="product.price"
        :imageSrc="product.images[0]"
      ></product-card>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding-left: 55px;
}
.loader {
  top: 200px;
}
.list-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0px 50px;
}
</style>
