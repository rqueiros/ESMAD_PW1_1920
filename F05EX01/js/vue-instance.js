const vm = new Vue({
    el: "#intro",
    data: {
       msg : "Programação Web I"
    },
    methods: {
        showMessage(event) {
            console.log(event.target.tagName)
            console.log(event.type)
            alert(this.msg)                     
        }
    }
})

