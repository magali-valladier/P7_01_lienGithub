<template>
  <div class="post">
   
  <Navbar />
  <Posts />
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Posts from '@/components/Posts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Post', 
  components: {
  Navbar, Posts, Footer    
}
}
</script>