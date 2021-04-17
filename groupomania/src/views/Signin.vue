<template>
  <div class="signin">
   
  <Navbar />
  <Login />
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Login from '@/components/Login.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Signin', 
  components: {
  Navbar, Login, Footer    
}
}
</script>