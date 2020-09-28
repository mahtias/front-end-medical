<template>
    <div class="wrapper">
        <div class="">
        <the-logo-header></the-logo-header>
        <the-header></the-header>
        </div>
        <the-nav-bar></the-nav-bar>

        <div class="main-panel">
            <div class="content">
                <slot />
            </div>

           <footer class="footer">
                <div class="container-fluid">
                   
                    <div class="copyright pull-left">
                     copyright   2020, tous  droit reservé    par <a href="https://www.themekita.com">AKouaTechnology</a>
                    </div>
                </div>
            </footer>
        </div>

     
    </div>
</template>

<script>
    import TheHeader from "./TheHeader";
    import TheNavBar from "./TheNavBar";
    import TheLogoHeader from "./TheLogoHeader";

    export default {
        name: "TheDefault",
        components: {
            TheHeader,
            TheNavBar,
            TheLogoHeader
        },
    }
</script>

<style scoped>

</style>