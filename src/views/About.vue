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
          to my overall success as a developer.`
    }
  }
};
</script>
<style scoped>
.profile-badge--width-250 {
  width: 100% !important;
}
</style>