new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        }, 

        attack(special) {
            //testes
            this.hurt('monsterLife',5,10, true)//ferir o monstro
            this.hurt('playerLife',7,12, false)//ferir o jogador
            //console.log(special, this.getRandom(5,10))
        },

        hurt(atr, min, max, special){
          const plus = special ? 5 : 0
          const hurt = this.getRandom(min + plus, max + plus)
          this[atr] = Math.max(this.playerLife - hurt, 0)  //math.max para evitar numero negativo
        },

        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
    watch: {
        hasResult(value) {
            if(value) this.running = false
        }
    }
})