const boton = document.querySelector('.submit')
const selecionados = document.querySelector('.selecionados')
const contenedor1 = document.querySelector('.cont-1')
const contenedor2 = document.querySelector('.cont-2')
const num = document.querySelectorAll('.num')

function escuchar (){
    for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click',(e)=>{
        let nodo = e.target
     if(nodo.classList.contains("active")){
         nodo.classList.remove("active")
        }else{        
            nodo.classList.add("active")          
        }
    })    
    }
}

const cuantos = ()=>{
    let resultado = 0
    num.forEach(nod=>{       
        if(nod.classList.contains("active")) resultado++
    })
    return resultado
}

boton.addEventListener('click', ()=>{
    selecionados.textContent = `You selected ${cuantos()} out of 5`
    contenedor1.classList.add("hide")
    contenedor2.classList.remove("hide")
})
escuchar()

