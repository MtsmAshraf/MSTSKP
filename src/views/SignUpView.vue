<template>
    <div>
        <SignUpComponent></SignUpComponent>
        <LinksComponent></LinksComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import SignUpComponent from "@/components/SignUp.vue"
import LinksComponent from "@/components/Links.vue"
import FooterComponent from "@/components/Footer.vue"
    export default {
        name:"SignUpView",
        components: {
            SignUpComponent,
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