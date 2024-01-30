
window.onload = () => {
    
    console.log("Hola from main.js")

    let guestControls = document.querySelectorAll(".guest-controls > button")

    console.log(guestControls)

    let guestCounter = document.querySelector(".visitante")

    let guestCounterH1 = guestCounter.lastChild.previousElementSibling

    guestControls.forEach( btn => {

        btn.addEventListener('click', () => {
            let counter = parseInt(guestCounterH1.innerText)
            counter += parseInt(btn.innerText)
            console.log(counter)
            guestCounterH1.innerText = counter
        })
    })

}