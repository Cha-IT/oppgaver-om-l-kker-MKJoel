let btnCounter = document.querySelector("#counter")
let divPrint = document.querySelector("#print")

let i = 0
let list = []

btnCounter = function(){
    while(i < 10){
    i = i + 1;
     console.log(i)

     list.push(i.toString())
    };
    divPrint.innerHTML = list
    console.log(i.toString())
}