const vm = new Vue({
    el: "#app",
    data: {
        castles: [],
        form: {
            name: "",
            link: "",
            editId: 0,
            editName: "",
            editLink: "",
            filterName: ""
        }
    },
    created() {
        this.castles = [{
            id: 1,
            name: "Castelo de Bragança",
            link: "https://i1.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/11021478_789330187780883_1992398901395585075_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 2,
            name: "Almourol",
            link: "https://i1.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/11046854_793447744035794_6644364760515171458_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 3,
            name: "Castelo de Marvão",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/10649042_702725743107995_1458143537900302356_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 4,
            name: "Castelo de Montalegre",
            link: "https://i1.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/11021309_786097224770846_4490230410016196052_o-1-e1485957738973.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 5,
            name: "Castelo de Sortelha",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/1510562_743660549014514_1798999603922685904_n.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 6,
            name: "Castelo de Arraiolos",
            link: "https://i0.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/10981073_787377341309501_2130083883941642881_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 7,
            name: "Castelo de Santa Maria da Feira",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/10993133_785137361533499_2834769696870331489_o-1.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 8,
            name: "Castelo de Lindoso",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/10854966_780229555357613_3783697791888632461_o.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 9,
            name: "Castelo dos Mouros",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/casteloguim-1-e1446910277358.jpg?resize=640%2C415",
            year: 1000
        },
        {
            id: 10,
            name: "Castelo de Guimarães",
            link: "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2015/04/casteloguim-1-e1446910277358.jpg?resize=640%2C415",
            year: 1000
        }
        ]
    },


    methods: {
        // Get last castle id
        getLastId() {

            if (this.castles.length > 0)
                return this.castles[this.castles.length - 1].id
            else
                return 0
        },

        // Add castle
        addCastle() {
            this.castles.push({
                id: Number(this.getLastId()) + 1,
                name: this.form.name,
                link: this.form.link
            })
        },
        // Edit castle based on its ID
        editCastle(id) {
            document.getElementById("editCastleDialog").showModal()

            const castle = this.castles.filter(castle => castle.id === id)[0]
            this.form.editId = castle.id
            this.form.editName = castle.name
            this.form.editLink = castle.link
        },

        updateCastle() {
            this.castles.map(
                (castle) => {
                    if (castle.id === this.form.editId) {
                        castle.name = this.form.editName
                        castle.link = this.form.editLink
                    }
                }
            )
            document.getElementById("editCastleDialog").close()
        },

        // View castle based on its ID
        viewCastle(id) {
            this.form.link =
                this.castles.filter(
                    (castle) => castle.id === id)[0].link
            document.getElementById("viewCastleDialog").showModal()

        },
        // Close view of the castle
        closeViewCastle() {
            document.getElementById("viewCastleDialog").close()
        },

        // Remove castle based on its ID
        removeCastle(id) {
            this.castles = this.castles.filter(
                (castle) => castle.id !== id
            )
        },
        // Order by name
        compareName(a, b) {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            else return 0
        },
        orderByName() {
            this.castles.sort(this.compareName)
        },

        // Array manipulations
        manipulateArray(op) {
            //let response = ""
            switch (op) {
                case "ei":
                    // Remove the word 'Castelo' from the castle's name
                    const str = "Castelo"
                    this.castles = this.castles.map(
                        (castle) => {
                            if (castle.name.indexOf(str) !== -1) {
                                castle.name = castle.name.substring(castle.name.indexOf(str) + str.length)
                            }
                            return castle
                        }
                    )
                    break;
                case "eii":
                    // Calculate the average date for the castles's creation
                    const averageDate = this.castles.reduce(
                        (sum, cur) => sum + cur.year, 0) / this.castles.length
                    console.log(averageDate)
                    break;
                case "eiii":
                    // See if there is any castle which includes the word 'Marvão' in his name
                    const existMarvaoCastle = this.castles.some(
                        (castle) => castle.name.includes("Marvão"))
                    console.log(existMarvaoCastle)
                    break;
                case "eiv":
                    // Get all castles that start by the letter A
                    const letter = "A"
                    console.log(this.castles.filter(
                        (castle) => castle.name.startsWith(letter)))
                    break;
                case "ev":
                    // Verify that all castles have the link fulfilled                    
                    console.log(this.castles.every(
                        (castle) => castle.link.length !== 0))
                    break;
                case "evi":
                    // NÃO IMPLEMENTADO                                    
                    break;
                case "evii":
                    const name = "Castelo de Santa Maria da Feira"
                    console.log(this.castles.find(
                        (castle) => castle.name === name
                    ))
                    break;
                case "eviii":
                    const newName = "Castelo de Arraiolos"
                    console.log(this.castles.findIndex(
                        (castle) => castle.name === newName
                    ))
                    break;
                case "fi":
                    this.castles = this.castles.map(
                        (castle) => castle.name
                    )
                    console.log(this.castles.join("-"))
                    break;
                case "fii":
                    this.castles = this.castles.filter(
                        (castle) => castle.year > 1950                        
                    )
                    console.log(this.castles)
                    break;

                default:
                    break;
            }
        }

    },
    computed: {
        // Returns a new array of castles based on the user's filter
        filteredCastles() {
            return this.castles.filter(
                (castle) => {
                    let filterCastleResult = true
                    if (this.form.filterName !== "") {
                        filterCastleResult = castle.name.includes(this.form.filterName)
                    }
                    return filterCastleResult
                }
            )
        }

    }
})