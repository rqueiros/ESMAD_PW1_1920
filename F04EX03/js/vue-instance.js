const vm = new Vue({
    el: "#intro",
    data: {
       teams: [
            {name: "benfica", year: 1910, location: "Lisboa"},
            {name: "porto", year: 1912, location: "Porto"},
            {name: "sporting", year: 1914, location: "Lisboa"}
       ],
       location : ""
    },
    methods: {
        addTeam(name, year) {
            this.teams.push({name: name, year: year})                     
        },
        filterTeams(location) {
            this.location = location
        }

    },
    computed: {
        listFilterTeams() {
            return this.teams.filter(
                 (team)  => team.location === this.location 
            )
        }
    }
})

