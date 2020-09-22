<template>
    <div>
        Customer Index
        <h2>All Products</h2>
        <div class="table-responsive">
            <table class="table align-items-center table-flush">
                <thead class="thead-light">
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>discount</th>
                    <th>Image</th>

                </tr>
                </thead>
                <tbody>
                <tr v-for="(p,index) in products" :key="index" :value="p.id">
                    <td>{{p.ProductName}}</td>
                    <td>{{p.price}}</td>
                    <td>{{p.discount}}</td>
                    <td>{{p.description}}</td>
                    <td class="w-25">
                        <img alt="" :src="'/Products/'+p.image" class="img-fluid img-thumbnail">
                    </td>
                    <td>


                    </td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomerIndex",
        data() {
            return {
                products: []
            }
        },
        mounted() {
            this.allProducts()
        },
        methods: {
            allProducts() {
                axios.get('/api/product')
                    .then(response => {
                        this.products = response.data.data
                    })
            }
            },
    }
</script>

<style scoped>

</style>
