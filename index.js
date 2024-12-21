let calificaciones = [4, 6, 3, 8, 3];


function cargarCalificaciones(){
    const lista = document.querySelector('#listaCalificaciones');
    console.log(lista)
    for (const muestraCalificaiones of calificaciones) {
        const listaCali = document.createElement('li');
        listaCali.innerText = muestraCalificaiones;
        lista.appendChild(listaCali);
        listaCali.classList.add("listaDeCalificaciones")
        
        console.log(muestraCalificaiones);
    }
}

function promedio(){
    let calcularPromedio = 0;
    
    for(i=0; i < 5; i++){
        calcularPromedio += calificaciones[i];
    }
    
    let promedioFinal = (calcularPromedio / 5)
    
    console.log(promedioFinal)
}

function notaMasAlta(){
   let notaAlta = 0;
   let i = 0;
   while(i < 5){
        if(calificaciones[i] > notaAlta){
            notaAlta = calificaciones[i];
        }
        i++;
   }
   console.log(notaAlta)
}


function aplazo(){
    let reprobo = "No"
    let i = 0;
    do {
        if(calificaciones[i] < 4){
            reprobo = "si"
            break;
        }
        i++
    }while(i < 4);

    console.log(reprobo)
}