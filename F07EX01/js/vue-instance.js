const vm = new Vue({
    el: "#intro",
    data: {
        id: 0,
        continent: "all",
        country: "",
        cities: "",
        description: "",
        startDate: "",
        endDate: "",
        type: "holidays",
        photo: "",
        filterContinent:"",
        filterStartDate: "",
        filterEndDate: "",
        travels: []
    },
    methods: {
        // Get last travel id
        getLastId() {
            return this.travels.length ? this.travels[this.travels.length - 1].id : 0
        },
        // Add travel
        addTravel() {
            this.travels.push({
                id: this.getLastId() + 1,
                continent: this.continent,
                country: this.country,
                cities: this.cities,
                description: this.description,
                startDate: new Date(this.startDate),
                endDate: new Date(this.endDate),
                type: this.type,
                photo: this.photo
            })
        },
        // Remove travel based on its ID
        removeTravel(id) {
            this.travels = this.travels.filter(
                (travel) => travel.id !== id
            )
        },

        // Order by country
        compareCountry(a, b) {
            if(a.country < b.country) return -1
            if(a.country > b.country) return 1
            else return 0
        },
        orderByCountry() {
            this.travels.sort(this.compareCountry)
        },
        // Order by start date
        compareDate(a, b) {
            if(a.startDate < b.startDate) return -1
            if(a.startDate > b.startDate) return 1
            else return 0
        },
        orderByDate() {
            this.travels.sort(this.compareDate)
        }
    },
    computed: {
        // Returns a new array of travels based on the user's filter
        filteredTravels() {
            return this.travels.filter(
                (travel) => {
                    let filterContinentResult = true
                    let filterDatesResult = true
                    
                    // Filter continent
                    if(this.filterContinent!=="") {
                        filterContinentResult = travel.continent === this.filterContinent      
                    } 

                    // Filter dates                    
                    if(this.filterStartDate!=="" && this.filterEndDate!=="") {
                        filterDatesResult = 
                            travel.startDate >= new Date(this.filterStartDate) && 
                            travel.startDate <= new Date(this.filterEndDate)
                    }

                    // return the conjunction of the two filters
                    return filterContinentResult && filterDatesResult 

                }
            )
        }
    }
})
