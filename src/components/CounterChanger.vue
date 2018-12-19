<template>
  <div class="counterChanger">
    <b-container>
      <b-row>
        <b-col>
          <b-button
            size="lg"
            variant="primary"
            class="btn-block"
            v-on:click="incrementCount()"
          >++++++</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button
            size="lg"
            variant="danger"
            class="btn-block"
            v-on:click="decrementCount()"
          >------</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CounterChanger extends Vue {
  incrementCount() {
    this.$store.commit('increment');
  }

  decrementCount() {
    this.$store.commit('decrement');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
