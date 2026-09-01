let button1 = document.getElementById("button-1")
let button2 = document.getElementById("button-2")
let status1 = document.getElementById("status-1")
let status2 = document.getElementById("status-2")

console.log(status1);


button1.style.cursor="pointer"
button1.addEventListener("click", ()=>{
    status1.textContent = "paid"
    let newusername = document.createElement("input")
    let newbutton = document.createElement("button")
    newbutton.textContent= "login"
    newbutton.classList.add("login")
    document.getElementById("inputform").append(newbutton)
    newusername.placeholder ="write your name"
    newusername.classList.add("username") 
    let login= document.querySelector(".login")
    console.log(login);
    login.addEventListener("click", ()=>{
        console.log("button click");
    })
    // newusername.textContent= username
    // let newPass = document.createElement("input")
    // newPass.textContent= password
    // document.getElementById("inputform").append(newusername)
    // document.getElementById("inputform").append(newPass)
})

console.log(status2);
button2.style.cursor="pointer"
button2.addEventListener("click", ()=>{
    status2.textContent = "added to cart"
})