let button1 = document.getElementById("button-1")
let button2 = document.getElementById("button-2")
let status1 = document.getElementById("status-1")
let status2 = document.getElementById("status-2")

console.log(status1);


button1.style.cursor="pointer"
button1.addEventListener("click", ()=>{
    status1.textContent = "paid"
})

console.log(status2);
button2.style.cursor="pointer"
button2.addEventListener("click", ()=>{
    status2.textContent = "added to cart"
})