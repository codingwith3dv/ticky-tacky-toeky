<template>
  <button class="sq sq-def" v-if="!sqval">{{ sqval }}</button>
  <button class="sq sq-x" v-else-if="sqval == 'X'">{{ sqval }}</button>
  <button class="sq sq-o" v-else-if="sqval == 'O'">{{ sqval }}</button>
</template>

<script>
  export default {
    name: "Cell", 
    props: {
      sqval: String, 
    }, 
  }
</script>

<style scoped>
  .sq {
    min-width: 100%;
    aspect-ratio: 1;
    outline: none;
    border: 1px solid black;
    font-size: 3rem;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px;
  }
  .sq-def {
    background-color: #cc13ff;
  }
  .sq-def:hover {
    background-color: #cc13ff88;
  }
  .sq-x {
    background-color: #137cff;
  }
  .sq-x:hover {
    background-color: #137cff88;
  }
  .sq-o {
    background-color: #ac00ff;
  }
  .sq-o:hover {
    background-color: #ac00ff88;
  }
</style>