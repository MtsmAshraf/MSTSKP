<template>
    <div>
        <LoginComponent></LoginComponent>
        <LinksComponent></LinksComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import LoginComponent from "@/components/Login.vue"
import LinksComponent from "@/components/Links.vue"
import FooterComponent from "@/components/Footer.vue"
    export default {
        name:"LoginView",
        components: {
            LoginComponent,
            LinksComponent,
            FooterComponent
        }
    }
</script>

<style scoped>
.header{
    background-color: var(--main-color);
}

</style>