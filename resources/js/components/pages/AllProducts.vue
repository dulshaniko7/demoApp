<template>
    <div>
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
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="p in products" :key="index" :value="p.id">
                    <td>{{p.ProductName}}</td>
                    <td>{{p.price}}</td>
                    <td>{{p.discount}}</td>
                    <td>{{p.description}}</td>
                    <td class="w-25">
                        <img alt="" :src="'/Products/'+p.image" class="img-fluid img-thumbnail">
                    </td>
                  <td>


                      <a @click="edit" class="btn btn-sm btn-primary">Edit</a>
                        <a @click="$delete(products, index)" class="btn btn-sm btn-danger">Delete</a>
                  </td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllProducts",
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
            },
            delete(id){
                axios.delete('/api/product/'+this.products.id)
                    .then(() =>{

                        //this.$router.push({ name: 'allProducts'})
                    })
                    .catch((error) =>{
                        console.log(error)
                    })

                },
            edit(){
                alert('hi')
            }

            }
        }

</script>

<style scoped>

</style>
