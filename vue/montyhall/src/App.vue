<template>
  <div id="app">
    <h2>Problema de Monty Hall</h2>
    <Gift />
  </div>
</template>

<script>
import Gift from "@/components/Gift";
export default {
  name: "App",
  components: { Gift },
};
</script>

<style >
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: #fff;
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}
</style>