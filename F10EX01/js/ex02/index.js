
// Component registration
Vue.component("game-soccer-card", {
    props: ["game"],
    template: 
    `
    <div class='col-sm-4'>
    <div class="card" style="width: 18rem;">
        <img v-bind:src="game.stadiumLink" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">
                {{game.stadiumName}}
            </h3>
            <h5>
                {{getResult(game)}}
            </h5>
            <p class="card-text" v-for="goal in game.goals">
                {{goal.goalMinute}}' {{goal.playerName}}
            </p>
        </div>
    </div>
    </div>
    `,
    methods: {
        getResult(game) {
            let goals1, goals2
            // Cálculo dos golos da 1ª equipa
            goals1 = game.goals.filter(
                goal => game.teamName1 === goal.playerTeam
            ).length
            // Cálculo dos golos da 2ª equipa
            goals2 = game.goals.filter(
                goal => game.teamName2 === goal.playerTeam
            ).length

            return `
                ${game.teamName1} ${goals1} - ${goals2} ${game.teamName2} 
            `


        }
    }
           
})

// Instância Vu
const vm = new Vue({
    el: "#app",
    data: {
        games: []
    },
    created: function() {
        this.games = 
        [
            {
                id: 1,
                stadiumName:"Estádio da Luz",
                stadiumLink: "https://cdn.record.pt/images/2018-06/img_920x519$2018_06_26_20_17_25_1415170.jpg",
                teamName1: "SLBenfica",
                teamName2: "FCPorto",
                goals: [
                    {playerName: "Jonas", playerTeam:"SLBenfica", goalMinute: 22},
                    {playerName: "Pizzi", playerTeam:"SLBenfica", goalMinute: 90},
                ]                
            },
            {
                id: 2,
                stadiumName:"Estádio de Alvalade",
                stadiumLink: "https://thumbs.web.sapo.io/?epic=ZDFj45ME0wYwbQQ4VF/uvjyAZPcVzJcmElWJkQ/iVeyXgrbAkpMr9tH32N4qwN8P9e+dTYhj460RLl/PVk6eTgB05PP7JI3VgyFB2ROABv/KfRA=&W=800&H=0&delay_optim=1",
                teamName1: "SCSporting",
                teamName2: "SCEstoril",
                goals: [
                    {playerName: "Bas Dost", playerTeam:"SCSporting", goalMinute: 93}                    
                ]                
            }
            ,
            {
                id: 2,
                stadiumName:"Estádio de Alvalade",
                stadiumLink: "https://thumbs.web.sapo.io/?epic=ZDFj45ME0wYwbQQ4VF/uvjyAZPcVzJcmElWJkQ/iVeyXgrbAkpMr9tH32N4qwN8P9e+dTYhj460RLl/PVk6eTgB05PP7JI3VgyFB2ROABv/KfRA=&W=800&H=0&delay_optim=1",
                teamName1: "SCSporting",
                teamName2: "SCEstoril",
                goals: [
                    {playerName: "Bas Dost", playerTeam:"SCSporting", goalMinute: 93}                    
                ]                
            }
            ,
            {
                id: 2,
                stadiumName:"Estádio de Alvalade",
                stadiumLink: "https://thumbs.web.sapo.io/?epic=ZDFj45ME0wYwbQQ4VF/uvjyAZPcVzJcmElWJkQ/iVeyXgrbAkpMr9tH32N4qwN8P9e+dTYhj460RLl/PVk6eTgB05PP7JI3VgyFB2ROABv/KfRA=&W=800&H=0&delay_optim=1",
                teamName1: "SCSporting",
                teamName2: "SCEstoril",
                goals: [
                    {playerName: "Bas Dost", playerTeam:"SCSporting", goalMinute: 93}                    
                ]                
            }

        ]
    }
})
