<template>
  <div class="home bg-primary">
    <Navbar />
    <Slider />
    <About />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Slider from '@/components/Slider.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home', 
  components: {
  Navbar, Slider, About, Footer    
}
}
</script>
