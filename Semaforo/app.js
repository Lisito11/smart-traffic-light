const luces = document.querySelectorAll('.luces')

let contadorLuz = 0
let segundos = 0;

//Luz roja 50 segundos
//Luz verde 30 segundos
//Luz amarilla 10 segundos

const mostrarLuz = () =>{
    luces[contadorLuz].className = 'luces'
    contadorLuz++;

    if(contadorLuz > 2) {
        contadorLuz = 0
    }
    const luzActual = luces[contadorLuz]
    if (luzActual.getAttribute('color') == 'rojo') {
        segundos = 45000
    } else if (luzActual.getAttribute('color') == 'amarillo'){
        segundos = 10000
    }
     else if (luzActual.getAttribute('color') == 'verde'){
        segundos = 30000
    }

    luzActual.classList.add(luzActual.getAttribute('color'))
    setInterval(mostrarLuz,segundos)
    
}

window.setTimeout(mostrarLuz, 45000);


