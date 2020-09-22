<template>
    <div class="container">
        <router-link :to="{name : 'addProduct'}">Add A product</router-link>
        <br>
        <router-link :to="{name : 'allProducts'}">All products</router-link>
    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>
