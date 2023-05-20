<template>
    <div class="alternatives">
        <div class="details">
            <div class="box">
                <div class="img"><img src="../assets/alternative1.png" alt=""></div>
                <p>Buffer.com - Buffer is the most intuitive, affordable, and authentic way to reach more people on social media.</p>
                <router-link class="link" to="/">
                    <span>Learn More</span>
                    <img src="../assets/arrow-right.png" alt="">
                </router-link>
            </div>
            <div class="box">
                <div class="img"><img src="../assets/alternative2.png" alt=""></div>
                <p>Sendible.com – Grow your audience, attract new customers, and reach your social media goals with an all-in-one platform.</p>
                <router-link class="link" to="/">
                    <span>Learn More</span>
                    <img src="../assets/arrow-right.png" alt="">
                </router-link>
            </div>
        </div>
        <div class="container">
            <div class="left">
                <div class="main-heading third">ALTERNATIVES</div>
                <h2>Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!</h2>
            </div>
            <div class="right">
                Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya. Barangkali lo udah serius gitu butuh tool untuk sosial media, maka dari itu kita kasih 2 alternatif yang bisa lo pake untuk sosial media lo.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Alternatives"
    }
</script>

<style scoped>
.alternatives{
    padding-top: 100px;
    padding-bottom: 40px;
    color: var(--third-color);
    min-height: 600px;
    margin-bottom: 300px;
    position: relative;
}
.alternatives::before,
.alternatives::after{
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 10px;
}
.alternatives::before{
    background-color: var(--sec-color);
}
.alternatives::after{
    left: 50%;
    width: calc(100% - 10px);
    background-color: var(--main-color);
    transform: rotateZ(-1deg) translateX(-50%);
}
.alternatives .container{
    display: flex;
    justify-content: space-between;
}
.alternatives .container > *{
    width: 50%; 
}
.alternatives .container .left h2{
    margin-top: 20px;
}
.alternatives .container .right{
    padding-top: 30px;
    padding-left: 30px;
    line-height: 1.4;
}
.alternatives .details{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,50%);
    background-color: var(--third-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    color: var(--main-color);
    padding: 30px;
    border-radius: 15px;
    width: 80%;
    box-shadow: 0px 7px 20px -3px #ddd;
}
.alternatives .details .box{
    width: 50%;
}
.alternatives .details .box .img{
    width: 100%;
}
.alternatives .details .box .img img{
    width: 100%;
}
.alternatives .details .box p{
    width: 100%;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.alternatives .details .box .link{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    width: fit-content;
    text-decoration: none;
}
@media (max-width:767px) {  
    .alternatives{
        margin-bottom: 900px;
    }
    .alternatives .container{
        flex-direction: column;
        padding-left: 50px;
        padding-right: 50px;
        text-align: center;
    }
    .alternatives .container > *{
        width: 100%;
    }
    .alternatives .container .left .main-heading{
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
    .alternatives .container .right{
        padding-left: 0;
    }
    .alternatives .details{
        flex-direction: column;
        gap: 40px;
        transform: translate(-50%,80%);
    }
    .alternatives .details .box{
        width: 100%;
    }
}
</style>