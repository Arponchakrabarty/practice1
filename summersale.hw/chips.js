let button1 = document.getElementById("button-1")
let button2 = document.getElementById("button-2")
let status1 = document.getElementById("status-1")
let status2 = document.getElementById("status-2")
let inp =document.getElementById("inputform")

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
//     // newusername.textContent= username
//     // let newPass = document.createElement("input")
//     // newPass.textContent= password
//     // document.getElementById("inputform").append(newusername)
//     // document.getElementById("inputform").append(newPass)
})

// let status2 = document.querySelector("#status-2");
console.log(status2);


// button2.style.cursor="pointer"
// button2.addEventListener("click", ()=>{
//     status2.textContent="added to cart"

//     let newUser= document.createElement("input")
//     let newButton= document.createElement("button")

//     newButton.textContent="sign up"
//     newButton.classList.add("sign up")

//     document.getElementById("inputform").append(newButton)
//     newUser.placeholder= "write here"
//     newUser.classlist.add(uname)

//     let signup= document.querySelector(".sign up")
//     signup.addEventListener("click",()=>{
//         console.log("button clicked");
//     })

// })


// button2.style.cursor="pointer"
// button2.addEventListener("click",()=>{
//     status2.textContent= "added to cart"

//     let newUser= document.createElement("input")
//     let newButton= document.createElement("button")

//     newButton.textContent="sign up"
//     newButton.classList.add("signup")

//     document.getElementById("inputform").append(newButton)
//     newUser.placeholder="write here"
//     newUser.classList(username)

//     let signup =document.querySelector(".signup")
//     signup.addEventListener("click",()=>{
//         console.log("button clicked");

//     })

// })




























button2.addEventListener("click", ()=>{
    status2.textContent = "added to cart"
    let newUSer = document.createElement("input")
    let newbutton = document.createElement("button")
    newbutton.textContent= "signup"
    newbutton.classList.add("signup")
    document.getElementById("inputform").append(newbutton)
    newUSer.placeholder= "write here"
    newUSer.classList.add("username")
    let sign= document.querySelector(".signup")
    console.log("sign");
    newbutton.addEventListener("click",()=>{
        console.log("button clicked");
    })
})



