const $contElements = document.getElementById("elements")
const $bSave = document.getElementById('save')
const $bDelete = document.getElementById('delete')


const paintElement = (elm, index) => {
    const $element = document.createElement("div")
    $element.id = index
    $element.className = "element"
    $element.innerHTML = `<p>ID: ${index}</p>
                            <p>Nombre: ${elm.nombre}</p>
                            <p>Edad: ${elm.edad}</p>`
        
    $contElements.append($element)
                              
}

const arrayString = '{"nombre": "Mario", "edad": 21}; {"nombre": "Tomas", "edad": 20} ; {"nombre": "Miguel", "edad":19} ; {"nombre": "Javier", "edad":19} ; {"nombre": "Pedro", "edad":19} ; {"nombre": "Álvaro", "edad":19}'
const arrayObjects = arrayString.split(";").map((elm, index) =>  {
                                                const elmObject = JSON.parse(elm)
                                                paintElement(elmObject, index)

                                                return elmObject
                                            })

const elmsToDelete = [2, 4, 7]



const saveToLS = () => {
    const listString = arrayObjects.map(elm => JSON.stringify(elm)).join(';')
    localStorage.setItem("lista", listString)
    console.log(listString)
}

const deleteFromDOM = () => {
    elmsToDelete.forEach((elm, indx) => {
        const $element = document.getElementById(indx)

        if($element){  
            $element.remove()
        }
        
    })
}


$bSave.addEventListener("click", () => saveToLS())
$bDelete.addEventListener("click", () => deleteFromDOM())