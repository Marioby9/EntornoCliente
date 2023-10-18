import { control, seleccionados, delegado, subdelegado, numVotos } from "./index.js"
const $bSave = document.getElementById("bSave")
const $bDelete = document.getElementById("bDelete")

const listaLS = localStorage.getItem("listaVotados")

if(listaLS != null){
    const arrayLS = listaLS.split(";").map(elm => JSON.parse(elm)) //to array object
    arrayLS.map(elm => {
        control.insertaVotado(elm.nombre, elm.votos) //paint each element
    })

    control.votosEmitidos = arrayLS.reduce((acc, elm) =>  acc + elm.votos, 0)
    numVotos.textContent = control.votosEmitidos

    if(control.votosEmitidos > 0){ 
        control.dameDelegado() 
    }
}


//


$bSave.addEventListener("click", () => {
    const listString = control.listaVotados.map(elm => JSON.stringify(elm)).join(";")
    localStorage.setItem("listaVotados", listString)
})

$bDelete.addEventListener("click", () => {
    resetScreen()
    localStorage.clear()
})

const resetScreen = () => {
    control.reseteaFormulario()
    control.listaVotados = []
    seleccionados.innerHTML = ""
    delegado.textContent = ""
    subdelegado.textContent = ""
    numVotos.textContent = 0
    control.votosEmitidos = 0
}
