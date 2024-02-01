
window.onload = () => {

    const configScoreBoardforTeam = (teamName) => {

        /* Valores de Seleccionar o Crear elementos  */

        let teamControls = document.querySelectorAll(`.${teamName}-controls > button`)

        let teamCounterH1 = document.getElementById(`${teamName}-h1`)


         /* Modificas elementos  */

        teamControls.forEach( button => {
    
            button.addEventListener('click', () => {

                let counter = parseInt( teamCounterH1.innerText )

                counter = counter + parseInt(button.innerText)

                teamCounterH1.innerText = counter
            })
        })

        // devolver cosas

    } 

    configScoreBoardforTeam("home")
    
    configScoreBoardforTeam("guest")

}