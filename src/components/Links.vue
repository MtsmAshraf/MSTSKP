<template>
    <div class="links"> 
        <div class="container">
            <div class="group">
                <div class="group-header">ALTERNATIVES</div>
                <ul>
                    <li>Buffer</li>
                    <li>Sendible</li>
                    <li>Later</li>
                    <li>Social Pilot</li>
                </ul>
            </div>
            <div class="group">
                <div class="group-header">SITEMAP</div>
                <ul>
                    <li>Top</li>
                    <li>Feature</li>
                    <li>Reasons</li>
                    <li>Alternatives</li>
                    <li>Login</li>
                </ul>
            </div>
            <div class="group">
                <div class="group-header">COMPANY</div>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privact Policy</li>
                    <li>Term of Service</li>
                    <li>Help</li>
                </ul>
            </div>
            <div class="group">
                <div class="group-header">GET IN TOUCH</div>
                <ul>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Github</li>
                    <li>Dribble</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Links"
    }
</script>

<style scoped>
.links{
    padding-top: 50px;
    padding-bottom: 50px;
}
.links .container{
    display: grid;
    grid-template-columns: repeat(4,minmax(150px,1fr));
    justify-content: space-between;
    gap: 20px;
}
.links .container .group{
    padding: 20px;
}

.links .container .group .group-header{
    font-weight: bold;
    margin-block: 15px;
    font-size: 14px;
}
.links .container .group li{
    margin-bottom: 15px;
}
@media (max-width:767px) {
    .links .container{
        grid-template-columns: repeat(2,minmax(150px,1fr));
    }
    .links .container .group{
        text-align: center;
    }
}
</style>