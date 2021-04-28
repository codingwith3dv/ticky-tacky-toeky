<template>
  <button class="sq">{{ sqval }}</button>
</template>

<script>
  export default {
    name: "Cell", 
    props: {
      sqval: String, 
    }, 
  }
</script>

<style>
  .sq {
    width: 100px;
    height: 100px;
  }
</style>