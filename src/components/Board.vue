<template>
  <div>
    <button @click = "reset()">Reset</button>
    <div v-bind:style="{
      display: 'grid', 
      gridTemplateColumns: 'repeat(' + boardSize + ', 1fr)',
      gridGap: '1vw'
    }">
      <button
        class="boardColumn"
        v-for="(val, index) in cellsArray"
        :key="index"
        @click="move(index)"
        >
        {{ val }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import Cell from '@/components/Cell.vue';
  import { ref } from 'vue';
  export default {
    components: {
      Cell, 
    },
    setup() {
      let boardSize = ref(3);
      
      let cellsArray = ref(
        Array(boardSize.value * boardSize.value).fill(null)
      );
      
      const move = (index: number) => {
        cellsArray.value[index] = 'O'
      }
      const reset = () => {
        cellsArray.value = 
          Array(boardSize.value * boardSize.value).fill(null)
      }
      return {
        boardSize, 
        cellsArray, 
        move, 
        reset, 
      }
    }, 
  }
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1vw;
}
.boardColumn {
  min-width: 100%;
  aspect-ratio: 1;
}
</style>