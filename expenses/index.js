let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let input3=document.getElementById("input3")
let input4=document.getElementById("input4")
let input5=document.getElementById("input5")
let input6=document.getElementById("input6")
let button1=document.getElementById("button1")
let show=document.getElementById("show")
let last=document.getElementById("last")


button1.style.cursor="pointer"
button1.addEventListener("click", ()=>{
 
 let newol=document.createElement("li")
 newol.textContent=input1.value+"--"+input2.value+"--"+input3.value+"--"+input4.value
 input5.value=Number(input3.value)+Number(input5.value)
 
 
 input1.value=""
 input2.value=""
 input3.value=""
 input4.value=""


 show.append(newol)
})