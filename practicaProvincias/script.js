const $selectProvincias = document.getElementById("provincias")
const $selectLocalities = document.getElementById("localidades")

const listString = '{"provincia":"Madrid","localidad":"Getafe"};{"provincia":"Madrid","localidad":"Móstoles"};{"provincia":"Madrid","localidad":"Boadilla"};{"provincia":"Barcelona","localidad":"Manresa"};{"provincia":"Barcelona","localidad":"Granollers"};{"provincia":"Barcelona","localidad":"Cornellá"};{"provincia":"Sevilla","localidad":"La Rinconada"};{"provincia":"Sevilla","localidad":"Camas"};{"provincia":"Sevilla","localidad":"Carmona"}'
const objectList = listString.split(";").map(elm => JSON.parse(elm))

let provinceList = []


//


objectList.forEach(elm => {
    if(!provinceList.find(prov => prov == elm.provincia)){ //SI NO LO ENCUENTRA, LO METO EN LA LISTA Y EN EL SELECT
        provinceList.push(elm.provincia)

        const option = document.createElement("option")
        option.value = elm.provincia
        option.textContent = elm.provincia
        $selectProvincias.appendChild(option)
    }
})



$selectProvincias.addEventListener("change", () => {
    $selectLocalities.innerHTML = ""
    changeLocalities()  
})




const changeLocalities = () => {
    objectList.filter(elm => elm.provincia === $selectProvincias.value)
              .forEach(elm =>{
                    const option = document.createElement("option")
                    option.value = elm.localidad
                    option.textContent = elm.localidad
                    $selectLocalities.appendChild(option)
              })  
}

changeLocalities()