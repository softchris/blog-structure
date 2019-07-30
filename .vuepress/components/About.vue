<template>
  <div class="box">
    <h2>{{title}}</h2>
    {{message}}<button @click="click">Hi</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'hi about page'
    }
  },
  methods: {
    click() {
      alert('hi')
    }
  },
  props: ['title']
}
</script>
<style scoped>
 .box {
   padding: 20px;
   margin: 2px;
   box-shadow: 0 0 10px black;
 }
</style>


