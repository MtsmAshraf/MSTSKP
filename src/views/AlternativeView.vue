<template>
    <div>
        <HeaderComponent class="header"></HeaderComponent>
        <AlternativesComponent></AlternativesComponent>
        <LinksComponent></LinksComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue"
import AlternativesComponent from "../components/Alternatives.vue"
import LinksComponent from "@/components/Links.vue"
import FooterComponent from "@/components/Footer.vue"
    export default {
        name:"AlternativesView",
        components: {
            HeaderComponent,
            AlternativesComponent,
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