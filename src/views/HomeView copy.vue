<template>
  <div class="home">
    <HeaderComponent class="header"></HeaderComponent>
    <IntroComponent></IntroComponent>
    <FeaturesComponent></FeaturesComponent>
    <ReasonsComponent></ReasonsComponent>
    <AlternativesComponent></AlternativesComponent>
    <LinksComponent></LinksComponent>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/Header.vue"
  import IntroComponent from "@/components/Intro.vue"
  import FeaturesComponent from "@/components/Features.vue"
  import ReasonsComponent from "@/components/Reasons.vue"
  import AlternativesComponent from "@/components/Alternatives.vue"
  import LinksComponent from "@/components/Links.vue"

// @ is an alias to /src
export default {
  name: 'HomeView',
    components:{
      HeaderComponent,
      IntroComponent,
      FeaturesComponent,
      ReasonsComponent,
      AlternativesComponent,
      LinksComponent
    }
}
</script>

<style>
body{
  position: relative;
}
.header{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>
