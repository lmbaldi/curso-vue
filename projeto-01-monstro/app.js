new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 0,
        monsterLife: 20,
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods: {

    },
    watch: {

    }
})