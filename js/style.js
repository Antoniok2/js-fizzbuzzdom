const squareCont = document.getElementById("containersquare")

for (let i = 1; i <= 100; i++){

    // SE DIVISIBILE PER 3 E PER 5
    if (i % 3 === 0 && i % 5 === 0) {
        squareCont.innerHTML += 
        `<div class="square squarefizzbuzz">
            FizzBuzz
        </div>`

    // SE DIVISIBILE PER 3
    } else if (i % 3 === 0) {
        squareCont.innerHTML += 
        `<div class="square squarefizz">
            Fizz
        </div>`;

    // SE DIVISIBILE PER 5
    }  else if (i % 5 === 0) {
        squareCont.innerHTML += 
        `<div class="square squarebuzz">
            Buzz
        </div>`
    
    // ALTRIMENTI
    } else {
        squareCont.innerHTML += 
        `<div class="square">
            ${i}
        </div>`
    }
}