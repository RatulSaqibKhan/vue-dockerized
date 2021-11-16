<template>
  <div class="row">
    <div class="flex md6 offset--md3 lg6 offset--lg3">
      <va-card color="primary" gradient>
        <div class="p-1">
          <h1>
            <a href="https://codewithrsk.com" target="_blank">{{ msg }}!</a>
          </h1>
        </div>
        <va-card-content>
          <p>{{ text }}</p>
        </va-card-content>
      </va-card>
    </div>
    <div class="flex md6 offset--md3 lg6 offset--lg3 text-center">
      <span class="black">See in github <i class="uil uil-arrow-right display-6"></i></span><a
        href="https://github.com/RatulSaqibKhan"
        target="_blank"
        class="display-6"
        ><i class="uil uil-github"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      text: "Hi! I'm Md Nazmus Saqib Khan.I am a fullstack Web Engineer!",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-1 {
  padding: 1rem;
}
</style>
