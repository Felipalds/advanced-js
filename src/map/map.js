let map = new Map()

map.set("1", {name: "Produto 1", price: 12})
map.set("2", {name: "Produto 2", price: 24})
map.set("3", {name: "Produto 3", price: 36})
map.set("4", {name: "Produto 4", price: 48})

console.log(map.get("2"))

map.set("2", "Produto não encontrado")

console.log(map.get("2"))

console.log(map.size)

map.delete("2")

console.log(map)

map = null

console.log(map)
