// console.log("hola probando archivo repaso")


// // alert("hola soy js vengo a hacer algo dinamico")


// var tituloPrincipal = document.getElementById('tituloprincipal')

// // var edad = Number(prompt("ingrese su edad"))
// // var nombre = prompt("ingrese su nombre")



// // if(edad>18 && nombre=="edgar"){
// //     tituloPrincipal.textContent = "Manipulando el Dom 1" 
// // }else {

// //     tituloPrincipal.textContent = "Manipulando el Dom 2"
// //     tituloPrincipal.style.color = "red"
// //     tituloPrincipal.style.display = "none" // inline, inline-block, block
// // }

// var usuarioPremium = "eze"

// // var ingresoUsuario = prompt("ingrese su usuario")


// var mostrarh2 = document.getElementById("subtitulohtml")

// if(usuarioPremium==ingresoUsuario){

//     mostrarh2.style.display = 'inline'
//     tituloPrincipal.style.backgroundColor = "red"

// }else{

//    // mostrarh2.style.display = 'inline'
//     mostrarh2.textContent = "Usuario No Permitido "

// }


//eventos...onclick... on dbclick..mouseover .. onfocus.. onchange..onblur.. onsubmit

var cambiarCaja2 = document.getElementById("caja2")

var cambiarCaja1 = document.getElementById("caja1")

console.log(cambiarCaja2)
console.log(cambiarCaja1)

// cambiarCaja1.style.backgroundColor = "#7052ff"
// cambiarCaja1.style.color = "green"

//#7052ff

function cambiarColorC2(){

    cambiarCaja2.style.backgroundColor = "red"
}

function cambiarColorC1(){

    cambiarCaja1.style.backgroundColor = "#7052ff"
}

var capturarValor = document.getElementById('valorNombre')

var capturarValorAp = document.getElementById('valorApellido')

var mostrarResultados = document.getElementById('resultados')

console.log(capturarValor)
console.log(capturarValor.value)
console.log(capturarValorAp.value)



// cambiarCaja2.textContent = capturarValor.value

function cargarValores(){

    cambiarCaja2.textContent = capturarValor.value  +"  "+ capturarValorAp.value

    // cambiarCaja2.textContent = capturarValorAp.value
    

}


var capturaValor1 = document.getElementById('valorA')

var capturaValor2 = document.getElementById('valorB')

var capturarBtn3 = document.getElementById('caja3')

console.log(capturaValor1)
console.log(capturaValor2)
console.log(capturarBtn3)




function sumaTotal(){

    var num1 = Number(capturaValor1.value)
    var num2 = Number(capturaValor2.value)

    console.log(num1+num1)

    var sumaTotal = num1 + num2

    capturarBtn3.textContent = sumaTotal
    

}
