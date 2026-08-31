let name = document.getElementById("name")
let status = document.getElementById("status")
let button = document.getElementById("button")


console.log(name.textContent);
console.log(status);
button.style.cursor="pointer"
button.addEventListener("click", ()=>{
    status.textContent= "paid"
})