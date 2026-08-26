const students = [
  { name: "Rahim", marks: 80 },
  { name: "Karim", marks: 45 },
  { name: "Hasan", marks: 70 },
  { name: "Sakib", marks: 35 }
];
for(let i=0; i<students.length; i++){
    students[i]= {...students[i], age:20*i+1}
    
}


const newStd= students.map(data => data.name)
// console.log(newStd);
const fielterstd= students.filter(data=> data.marks<50)
// console.log(newtd);
const findstd= students.find(data=> data.name="Rahim")
// console.log(findstd);
const fistd= students.reduce((prv,cur)=>prv-cur.marks, 100)
console.log(fistd);