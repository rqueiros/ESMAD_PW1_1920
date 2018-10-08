const vm = new Vue({
    el: "#intro",
    data: {
        firstName: "Ricardo",
        lastName: "Queirós",
        age: 43
    },
    methods: {
        fullName: function() {
            return `${this.firstName} ${this.lastName}`
        }
    }
})