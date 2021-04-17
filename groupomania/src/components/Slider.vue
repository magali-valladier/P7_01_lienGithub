<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ccc"
      style="text-shadow: 1px 1px 2px #000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide>
      <template  v-slot:img>
        <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/build-groupomania.jpg"
            alt="image slot"
          >
          </template>
      </b-carousel-slide>
      <b-carousel-slide>
      <template  v-slot:img>
        <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/slide-groupomania.png"
            alt="image slot"
          >
          </template>
      </b-carousel-slide>
      <b-carousel-slide>
      <template  v-slot:img>
        <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/slide-main.png"
            alt="image slot"
          >
          </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>