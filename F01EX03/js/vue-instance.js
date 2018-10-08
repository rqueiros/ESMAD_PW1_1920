const vm = new Vue({
    el: "#intro",
    data: {
        weight: 70
    },
    beforeCreate: function () {
        console.log("beforeCreate")
    },
    created: function () {
        console.log("created")
    },
    beforeMount: function () {
        console.log("beforeMount")
    },
    mounted: function () {
        console.log(`mounted: ${this.weight}`)
    },
    beforeUpdate: function () {
        console.log(`beforeUpdate: `)
    },
    updated: function () {
        console.log(`updated: ${this.weight}`)        
    },
    beforeDestroy: function () {
        console.log("beforeDestroy")
    },
    destroyed: function () {
        console.log("destroyed")
    }
})