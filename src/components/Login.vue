<template>
    <div class="login">
        <div class="container">
            <router-link class="logo" to="/"><img src="../assets/profilfek.png" alt=""></router-link>
            <div class="card">
                <h2>Login</h2>
                <form>
                    <div>
                        <label for="username">Username</label>
                        <input type="text" id="username">
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" id="password">
                    </div>
                    <input type="submit" value="Login">
                </form>
                <div class="card-footer">
                    Don't have an account? <router-link to="/sign-up" class="link">Sign Up</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        nams:"Login"
    }
</script>

<style scoped>
.login{
    background-color: var(--sec-color);
}
.login .container{
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.login .container .logo{
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login .container .card{
    padding: 20px;
    background-color: var(--main-color);
    border-radius: 20px;
    color: var(--third-color);
    border: 1px solid var(--sec-color);
}
.login .container .card h2{
    text-align: center;
}
.login .container form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 20px auto;
    border-top: 1px solid var(--sec-color);
    border-bottom: 1px solid var(--sec-color);
    padding-top: 20px;
    padding-bottom: 20px;
}
.login .container form > div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}
.login .container form label{
    color: var(--sec-color);
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
}
.login .container form input{
    width: 100%;
    padding: 5px;
    border-radius: 6px;
    border: none;
}
.login .container form input:focus{
    outline: none;
    box-shadow: 0px 0px 0px 2px var(--sec-color);
}
.login .container form input[type="submit"]{
    cursor: pointer;
    background-color: var(--sec-color);
    color:var(--main-color);
    font-size: 18px;
    font-weight: bold;
}
.login .container .card-footer .link{
    color: var(--sec-color);
}
</style>