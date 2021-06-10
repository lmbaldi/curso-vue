<template>
  <div>
      <h2>{{ global }}</h2>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add" />
  </div>
</template>

<script>
import frutasMixin from "./frutasMixin.js"

export default {
  mixins: [frutasMixin],
  created() {
    // eslint-disable-next-line no-console
    console.log("Created - Frutas.vue!");
  },
};
</script>


<style >
</style>