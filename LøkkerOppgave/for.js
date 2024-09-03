let btnCounter = document.querySelector("#counter")
let divPrint = document.querySelector("#print")

let list = []

for (let i = 0; i < 10; i++){
    list.push(i.toString())
    divPrint.innerHTML = list
}