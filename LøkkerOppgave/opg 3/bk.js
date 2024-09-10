let oddetall = document.querySelector("#oddetall")
let partall = document.querySelector("#partall")
const divting = document.querySelector("#oddetallTxt")
const divting2 = document.querySelector("#partallTxt")

function PrintODD(){
    for(let i = 0; i <= 100; i++){
        if( i%2 !=0){
            divting.innerHTML += (i+" ")
        }
    }
}
function PrintPAR(){
    console.log("NOGGER")
    for(let i = 2; i <= 100; i++){
        if( i%2 ===0 ){
            divting2.innerHTML += (i+" ")
        }
    }
}