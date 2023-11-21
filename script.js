// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio 
// in console con il numero della cella cliccata.
const outputElement = document.querySelector(`div.output`)

function newSquare(){
    const newArticleEl = document.createElement(`artcile`)
    newArticleEl.classList.add(`square`)
    return newArticleEl;
}
for (let i = 1; i <= 100; i++){
    const element = newSquare();
    element.append(randomNumber(1, 100));
    outputElement.appendChild(element);
    element.addEventListener('click', function(){
     element.classList.toggle('clicked');})
}

function randomNumber(minNumber, maxNumber){
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}