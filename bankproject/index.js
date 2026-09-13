let button1 = document.getElementById("button-1")
let button2 = document.getElementById("button-2")
let input1 = document.getElementById("input-1")
let input2 = document.getElementById("input-2")
let depTk = document.getElementById("dep-tk")
let withTk = document.getElementById("with-tk")
let balanceTk = document.getElementById("balance-tk")


button1.style.cursor="pointer"
button1.addEventListener("click",()=>{
    depTk.textContent= Number(input1.value)+Number(depTk.textContent)
    balanceTk.textContent=Number(balanceTk.textContent)+Number(input1.value)
    input1.value=""

    console.log(input1);
})
button2.style.cursor="pointer"
button2.addEventListener("click",()=>{
    withTk.textContent= Number(input2.value)
    balanceTk.textContent=Number(balanceTk.textContent)-Number(withTk.textContent)
    input2.value=""

    console.log(input1);
})

