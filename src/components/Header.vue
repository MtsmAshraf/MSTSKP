<template>
    <div id="header">
        <div class="container">
            <div>
                <router-link class="link" to="/">
                    <div class="logo">
                        <img src="../assets/profilfek.png" alt="logo">
                        <span>MSTSKP</span>
                    </div>
                </router-link>
            </div>
            <nav>
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/features">Features</router-link>
                <router-link class="link" to="/reasons">Reasons</router-link>
                <router-link class="link" to="/alternatives">Alternatives</router-link>
            </nav>
            <div class="registration">
                <router-link to="/sign-up" class="sign-up link">Sign Up</router-link>
                <router-link to="/login" class="login link">Login</router-link>
            </div>
            <div class="burger-icon">
                <img src="../assets/white-hamburger.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
        name:"HeaderComp",
    }
</script>

<style scoped>
#header{
    padding-top: 20px;
    padding-bottom: 20px;
}
#header .link{
    color: var(--third-color);
    text-decoration: none;
}
#header  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#header .container .logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    gap: 10px;
}
#header .container .logo img{
    width: 50px;
}
#header .container .logo span{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
}
#header .container nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-weight: bold;
}
#header .container .registration{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}
#header .container .login{
        background-color: var(--third-color);
        color: var(--main-color);
        font-weight: bold;
        padding: 10px 15px;
        border-radius: 20px;
}
#header .container .burger-icon{
    width: 30px;
    display: none;
    cursor: pointer;
}
@media (max-width:767px) {
    #header .container nav,
    #header .container .registration{
        display: none;
    }
    #header .container .burger-icon{
        display: block;
    }
}
</style>