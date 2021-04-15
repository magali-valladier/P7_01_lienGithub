<template>
  <div class="about">
   
  <Navbar />
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Post', 
  components: {
  Navbar, Footer    
}
}
</script>