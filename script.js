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
    for (i = 1; i <= 10; i++) {
        h1.innerHTML = `Table from 1 to ${n}`
        para.innerHTML += (`${t} x ${i} = ${t * i} <br>`)
    }

}





