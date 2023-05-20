<template>
    <div class="features">
        <div class="content">
            <div class="text">
                <div class="main-heading">Who Are We?</div>
                <h2>Kenapa Kami Tidak Memberikan Insight Apapun ?</h2>
                <p>Di sini kita akan klarifikasi mengapa kita tidak memberikan insight apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan semata-mata ingin menyelamatkan planet bumi.</p>
                <router-link to="/" class="main-btn main-color"><span>Learn more</span><img src="../assets/arrow.png" alt=""></router-link>
            </div>
            <div class="cards">
                <div class="card">
                    <div class="card-header">
                        <img src="../assets/server.png" alt="">
                        <h4>Database</h4>
                    </div>
                    <p>Data insight yang banyak kan bakal disimpen di database, ya kalo datanya banyak kan jadi gede juga size database-nya.</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img src="../assets/server.png" alt="">
                        <h4>Server</h4>
                    </div>
                    <p>Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh listrik!</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img src="../assets/listrik.png" alt="">
                        <h4>Listrik</h4>
                    </div>
                    <p>Biaya listrik mahal, bos! Listrik kita ini masih batu bara, nggak bagus buat lingkungan. Kalo pake nuklir sih oke-oke aja.</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img src="../assets/lingkungan.png" alt="">
                        <h4>Lingkungan</h4>
                    </div>
                    <p>Pokoknya nggak bagus lah buat lingkungan, ini alesan kita kenapa gak kasih insight. Demi menyelamatkan bumi!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Features",
    }
</script>

<style scoped>
.features{
    padding-top: 300px;
    padding-bottom: 100px;
}
.features .content{
    display: flex;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    gap: 40px;
}
.features .content > *{
    width: 50%;
}
.features .content .text h2{
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.features .content .text p{
    margin-bottom: 20px;
}
.features .content .cards{
    display: grid;
    grid-template-columns: repeat(2,minmax(200px,1fr));
    gap: 10px;
}
.features .content .cards .card{
    padding: 20px;
    box-shadow: 0px 2px 7px -2px var(--main-color);
    min-height: 200px;
    border-radius: 8px;
    transition: all 0.2s 0s linear;
}
.features .content .cards .card .card-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    transition: all 0.2s 0s linear;
    width: fit-content;
    font-weight: bold;
}
.features .content .cards .card .card-header img{
    background-color: var(--main-color);
    border-radius: 8px;
}
.features .content .cards .card p{
    transition: all 0.2s 0s linear;
    margin-top: 20px;
    line-height: 1.4;
}

.features .content .cards .card:hover{
    box-shadow: 0px 2px 17px 10px var(--sec-color);
    background-color: var(--main-color);
}
.features .content .cards .card:hover .card-header{
    color: var(--sec-color);
}
.features .content .cards .card:hover p{
    color: var(--third-color);
}
@media (max-width:992px) {
    .features .content{
        flex-direction: column;
    }
    .features .content > *{
        width: 100%;
    }
    .features .content > .text{
        text-align: center;
    }
    .features .content > .text .main-btn{
        margin-left: auto;
        margin-right: auto;
    }
}
@media (max-width:600px) {
    .features .content .cards{
        grid-template-columns: repeat(1,minmax(200px,1fr));
    }
}
</style>