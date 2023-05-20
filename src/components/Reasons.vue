<template>
    <div class="reasons">
        <div class="content">
            <div class="reasons-header">
                <div class="main-heading">Why Us?</div>
                <h2>Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?</h2>
                <p>Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga kemungkinan kenapa lo bisa ada di website ini. Ketiga kemungkinan itu akan gwej jabarkan di bawah ini dengan ilustrasinya hehehe.</p>
            </div>
            <div class="cards">
                <div class="card">
                    <div class="img"><img src="../assets/lope.png" alt=""></div>
                    <div class="text">
                        <h4>Kamu Tidak Punya Kekasih</h4>
                        <p>Sudah pasti orang yang tidak punya kekasih akan memiliki waktu luang yang banyak, jadi ya lo iseng aja gitu datang ke website ini.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img"><img src="../assets/wibu-autis.png" alt=""></div>
                    <div class="text">
                        <h4>Lo Wibu Autid</h4>
                        <p>Iyh bener, biasanya wibu kalo nggak halu waifu suka iseng nggak jelas, termasuk mengunjungi website ini tanpa alasan yang jelas hehehe.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img"><img src="../assets/ayam.png" alt=""></div>
                    <div class="text">
                        <h4>Kok Gambar Ayam?</h4>
                        <p>Lah ngatur. Nggak tau lagi gwej alasan yang ketiga, biar bagus aja desainnya. Kalo cuman dua jadinya nggak bagus hehe.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Reasons",
    }
</script>

<style scoped>
.reasons{
    padding-top: 100px;
    padding-bottom: 100px;
}
.reasons .content{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
}
.reasons .reasons-header{
    text-align: center;
    width: 700px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}
.reasons .reasons-header .main-heading{
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
}
.reasons .reasons-header .main-heading::before{
    display: none;
}
.reasons .reasons-header h2{
    font-size: 36px;
    margin-top: 30px;
    margin-bottom: 30px;
}
.reasons .cards{
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3,minmax(200px,1fr));
    gap: 30px;
}
.reasons .cards .card{
    min-height: 250px;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.2s 0s linear;
    background-color: var(--main-color);
    box-shadow: 0px 2px 8px 3px var(--sec-color);
}
.reasons .cards .card:hover{
    box-shadow: 0px 2px 8px 3px var(--main-color);
    transform: scale(1.1);
}
.reasons .cards .card .img{
    background-color: var(--forth-color);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reasons .cards .card .text{
    padding: 20px;
    background-color: var(--main-color);
}
.reasons .cards .card .text h4{
    margin-bottom: 10px;
    font-size: 20px;
    color: var(--sec-color);
}
.reasons .cards .card .text p{
    color: var(--third-color);
}
@media (max-width:992px) {
    .reasons .cards{
        grid-template-columns: repeat(2,minmax(200px,1fr));
    }
}
@media (max-width:767px) {
    .reasons .cards{
        grid-template-columns: repeat(1,minmax(200px,1fr));
    }
}
</style>