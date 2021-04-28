<template>
  <Board/>
</template>

<script lang="ts">
import Board from '@/components/Board.vue'; // @ is an alias to /src
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    Board,
  },
})
export default class Home extends Vue {}
</script>
