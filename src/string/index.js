const url = "sm.mypharma.com.br"

const newurl = url.split('.')[1]

const street = "rua, da, lapa"
const fixed_street = street.replace(/\,/g, '')

console.log(fixed_street)
console.log(newurl)