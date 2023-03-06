const inputEl = document.getElementById("input-el")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    let value = inputEl.value
    if (Math.floor(value)) {
    length.textContent = 
    `${value} meters = ${(value*3.281).toFixed(3)} feet | ${value} feet = ${(value/3.281).toFixed(3)} meters `
    volume.textContent = 
    `${value} liters = ${(value*0.264).toFixed(3)} gallons | ${value} gallons = ${(value/0.264).toFixed(3)} liters `
    mass.textContent = 
    `${value} kilos = ${(value*2.204).toFixed(3)} pounds | ${value} pounds = ${(value/2.204).toFixed(3)} kilos `
}
})
