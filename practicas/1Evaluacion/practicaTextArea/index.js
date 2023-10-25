const $bClear = document.getElementById("clear")
const $textArea = document.getElementById("text")


$textArea.value = localStorage.getItem('text')
$textArea.focus()

$textArea.addEventListener("input", (event) => {
    const text = localStorage.getItem('text')
    localStorage.setItem("text", $textArea.value)
})

$bClear.addEventListener("click", (event) => {
    $textArea.value = ""
    localStorage.clear()
    console.log("Deleted from LocalStorage")

    $textArea.focus()
})