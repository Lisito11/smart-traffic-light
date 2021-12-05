const luces = document.querySelectorAll('.luces')
console.log(luces)

let contadorLuz = 0
let segundos = 1000

const mostrarLuz = () =>{
    luces[contadorLuz].className = 'luces'
    contadorLuz++;

    if(contadorLuz > 2) {
        contadorLuz = 0
    }
    const luzActual = luces[contadorLuz]
    luzActual.classList.add(luzActual.getAttribute('color'))    
}


setInterval(mostrarLuz,segundos)
