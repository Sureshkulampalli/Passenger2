//document.getElementById("count").innerText = 10
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
function save(){
    console.log(count)
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


