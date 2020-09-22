<template>
    <div class="container">
        <h3>Add A Product</h3>
        <form @submit.prevent="insert" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-9">
                </div>
                <div class="col-md-3">

                </div>
            </div>

            <div class="form-group">
                <div class="form-row">
                    <div class="col-md-6">
                        <label for="name">Product Name</label>
                        <input type="text" class="form-control" id="name" v-model.lazy="form.ProductName">
                    </div>
                    <div class="col-md-6">
                        <label for="price">Price</label>
                        <input type="text" class="form-control" id="price" v-model="form.price">
                    </div>
                </div>
            </div>


            <div class="form-group">
                <div class="form-row">
                    <div class="col-md-6">
                        <label for="discount">Discount</label>
                        <input type="text" class="form-control" id="discount" v-model="form.discount">
                    </div>
                    <div class="col-md-6">
                        <label for="description">Description</label>
                        <input type="text" class="form-control" id="description" v-model="form.description">
                    </div>
                </div>
            </div>


            <div class="form-group">
                <div class="form-row">
                    <div class="col-md-6">
                        <label class="custom-file-label">image</label>
                        <input type="file" class="custom-file-input" name="image" v-on:change="onImageChange">
                        <img :src="form.photo" alt="image" id="image">
                    </div>

                </div>
            </div>


            <button class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "ProductAdd",
        data() {
            return {
                form: {
                    ProductName: '',
                    price: '',
                    description: '',
                    discount: '',
                    image: '',
                    photo: ''
                },
            }
        },

        methods: {
            onImageChange(event) {
                let file = event.target.files[0]
                this.form.image = event.target.files[0]
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = event => {
                    this.form.photo = event.target.result
                    console.log(event.target.result)
                }
            },
            insert() {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                let formData = new FormData();
                formData.append('ProductName', this.form.ProductName)
                formData.append('price', this.form.price)
                formData.append('discount', this.form.discount)
                formData.append('description', this.form.description)
                formData.append('image', this.form.image)
                axios.post('/api/product', formData, config)
                    .then(() => {
                        this.$router.push({name: 'dashboard'})
                    })
                    .catch(error => console.log(error.response.data))
            }
        }
    }
</script>

<style scoped>
    #image {
        width: 200px;
        height: 200px;
    }
</style>
