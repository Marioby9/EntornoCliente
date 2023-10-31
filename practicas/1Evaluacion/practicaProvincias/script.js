import { guardarDatos, BASEURL, obtenerDatos, obtenerDatosFetch } from "./crudAxios.js";

const $textProvincia = document.getElementById("provincia")
const $textLocalidad = document.getElementById("localidad")

const $selectProvincias = document.getElementById("provincias")
const $selectLocalities = document.getElementById("localidades")


const objectList = await obtenerDatos(BASEURL, 'localidades')
//const objectListFetch = await obtenerDatosFetch(BASEURL, 'localidades')

let provinceList = []


//


const start = () => {
    objectList.forEach(elm => {
        if(!provinceList.find(prov => prov == elm.provincia)){ //SI NO LO ENCUENTRA, LO METO EN LA LISTA Y EN EL SELECT
            provinceList.push(elm.provincia)
    
            const option = document.createElement("option")
            option.value = elm.provincia
            option.textContent = elm.provincia
            $selectProvincias.appendChild(option)
        }
    })

    changeLocalities()
}


const changeLocalities = async () => {
    const localities = await obtenerDatos(BASEURL, 'localidades', 'provincia', $selectProvincias.value )
    localities.forEach(elm =>{
                    const option = document.createElement("option")
                    option.value = elm.localidad
                    option.textContent = elm.localidad
                    $selectLocalities.appendChild(option)
    })
    changeTitles()
}


const changeTitles = () => {
    $textProvincia.textContent = $selectProvincias.value
    $textLocalidad.textContent = $selectLocalities.value
}


//


$selectProvincias.addEventListener("change", () => {
    $selectLocalities.innerHTML = ""
    changeLocalities()  
})

$selectLocalities.addEventListener("change", () => { 
    changeTitles()
})


//


start()