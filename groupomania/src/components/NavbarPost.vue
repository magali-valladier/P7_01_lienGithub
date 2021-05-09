<template>
    <div class="Navbar">
<b-navbar toggleable="lg" type="dark" variant="primary">
    <a href="/"><img src="../assets/icon-left-font-monochrome-black.svg" aria-label="logo groupomania" img-fluid alt="Logo groupomania">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle></a>

    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"><router-link to="/post" class="nav-link">Tous les posts</router-link></b-nav-item>
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"><router-link to="/post/:id" class="nav-link">Ajouter un post</router-link></b-nav-item>
    </b-navbar-nav>

    </b-collapse>
</b-navbar>
</div>
</template>

<script>
export default {
    name: 'NavbarPost',
    
}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
    color: white;
}
</style>