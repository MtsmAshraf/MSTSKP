<template>
    <div class="footer">
        <div class="container">
            COPYRIGHT © 2023: <a href="https://moatasim-ashraf.netlify.app/">Moatasim</a>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Footer"
    }
</script>

<style scoped>
.footer{
    border-top: 1px solid var(--main-color);
    padding: 20px;
    text-align: center;
}
.footer a{
    color: var(--main-color);
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
}
</style>