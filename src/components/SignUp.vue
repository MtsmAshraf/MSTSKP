<template>
    <div>
        <div class="sign-up">
            <div class="container">
                <router-link class="logo" to="/"><img src="../assets/profilfek.png" alt=""></router-link>
                <div class="card">
                    <h2>Sign Up</h2>
                    <form>
                        <div>
                            <label for="username">Username</label>
                            <input type="text" id="username">
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" id="password">
                        </div>
                        <input type="submit" value="Sign Up">
                    </form>
                    <div class="card-footer">
                        Already have an account? <router-link to="/login" class="link">login</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        nams:"Sign-up"
    }
</script>

<style scoped>

.sign-up{
    background-color: var(--sec-color);
}
.sign-up .container{
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sign-up .container .logo{
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
.sign-up .container .card{
    padding: 20px;
    background-color: var(--main-color);
    border-radius: 20px;
    color: var(--third-color);
    border: 1px solid var(--sec-color);
}
.sign-up .container .card h2{
    text-align: center;
}
.sign-up .container form{
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
.sign-up .container form > div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}
.sign-up .container form label{
    color: var(--sec-color);
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
}
.sign-up .container form input{
    width: 100%;
    padding: 5px;
    border-radius: 6px;
    border: none;
}
.sign-up .container form input:focus{
    outline: none;
    box-shadow: 0px 0px 0px 2px var(--sec-color);
}
.sign-up .container form input[type="submit"]{
    cursor: pointer;
    background-color: var(--sec-color);
    color:var(--main-color);
    font-size: 18px;
    font-weight: bold;
}
.sign-up .container .card-footer .link{
    color: var(--sec-color);
}
</style>