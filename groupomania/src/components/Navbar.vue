<template>
    <div class="Navbar">
<b-navbar toggleable="lg" type="dark" variant="info">
    <img src="../assets/logo-groupomania.png" href="#" aria="logo groupomania" fluid alt="Logo groupomania">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
        <b-nav-item size="sm" class="mr-sm-2" href="#">Se connecter</b-nav-item>
        <b-nav-item size="sm" class="mr-sm-2" href="#">S'inscrire</b-nav-item>
    </b-navbar-nav>

    </b-collapse>
</b-navbar>
</div>
</template>

<script>
export default {
    name: 'Navbar',

}
</script>

<style scoped>

</style>