const vm = new Vue({
    el: "#intro",
    data: {
        number: 0
    },
    methods: {
        up: function () {
            this.number = this.number + 1
        },
        down: function () {
            this.number = this.number - 1
        }
    },
    created: function () {
        console.log("created")
        if (localStorage.number) {
            this.number = parseInt(localStorage.number)
        }
    },
    mounted: function () {
        console.log("mounted")
    },
    updated: function () {
        console.log("updated")
        localStorage.setItem("number", this.number)
    }
})

