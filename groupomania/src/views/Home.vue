<template>
  <div class="home">
    <Navbar />
    <Slider />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home', 
  components: {
  Navbar, Slider, Footer    
}
}
</script>
