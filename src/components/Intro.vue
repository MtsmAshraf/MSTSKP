<template>
    <div class="intro">
        <div class="bottom-img"><img src="../assets/dashboard.png" alt=""></div>
        <div class="container">
            <div class="bg-img"><img src="../assets/socialmedia.png" alt=""></div>
            <div class="text">
                <span>MANA SAYA TAU SAYA KAN PENCURRY</span>
                <h2>Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun</h2>
                <p>Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan memberikan kamu pelbagai insight.</p>
            </div>
            <div class="buttons">
                <router-link to="/" class="link main-btn sec-color">Learn More</router-link>
                <router-link to="/" class="link main-btn main-color">
                    <img src="../assets/play-circle.png" alt="">
                    <span>Watch Video</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"intro"
    }
</script>

<style scoped>
.intro{
    /* background-color: var(--main-color); */
    min-height: 100vh;
    color: var(--third-color);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 150px;
    padding-bottom: 250px;
    position: relative;
}
.intro::before,
.intro::after{
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.intro::before{
    background-color: var(--sec-color);
    transform: skewY(1deg);
}
.intro::after{
    background-color: var(--main-color);
    transform: skewX(1deg) skewY(1deg) translate(7px,-15px);
}
.intro .container{
    position: relative;
}
.intro .bottom-img{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,50%);
    width: 600px;
    max-width: 100%;
}
.intro .container .bg-img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width:767px) {
    .intro .container .bg-img{
        display: none;
    }
    
        .intro::before{
            background-color: var(--sec-color);
            transform: skewY(0deg);
        }
        .intro::after{
            background-color: var(--main-color);
            transform: skewX(0deg) skewY(0deg) translate(0px,0px);
        }
}
.intro .container .text,
.intro .container .buttons{
    position: relative;
}
.intro .container .text > span{
    color: var(--sec-color);
    font-size: 18px;
}
.intro .container .text > h2{
    font-size: 60px;
    font-weight: normal;
    width: 80%;
    margin: 30px auto;
}
.intro .container .text > p{
    font-size: 18px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.4;
}
.intro .container .buttons{
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}
.intro .container .buttons .link{
    /* color: var(--third-color);
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
    transition: all 0.2s 0s linear; */
}
.intro .container .buttons .link:nth-child(1){
    /* background-color: var(--sec-color); */
}
.intro .container .buttons .link:nth-child(2){
    /* background-color: var(--main-color); */
    /* border: 1px solid var(--sec-color); */
}
.intro .container .buttons .link:nth-child(2):hover{
    /* background-color: var(--sec-color); */
}
.intro .container .buttons .link img{
    width: 20px;
}
@media (max-width:767px) {
.intro .container .text > span{
    font-size: 14px;
}
.intro .container .text > h2{
    font-size: 40px;
}
.intro .container .text > p{
    font-size: 14px;
}
    .intro .container .buttons{
        flex-direction: column;
        gap: 20px;
    }
}
</style>
