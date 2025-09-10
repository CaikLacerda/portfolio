<script setup lang="ts">
  import Hero from '@/components/Hero.vue';
  import Navbar from '@/components/Navbar.vue'
  import SocialMedia from '@/components/SocialMedia.vue'
  import About from '@/components/About.vue'
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="top-0 w-full flex flex-col justify-center p-10 items-center">
    <section class="h-screen">
      <Hero />
      <Navbar />
      <SocialMedia />
    </section>
    
    <hr class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

    <About />

    <hr class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

  </div>
  <Footer />
</template>