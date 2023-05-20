<template>
    <div>
        <HeaderComponent class="header"></HeaderComponent>
        <ReasonsComponent class="reasons"></ReasonsComponent>
        <LinksComponent></LinksComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue"
import ReasonsComponent from "../components/Reasons.vue"
import LinksComponent from "@/components/Links.vue"
import FooterComponent from "@/components/Footer.vue"
    export default {
        name:"ReasonsView",
        components: {
            HeaderComponent,
            ReasonsComponent,
            LinksComponent,
            FooterComponent
        }
    }
</script>

<style scoped>
.header{
    background-color: var(--main-color);
}
.reasons{
    padding-top: 150px;
}
</style>