<template>
  <div class="home">
    <HeaderComponent class="header" @click=""></HeaderComponent>
    <SideNavComponent class="sidenav"></SideNavComponent>
    <IntroComponent></IntroComponent>
    <FeaturesComponent></FeaturesComponent>
    <ReasonsComponent></ReasonsComponent>
    <AlternativesComponent></AlternativesComponent>
    <LinksComponent></LinksComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/Header.vue"
  import SideNavComponent from "@/components/SideNav.vue"
  import IntroComponent from "@/components/Intro.vue"
  import FeaturesComponent from "@/components/Features.vue"
  import ReasonsComponent from "@/components/Reasons.vue"
  import AlternativesComponent from "@/components/Alternatives.vue"
  import LinksComponent from "@/components/Links.vue"
  import FooterComponent from "@/components/Footer.vue"

// @ is an alias to /src
export default {
  name: 'HomeView',
    components:{
      HeaderComponent,
      SideNavComponent,
      IntroComponent,
      FeaturesComponent,
      ReasonsComponent,
      AlternativesComponent,
      LinksComponent,
      FooterComponent
    },
    data(){
      return{
        sideNavShown:false,
      }
    },
    methods:{
      showSideNav(){
        if(!this.sideNavShown){
          document.querySelector(".sidenav").style.cssText = `
            transform:translateX(0);
          `
          this.sideNavShown = true
          
        }else if(this.sideNavShown){
          document.querySelector(".sidenav").style.cssText = `
            transform:translateX(100%);
          `
          this.sideNavShown = false
        }
      }
    }
}
</script>

<style>
body{
  position: relative;
}
.home{
  position: relative;
}
.header{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
}
.sidenav{
  position: fixed;
  right: 0;
  top: 0;
  background-color: var(--sec-color);
  width: 300px;
  padding: 30px;
  z-index: 11;
  border-radius: 10px 0px 0px 10px;
  transition: all 0.4s 0s ease-out;
  transform: translateX(100%);
}
</style>
