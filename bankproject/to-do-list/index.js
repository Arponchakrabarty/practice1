let input1= document.getElementById("input1")
let input2= document.getElementById("input2")
let button1= document.getElementById("button1")
let show= document.getElementById("show")



button1.style.cursor="pointer"
button1.addEventListener("click",()=>{
 let newol= document.createElement("li")
 let checkbox= document.createElement("input")
    checkbox.type="checkbox"
newol.append(checkbox)
newol.append(input1.value+"-"+input2.value)
show.append(newol)
    input1.value=""
    input2.value=""
})









