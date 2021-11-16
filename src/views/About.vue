<template>
  <div class="row">
    <div class="flex md6 offset--md3">
      <va-card color="primary" gradient>
        <va-card-title class="display-2 text-center">About</va-card-title>
        <va-card-content class="text-left">
          <p>{{ text }}</p>
        </va-card-content>
      </va-card>
    </div>
    <div class="flex md6 offset--md3 lg6 offset--lg3 text-center">
      <span class="black"
        >Follow in Social Network <i class="uil uil-arrow-right display-6"></i
      ></span>
      <a
        href="https://www.linkedin.com/in/md-nazmus-saqib-khan-rsk/"
        target="_blank"
        class="display-6"
        ><i class="uil uil-linkedin"></i
      ></a>
      <a
        href="https://twitter.com/RatulSaqibKhan"
        target="_blank"
        class="display-6"
        ><i class="uil uil-twitter"></i
      ></a>
      <a
        href="https://www.youtube.com/channel/UCjTU7UBQN4Anh7k8l7C9EhA"
        target="_blank"
        class="display-6"
        ><i class="uil uil-youtube"></i
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      text: `I am a passionate web developer with a vast array of knowledge in many
          different front end and back end languages, responsive frameworks,
          databases, and best code practices. My objective is simply to be the
          best web developer that I can be and to contribute to the technology
          industry all that I know and can do. I am dedicated to perfecting my
          craft by learning from more seasoned developers, remaining humble, and
          continuously making strides to learn all that I can about development.
          While a student at the University of Rajshahi, I studied Mathematics,
          and I believe that my understanding of problem solving and complex
          algorithms are also skills that have and will continue to contribute
          to my overall success as a developer.`,
    };
  },
};
</script>
<style scoped>
.profile-badge--width-250 {
  width: 100% !important;
}
</style>