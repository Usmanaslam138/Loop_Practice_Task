let n = parseInt(prompt("Enter the value "))
let para = document.getElementById('para')
let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')
let h3 = document.getElementById('h3')
let t = 1
// for (i = 1; i <= 10; i++) {
//     h1.innerHTML = `Table of ${n}`
//     para.innerHTML += (`${n} x ${i} = ${n * i} <br>`)
// }


for (t = 1; t <= n; t++) {
    para.innerHTML += `<br><b>Table of ${t}</b><br><br>`
    for (i = 1; i <= 10; i++) {
        para.innerHTML += (`${t} x ${i} = ${t * i} <br>`)
    }
}

// Billing system
// input consume units
// second input unit cost
// print bill accoring to condition
// if unit = 50 then cost will be rs 10
// if unit = 51 to 100 then cost will be rs 13
// on  every 50 unit increase the cost will be added as rs 3


