const pictureSelector = document.querySelector("#picture-selector")
const memeInput = document.querySelector("#meme-input")
const memeText = document.querySelector("#meme-text")
const printButton = document.querySelector("#print-button")
const meme = document.querySelector("#meme")

pictureSelector.addEventListener("change", (e) => {
  const img = window.URL.createObjectURL(e.target.files[0])
  meme.style.backgroundImage = `url('${img}')`
})

memeInput.addEventListener("keyup", (e) => {
  memeText.innerText = e.target.value
})

printButton.addEventListener("click", () => {
  html2canvas(meme, { allowTaint: true }).then((c) => {
    const data = c.toDataURL("image/jpeg", 1)
    const src = encodeURI(data)
    const a = document.createElement("a")
    a.setAttribute("download", "wild-meme.jpg")
    a.setAttribute("href", src)
    a.click()
  })
})
