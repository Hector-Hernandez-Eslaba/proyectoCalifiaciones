let calificaciones = [4, 6, 3, 8, 3];
let newCalificaciones = [];

function datosAlumno(){
    const nombre = document.querySelector("#Nombre").value;
    const apellido1 = document.querySelector("#apellido1").value;
    const apellido2 = document.querySelector("#apellido2").value;
    const grado = document.querySelector("#grado").value;
    
    alert(nombre + apellido1 + apellido2 + grado);
}

function enviarCalifiaciones(){

    const mate = document.querySelector("#Matematicas").value;
    const espa = document.querySelector("#Espanol").value;
    const infor = document.querySelector("#Informatica").value;
    const histo = document.querySelector("#Historia").value;
    const ing = document.querySelector("#Ingles").value;
    
    newCalificaciones.push(mate);
    newCalificaciones.push(espa);
    newCalificaciones.push(infor);
    newCalificaciones.push(histo);
    newCalificaciones.push(ing);
    
    console.log(newCalificaciones);
}


function cargarCalificaciones(){
    const lista = document.querySelector('#listaCalificaciones');
    console.log(lista)
    for (const muestraCalificaiones of newCalificaciones) {
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
        calcularPromedio += newCalificaciones[i];
    }
    
    let promedioFinal = (calcularPromedio / 5)
    
    console.log(promedioFinal)
}

function notaMasAlta(){
   let notaAlta = 0;
   let i = 0;
   while(i < 5){
        if(newCalificaciones[i] > notaAlta){
            notaAlta = newCalificaciones[i];
        }
        i++;
   }
   console.log(notaAlta)
}


function aplazo(){
    let reprobo = "No"
    let i = 0;
    do {
        if(newCalificaciones[i] < 4){
            reprobo = "si"
            break;
        }
        i++
    }while(i < 4);

    console.log(reprobo)
}