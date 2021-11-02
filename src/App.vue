<template lang="pug">
  section(id="app")  
    vue-page-transition(name="fade-in-left")
      router-view

</template>

<script>
//import TopContext from './components/TopContext.vue'

export default {
  name: 'app'
}
</script>