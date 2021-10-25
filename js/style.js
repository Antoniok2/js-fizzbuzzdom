const squareCont = document.getElementById("containersquare")

for (let i = 1; i <= 100; i++){
    squareCont.innerHTML += 
    `<div class="square">
        ${i}
    </div>`
    
}