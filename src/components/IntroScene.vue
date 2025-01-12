<template>
  <section class="section-intro-main">
    <video
      autoplay
      muted
      loop
      playsinline
      loading="lazy"
      class="intro-background"
    >
      <source src="../../public/video/intro720p.webm" type="video/webm" />
    </video>
    <div class="logo-slogan-container">
      <img class="logo" src="../../public/img/logo.webp" alt="dummy" />
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroScene",
};
</script>
