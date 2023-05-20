<template>
  <div class="home">
    <HeaderComponent class="header"></HeaderComponent>
    <SideNavComponent :class="[(sideNavShown && `active`),'sidenav']"></SideNavComponent>
    <div class="burger-icon" @click="showSideNav">
      <img src="../assets/white-hamburger.png" alt="">
    </div>
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
          this.sideNavShown = true
          
        }else if(this.sideNavShown){
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
.burger-icon{
    position: absolute;
    top:20px;
    right:20px;
    width: 30px;
    cursor: pointer;
    z-index: 11;
}
@media (min-width:776px) {
  .burger-icon{
    display: none;
  }
}
.sidenav .burger-icon img{
  width: 30px;
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
.sidenav.active{
  transform: translateX(0%);
}
</style>
