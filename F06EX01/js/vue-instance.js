
const vm = new Vue({
    el: "#intro",
    data: {
        task: "",
        type: "personal",
        filterType: "all",
        tasks: []
    },
    created() {
        if (localStorage.tasks) {
            this.tasks = JSON.parse(localStorage.getItem("tasks"))    
        }        
    },
    methods: {
        addTask() {

            this.tasks.push({ name: this.task, type: this.type })
            // Save local storage
            localStorage.setItem("tasks",JSON.stringify(this.tasks))
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
    },
    computed: {
        filteredTasks() {
            return this.tasks.filter(
                (task) => task.type === this.filterType || this.filterType == "all"
            )
        }
    }
})

