const d = new Date().getMonth()
const p = new Date()
p.setMonth(2 - 6)

console.log("dia: ", p.getDay())
console.log("mes: ", p.getMonth())
console.log("ano: ", p.getYear())

console.log(d)
console.log(p.toUTCString())
