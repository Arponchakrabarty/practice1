
let button1=document.getElementById("button1")
let button2=document.getElementById("button2")
let status1= document.getElementById("status1")
let status2= document.getElementById("status2")
let form= document.getElementById("aa")

console.log(status1);
button1.style.cursor="pointer"
button1.addEventListener("click",()=>{
    status1.textContent="paid"

    let newUser= document.createElement("input")
    let newButton= document.createElement("Button")

    newButton.textContent= "login"
    newButton.classList.add("login")

    document.getElementById("aa").append(newButton)

    newUser.placeholder="write here"
    newUser.classList.add("username")


    let login= document.querySelector(".login")
    login.addEventListener("click",()=>{
        console.log("button clicked");
    })
})



console.log(status2);
button2.style.cursor="pointer"
button2.addEventListener("click",()=>{
    status2.textContent="added to cart"

})




