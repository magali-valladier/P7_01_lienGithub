<template>
  <div class="signin">
   
  <Navbar />
  <Sign />
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sign from '@/components/Sign.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Signin', 
  components: {
  Navbar, Sign, Footer    
}
}
</script>