<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretiva <strong>v-html</strong>'"></p>

    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <!-- <p v-destaque>Usando diretiva personalizada</p> -->
    <p v-destaque="'red'">Usando diretiva personalizada</p>

    <p v-destaque:fundo="'lightblue'">Usando diretiva personalizada</p>

    <p v-destaque.atrasar="cor">Usando diretiva personalizada</p>

    <p v-destaque:fundo.atrasar="'DarkGrey'">Usando diretiva personalizada</p>

    <p v-destaque-local:fundo.atrasar.alternar="'DeepSkyBlue'">
      Usando diretiva personalizada
    </p>

    <p v-destaque-local:fundo.atrasar.alternar="{cor1: 'PaleTurquoise', cor2: 'PaleGoldenrod', atraso: 2000, intervalo: 2000 }">
      Usando diretiva personalizada
    </p>

    <p v-destaque-local.atrasar="{cor1: 'red',  atraso: 3000}">Usandoxxxx diretiva personalizada</p>
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    "destaque-local": {
      // eslint-disable-next-line no-unused-vars
      bind(el, binding, vnode) {
        const aplicarCor = (cor) => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor
          } else {
            el.style.color = cor
          }
        }
        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso;

        const cor1 = binding.value.cor1
        const cor2 = binding.value.cor2
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1
              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(binding.value.cor1);
          }
        }, atraso);
      }
    }
  },
  data() {
    return {
      cor: "blue",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
