const { takeRight } = require("lodash")

let count = 0
countel = document.getElementById("para")
saveEl = document.getElementById("save-el")
function increment()
{
    count = count + 1
    countel.innerText = count
}
function buttonFunc()
{
    saveEl.textContent = saveEl.innerText +" "+ count + "-"
}
function reset()
{
    count = 0
    countel.innerText = count
    saveEl.innerText = "Previous Entries : "
}
// things to take note 
// script tag 
// variables 
// numbers 
// strings 
// console.log() 
// functions 
// THE DOM 
// getElementById 
// innerText 
// textContent 
