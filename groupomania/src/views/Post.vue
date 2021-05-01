<template>
  <div class="post">
   
  <Navbar />
  <Jumbo />
  <Posts />
  <SendPost />
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Jumbo from '@/components/Jumbo.vue'
import Posts from '@/components/Posts.vue'
import SendPost from '@/components/SendPost.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Post', 
  components: {
  Navbar, Jumbo, Posts, SendPost, Footer    
}
}
</script>