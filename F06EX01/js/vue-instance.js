const vm = new Vue({
    el: "#intro",
    data: {
        id:0,
        task: "",
        type: "personal",
        filter: "all",
        tasks: []
    },
    created() {
        // Add listener to save tasks only when the tab closes
        window.addEventListener('unload', this.saveStorage)
        // Get tasks from the localstorage
        if (localStorage.getItem("tasks")) {
            this.tasks = JSON.parse(localStorage.getItem("tasks"))
        }
    },

    methods: {
        getLastId() {
            if(this.tasks.length)
                return this.tasks[this.tasks.length-1].id
            else
                return 0
        },
        // Add unique tasks
        addTask() {
            if (!this.tasks.some((task) => task.name === this.task)) {
                this.tasks.push(
                    { 
                        id: this.getLastId() + 1,
                        name: this.task, 
                        type: this.type 
                    }
                )
            } else {
                alert("The task is already added!")
            }
        },
        // Remove task by its position in the array
        removeTask(id) {
            
            this.tasks = this.tasks.filter(
                (task) => task.id !== id
            )

            
        },
        // Save tasks in the localstorage
        saveStorage() {            
            localStorage.setItem("tasks",JSON.stringify(this.tasks))
        }
    },
    computed: {
        // Returns a new array of tasks based on the user's filter
        filteredTasks() {
            return this.tasks.filter(
                (task) => task.type === this.filter || this.filter == "all"
            )
        }
    }
})
