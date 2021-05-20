<template>
    <div class="Navbar">
<b-navbar toggleable="lg" type="dark" variant="primary">
    <a href="/"><img class="img-fluid logo" src="../assets/icon-left-font-monochrome-black.svg" aria-label="logo groupomania" alt="Logo groupomania"></a>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-person-fill" viewBox="2 1 10 13">
<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"><router-link to="/login" class="nav-link">Se connecter</router-link></b-nav-item>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"><router-link to="/signup" class="nav-link">S'inscrire</router-link></b-nav-item>
    </b-navbar-nav>

    </b-collapse>
</b-navbar>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    user: false
}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
    color: white;
}
.logo {
    max-height: 100px;
    max-width: 200px;
}
</style>