// const { createElement } = require("react")

let name = document.getElementById("name")
let pass = document.getElementById("pass")
let button = document.getElementById("form")


// let inputName= document.getElementById("inpname")

// console.log(name.textContent);
// console.log(status);
button.style.cursor="pointer"
button.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(event);
    let username = name.value;
    let password = pass.value;

    console.log(username);
    console.log(password);
    let newusername = document.createElement("p")
    newusername.textContent= username
    let newPass = document.createElement("p")
    newPass.textContent= password
    document.getElementById("p").append(newusername)
    document.getElementById("p").append(newPass)


    
})
