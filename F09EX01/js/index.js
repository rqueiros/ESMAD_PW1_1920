
// Component registration
Vue.component("my-jumbo", {
    data: function () {
        return {
            buttonText: "OLe"
        }
    },
    props: ["title", "subtitle","body"],
    template: `<div class="jumbotron">
        <h1 class="display-4">{{title}}</h1>
        <p class="lead">{{subtitle}}</p>
        <hr class="my-4">
        <p>{{body}}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">{{buttonText}}</a>
        </div>`
})


const vm = new Vue({
    el: "#app"
})
