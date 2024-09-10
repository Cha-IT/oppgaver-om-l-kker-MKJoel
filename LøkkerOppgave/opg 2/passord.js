const signup = document.querySelector("#signup")

function signUp(){
    let password = prompt("create youre password")
    let Ffalse = false
    let tries = 0


    while(Ffalse === false) {
    const signIn = prompt("sign in")
    tries++

    if (password === signIn){
        Ffalse = true
        document.write("correct password")
        break;
    }
    else if(tries < 3 && password === false){
        document.write("false password, try again")
        Ffalse = true
    }
    else if( tries >= 3){
        Ffalse = true
        document.write("out of tries :(")
    }
    };
}