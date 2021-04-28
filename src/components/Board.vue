<template>
  <div>
    <button @click = "reset()">Reset</button>
    <h2 v-if=winner>The winner is {{ winner }}</h2>
    <h2 v-else>Current Player {{ currentPlayer }}</h2>
    <div class="boardContainer">
      <div v-bind:style="{
        display: 'grid', 
        width: '100%',
        gridTemplateColumns: 'repeat(' + boardSize + ', 1fr)',
        gridGap: '.5vw',
        boxSizing: 'border-box' 
      }">
        <Cell
          v-for="(val, index) in cellsArray"
          :key="index"
          @click="move(index)"
          :sqval="val"
          />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Cell from '@/components/Cell.vue';
  import WOL from '@/brain/gameLogics/winnerOrLosser.ts';
  import { ref, computed } from 'vue';
  export default {
    components: {
      Cell, 
    },
    setup: function() {
      let boardSize = ref(3);
      let xTurn = ref(true);
      let whoIsWinner = new WOL();
      let currentPlayer = computed(() => (xTurn.value ? "X" : "O"))
      
      let cellsArray = ref(
        Array(boardSize.value * boardSize.value).fill(null)
      );
      
      let winner = computed(() => whoIsWinner.checkWinner(cellsArray.value));
      
      const move = (index: number) => {
        if(cellsArray.value[index] || winner.value) return
        cellsArray.value[index] = (xTurn.value ? "X" : "O")
        xTurn.value = !xTurn.value
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
        xTurn, 
        winner, 
        currentPlayer
      }
    }, 
  }
</script>

<style scoped>
.boardContainer {
  display: grid;
  place-items: center;
  width: 100%;
}
@media (min-width: 720px) {
  .boardContainer {
    width: 50vw;
  }
}
</style>