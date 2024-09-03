let btnCounter2 = document.querySelector("#counter2")
let divPrint2 = document.querySelector("#print2")
let btnCounter = document.querySelector("#counter")
let divPrint = document.querySelector("#print")


let list = []

btnCounter2.onclick = function(){
for (let i = 0; i < 10; i++){
    list.push(i.toString())
 
    }; 
    divPrint.innerHTML = list;
};

let i = 0;

btnCounter.onclick = function(){
    while(i < 10){
    i = i + 1;
     console.log(i)

     list.push(i.toString())
    };
    divPrint.innerHTML = list
    console.log(i.toString())
}