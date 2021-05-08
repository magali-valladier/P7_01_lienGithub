<template>
  <div class="post">
   
  <NavbarPost />
  <Jumbo />
  <Posts />
  <Footer />
  </div>
</template>

<script>
import NavbarPost from '@/components/NavbarPost.vue'
import Jumbo from '@/components/Jumbo.vue'
import Posts from '@/components/Posts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AddPost', 
  components: {
  NavbarPost, Jumbo, Posts, Footer    
}
}
</script>