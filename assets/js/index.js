precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidadFinal=undefined
let valorCant=undefined
let total =document.querySelector(".valor-total")

function funSumar(){
  cantidadFinal=document.querySelector(".cantidad")
  valorCant=Number(cantidadFinal.innerHTML)
  cantidadFinal.innerHTML= valorCant+1
  valorCant=Number(cantidadFinal.innerHTML)
  total.innerHTML= valorCant* precio 
}

function funRestar(){
  cantidadFinal=document.querySelector(".cantidad")
  valorCant=Number(cantidadFinal.innerHTML)
  cantidadFinal.innerHTML= valorCant-1
  valorCant=Number(cantidadFinal.innerHTML)
  total.innerHTML= valorCant * precio 

  if (Number(valorCant)<0){
    alert("No se puede tener cantidad negativa")
    cantidadFinal.innerHTML=0
    total.innerHTML=0
    valorCant=0
  } else{
    valorCant=valorCant
  }
}

