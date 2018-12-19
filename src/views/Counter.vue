<template>
    <CounterComponent />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CounterComponent from '@/components/CounterComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    CounterComponent,
  },
})
export default class Counter extends Vue {}
</script>
