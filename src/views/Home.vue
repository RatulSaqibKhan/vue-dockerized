<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 300px; height:auto; margin-bottom: 1.5rem;">
    <HelloWorld msg="Welcome to CodeWithRSK"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
