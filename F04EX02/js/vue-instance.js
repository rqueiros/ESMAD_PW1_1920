const vm = new Vue({
    el: "#intro",
    data: {
       schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
       char: ""        
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

