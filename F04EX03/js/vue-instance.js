const vm = new Vue({
    el: "#intro",
    data: {
       teams: [
            {name: "benfica", year: 1910},
            {name: "porto", year: 1912},
            {name: "sporting", year: 1914}
       ]
    },
    methods: {
        addSchool(school) {
            if (!this.schools.includes(school)) {
                this.schools.push(school)    
            }            
        },
        filterSchool(char) {
            this.char = char            
        }
    },
    computed: {
        filterSchools() {
            return this.schools.filter(
                (school) => school.startsWith(this.char)
            )
        }
    }
})

