<template>
  <div class="counter">
    <CounterChanger />
    <CounterViewer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CounterChanger from '@/components/CounterChanger.vue'; // @ is an alias to /src
import CounterViewer from '@/components/CounterViewer.vue'; // @ is an alias to /src

@Component({
  components: {
    CounterChanger, CounterViewer,
  },
})
export default class CounterComponent extends Vue {

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
