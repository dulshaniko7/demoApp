<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Logout",
        mounted(){
            localStorage.removeItem('token')
            localStorage.removeItem('user')

            this.$router.push({name:'login'})
        }
    }
</script>

<style scoped>

</style>
