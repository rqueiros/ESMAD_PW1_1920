const vm = new Vue({
    el: "#intro",
    data: {
        name:"",
        age:0,
        genre: "feminino",
        degree:"",
        languages:[],
        motivation:""  
    },
    methods: {
        getReport() {
            // Calculate grade
            let grade = 0
            if(this.degree!="") {
                grade+=5
            }
            if(this.age >= 16 && this.age <= 22) {
                grade+=3
            } else if(this.age >= 22 && this.age <= 35) {
                grade+=5
            } else {
                grade+=1
            }
            grade = grade + (this.languages.length * 2)

            // Produce report based on a dialog element
            const dlgReport = document.querySelector("#dlgReport")
            dlgReport.innerHTML=
                `<p>
                    O candidato ${this.name}, 
                    de ${this.age} anos, 
                    ${this.degree=="" ? 'não tem uma licenciatura' : 'tem uma licenciatura em ' + this.degree}.<br>
                    ${this.languages.length===0 ? 'Não domina qualquer linguagem' : 'Domina as linguagens ' + this.languages}.<br>
                    A sua motivação para se candidatar a este emprego é ${this.motivation}.<br>
                    Pontuação final: ${grade}

                </p>`
                
                
            dlgReport.showModal()
        }
    }
})

