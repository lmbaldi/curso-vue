<template>
  <div id="app">
    <h2>Caculadora</h2>
    <Calculator />
  </div>
</template>

<script >
import Calculator from "./main/Calculator_old.vue";
export default {
  components: { Calculator },
};
</script>

<style >
@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto-Thin.ttf");
}

* {
  font-family: "Roboto", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}
</style>