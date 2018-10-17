const vm = new Vue({
    el: "#intro",
    data: {
        person: {
            firstName: "Rui",
            lastName: "Silva",
            age: 22,
            balance: 4432           
        },
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
          ],
          object: {
            firstName: "John",
            lastName: "Doe",
            age: 30
          }
     
    },
    methods: {
        dataPerson: function () {
            console.log(`METHOD--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`)
        }
    },
    computed: {
        dataPersonComputed: function () {
            console.log(`COMPUTED--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`)
        },
        fullNameComputed: function () {
            console.log(`${this.person.firstName} ${this.person.lastName}`)
        }
    },
    watch: {
        'person.age'(newAge, oldAge) {
            console.log(`idade alterada de ${oldAge} para ${newAge}!`)
        }
    },
    filters: {
        formatBalance: function(value) {
            return `${(value/100).toFixed(2)} €`
        }
    }
})