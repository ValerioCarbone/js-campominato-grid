// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// - Creare strutture html( bottone e container)
// - Richiamare l'elemento html del bottone e assegnargli l'evento click 
const btnPlayDOMElement = document.getElementById('btn-play')

let containerDOMElement = document.querySelector('.container')

btnPlayDOMElement.addEventListener('click', function () {

    containerDOMElement = ('')

    // - Creare una funzione con un ciclo for che generi una griglia    
    for (let i = 1; i <= 100; i++) {

        const htmlString = ` <div class = "cell">${i}</div>`

        // - Inserire gli elementi creati nell'html    
        containerDOMElement.innerHTML += htmlString

    }
    // - Richiamare per classe tali elementi    
    const gridDOMElements = document.querySelectorAll('.cell')

    // - Creare un for che cicli ogni elemento presente nella variabile precedentemente creata e assegnare ad ognuno un numero crescente che sarà uguale all'index del ciclo + 1 e agno ogni elemento aggiungere l'html con il numero rispettivo

    for (let i = 0; i < gridDOMElements.length; i++) {

        let cellDOMElement = gridDOMElements[i]


        // - Creare un event listener che al click del singolo bottone aggiunga una classe al singolo elemento cliccato e stampi in console l 'html dell'elemento che abbia creato precedentemente

        cellDOMElement.addEventListener('click', function () {
            cellDOMElement.classList.add('bg-light-blue')
            console.log(cellDOMElement.innerHTML)
        })

    }

})


