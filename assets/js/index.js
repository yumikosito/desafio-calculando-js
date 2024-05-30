precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidadFinal=document.querySelector(".cantidad")
let valorCant=0
let total =document.querySelector(".valor-total")

function funSumar(){
  cantidadFinal=document.querySelector(".cantidad")
  valorCant=Number(cantidadFinal.innerHTML)
  cantidadFinal.innerHTML= valorCant+1
  valorCant=Number(cantidadFinal.innerHTML)
  total.innerHTML= Number(cantidadFinal.innerHTML) * precio 

  if (Number(valorCant)<0){
    alert("No se puede tener cantidad negativa")
    cantidadFinal.innerHTML=0
    total.innerHTML=0
    valorCant=0
  } else {
    valorCant=valorCant
  }
}

function funRestar(){
  cantidadFinal=document.querySelector(".cantidad")
  valorCant=Number(cantidadFinal.innerHTML)
  cantidadFinal.innerHTML= valorCant-1
  valorCant=Number(cantidadFinal.innerHTML)
  total.innerHTML= Number(cantidadFinal.innerHTML) * precio 

  if (Number(valorCant)<0){
    alert("No se puede tener cantidad negativa")
    cantidadFinal.innerHTML=0
    total.innerHTML=0
    valorCant=0
  } else{
    valorCant=valorCant
  }
}

