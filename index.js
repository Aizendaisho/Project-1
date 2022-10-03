const boton = document.querySelector('.submit')
const selecionados = document.querySelector('.selecionados')
const contenedor1 = document.querySelector('.cont-1')
const contenedor2 = document.querySelector('.cont-2')
const num = document.querySelectorAll('.num')
let rest = 0
function escuchar (){
    num.forEach((nod,i,nodos)=>{
        num[i].addEventListener('click',(e)=>{
            nodos.forEach(ele=>ele.classList.remove("active"))
            nod.classList.add("active")
            rest = nod.textContent
        })  
    })
}
boton.addEventListener('click', ()=>{
    selecionados.textContent = `You selected ${rest} out of 5`
    contenedor1.classList.add("hide")
    contenedor2.classList.remove("hide")
})
escuchar()