const vm = new Vue({
    el: "#intro",
    data: {
        person: {firstName:"Rui", lastName:"Silva", age:23}
    },
    methods: {
        dataPerson: function () {
            console.log(`Method--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`)
        }
    },
    computed: {
        dataPersonComputed: function () {
            console.log(`PC--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`)
        }
    },
    created: function () {
        console.log("EVENTO: CRIAÇÃO")        
    },
    mounted: function () {
        console.log("EVENTO: MONTAGEM")        
    },
    updated: function () {
        console.log("EVENTO: ATUALIZAÇÃO")        
    }
})

