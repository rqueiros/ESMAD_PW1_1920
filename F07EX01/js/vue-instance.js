const vm = new Vue({
    el: "#intro",
    data: {
    id:0, 
       continent: "all",
       country:"",
       cities:"",
       description:"",
       startDate:"",
       endDate:"",
       type:"holidays",
       photo:"",
       travels: []
    },
    methods: {
        // Add travel
        addTravel() {
            this.travels.push({
                id:this.travels.length + 1,
                continent: this.continent,
                country: this.country,
                cities: this.cities,
                description: this.description,
                startDate: this.startDate,
                endDate: this.endDate,
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
    },
    computed: {
        // Returns a new array of travel based on the user's filter
        filteredTravels() {
            return this.travels.filter(
                (travel) => travel.continent === this.continent || this.continent == "all"
            )
        }
    }
})
