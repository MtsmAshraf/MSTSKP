<template>
    <div class="sidenav">
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
        </div>
    </div>
</template>

<script>
    export default {
        name:"SideNav",
    }
</script>

<style scoped>
.sidenav .container{
    display: flex;
    flex-direction: column;
}
.link{
    color: var(--main-color);
    font-weight: bold;
    text-decoration: none;
}
.sidenav .container .logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: fit-content;
}
.sidenav .container .logo img{
    width: 60px;
}
.sidenav .container nav{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.sidenav .container .registration{
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    gap: 10px;
    width: fit-content;
    border-top: 1px solid var(--main-color);
    padding: 10px 20px;
}
.sidenav .container .registration .sign-up{
    color: var(--third-color);
}
.sidenav .container .registration .login{
    background-color: var(--third-color);
    color: var(--main-color);
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 20px;
    width: fit-content;
}
</style>