const $form = document.getElementById("form")
const $selectedList = document.getElementById("selectedList")
const $bShowConfirmed = document.getElementById("showConfirmed")
const $confirmedList = document.getElementById("confirmedList")
const fichero = document.getElementById("fichero")
const $txtFileError = document.getElementById("fileError")
const $bAccept = document.getElementById("bAccept")
const $bCancel = document.getElementById("bCancel")

//

let elementsList = []
let indxEditElement
let idDragedElement

//

const uploadFile = (event) => { 
    let reader = new FileReader()
  
    let file = event.target.files[0]
    reader.readAsText(file)
  
    reader.onload = () => {
        try{
            elementsList = JSON.parse(reader.result)     
            elementsList.map(elm => {
                elm.isConfirmed = false
                paintElement(elm)
            })

            addDragAndDrop()
            showFormFile()
            $txtFileError.style.display = "none"
        }catch(error){
            console.log(error)
            $txtFileError.style.display = "block"
        }         
    };
  
    reader.onerror = () => {
      console.log(reader.error)
      $txtFileError.style.display = "block"
    };

}
  
const showFormFile = () => { //GESTION SI MOSTRAR EL FORMULARIO O MOSTRAR EL BOTON CONFIRMADOS O MOSTRAR EL INPUT FILE
    if(elementsList[0]){
        fichero.style.display = "none"
        $bShowConfirmed.style.display = "block"
    }
    else{
        $form.style.display = "none"
        fichero.style.display = "block"
        $bShowConfirmed.style.display = "none"
    }
}

const paintElement = (elm) => {
    const element = document.createElement("li")
    element.innerHTML = `<div class="container" draggable="true" id="${elm.id}">
                                <div class="data">
                                    <p class="nombre">Nombre: ${elm.name}</p>
                                    <p class="email">Email: ${elm.email}</p>
                                    <p class="city">Ciudad: ${elm.city}</p>
                                </div>
                                <div class="buttons center">
                                    <button class="btnEdit">Modificar</button>
                                    <button class="btnDelete">Eliminar</button>
                                </div>
                            </div>`

    const $btnDelete = element.querySelector(".btnDelete")
    const $btnEdit = element.querySelector(".btnEdit")

    $btnDelete.addEventListener("click", (event) => deleteElement(event))
    $btnEdit.addEventListener("click", (event) => editElement(event))
    //addDragAndDrop(cardElement)

    $selectedList.append(element)
}

const deleteElement = (event) => {
    const container = event.target.parentElement.parentElement //subo 3 niveles
    const id = container.id
    
    const index = elementsList.findIndex(elm => elm.id == id)
    elementsList.splice(index, 1)

    $form.reset()
    container.remove()
}

const editElement = (event) => {
    $form.style.display = "flex"
    const container = event.target.parentElement.parentElement //subo 3 niveles
    const id = container.id
    
    indxEditElement = elementsList.findIndex(elm => elm.id == id)
    const element = elementsList[indxEditElement]

    $form["name"].value = element.name
    $form["email"].value = element.email
    $form["city"].value = element.city
}

const acceptEdit = () => {
    elementsList[indxEditElement].name = $form["name"].value
    elementsList[indxEditElement].email = $form["email"].value
    elementsList[indxEditElement].city = $form["city"].value

    const id = elementsList[indxEditElement].id
    const data = document.getElementById(id).querySelector(".data")
    console.log(data)

    data.querySelector(".nombre").textContent = "Nombre: " + $form["name"].value
    data.querySelector(".email").textContent = "Email: " + $form["email"].value
    data.querySelector(".city").textContent = "Ciudad: " + $form["city"].value

    $form.reset()
    $form.style.display = "none"

}

const cancel = () => {
    $form.reset()
    $form.style.display = "none"
}

const addDragAndDrop = () => { 
    $selectedList.addEventListener("dragover", (event)=>event.preventDefault())
    $confirmedList.addEventListener("dragover", (event)=>event.preventDefault())

    $selectedList.addEventListener("drop", (event)=>{
        event.target.append(document.getElementById(idDragedElement))
        console.log("Hemos terminado")
    })
    $selectedList.addEventListener("drop", (event)=>{
        $selectedList.append(document.getElementById(idDragedElement))
        const index = elementsList.findIndex(elm => elm.id == idDragedElement)
        elementsList[index].isConfirmed = false
    })
    $confirmedList.addEventListener("drop", (event)=>{
        $confirmedList.append(document.getElementById(idDragedElement))
        const index = elementsList.findIndex(elm => elm.id == idDragedElement)
        elementsList[index].isConfirmed = true
    })


}

//

$form.addEventListener("submit", (event) => {
    event.preventDefault()
    acceptEdit()
})

fichero.addEventListener('change',(e)=> uploadFile(e))

$bCancel.addEventListener("click", () => cancel())

$bShowConfirmed.addEventListener("click", () => elementsList.filter(elm => elm.isConfirmed).forEach(elm => console.log(elm)))

document.addEventListener("dragstart", (event) => idDragedElement = event.target.id)

//

showFormFile()


