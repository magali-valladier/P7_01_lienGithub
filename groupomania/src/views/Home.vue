<template>
  <div class="home">
    <Navbar />
    <Slider />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home', 
  components: {
  Navbar, Slider    
}
}
</script>
