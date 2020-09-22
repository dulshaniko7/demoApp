<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand" href="#">Sample</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name : 'index'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name : 'dashboard'}" v-show="isLogged">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name : 'login'}" v-show="!isLogged">Admin Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name : 'register'}" v-show="!isLogged">Admin Register</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" :to="{name : 'customerLogin'}">Customer</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name : 'logout'}" v-show="isLogged">Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navi",
        data() {
            return {
                isLogged: false,
                name:''
            }
        },
        mounted() {
            if (User.loggedIn()) {
                this.isLogged = true
                this.name = User.name()
            }
        },
    }
</script>

<style scoped>

</style>
