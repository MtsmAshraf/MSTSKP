<template>
    <div>
        <HeaderComponent class="header"></HeaderComponent>
        <FeaturesComponent class="features"></FeaturesComponent>
        <LinksComponent></LinksComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue"
import FeaturesComponent from "../components/Features.vue"
import LinksComponent from "@/components/Links.vue"
import FooterComponent from "@/components/Footer.vue"
    export default {
        name:"FeatureView",
        components: {
            HeaderComponent,
            FeaturesComponent,
            LinksComponent,
            FooterComponent
        }
    }
</script>

<style scoped>
.header{
    background-color: var(--main-color);
}
.features{
    padding-top: 200px;
}
</style>