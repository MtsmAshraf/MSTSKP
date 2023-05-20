<template>
  <RouterView></RouterView>
</template>

<script>
  import { RouterView } from "vue-router";
  export default {
    name: "app"
  }
</script>


<style>
*{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
:root{
  --main-color:#0d0e25;
  --sec-color:#fc881d;
  --third-color: #fff6ed;
  --forth-color: #e5e7eb;
}
body{
  overflow-x: hidden;
}
img,video{
  max-width: 100%;
}
ul{
  list-style: none;
}
.main-btn{
    padding: 15px 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 200px;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0px 2px 12px -3px var(--sec-color);
    color: var(--third-color);
    transition: all 0.2s 0s linear;
}
.main-btn.main-color{
    border: 1px solid var(--sec-color);
    background-color: var(--main-color);
}
.main-btn.main-color:hover{
  background-color: var(--sec-color);
}
.main-btn.sec-color{
  background-color: var(--sec-color);
}
.main-heading{
  color: var(--sec-color);
  position: relative;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding-left: 60px;
}
.main-heading.third{
  color: var(--third-color);
}
.main-heading::before{
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: (-100%,-50%);
  height: 2px;
  width: 50px;
  background-color: var(--sec-color);
}
.container{
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width:767px) {
  .container{
    width: 750px;
  }
}
@media (min-width:992px) {
  .container{
    width: 980px;
  }
}
@media (min-width:1200px) {
  .container{
    width: 1180px;
  }
}
</style>
