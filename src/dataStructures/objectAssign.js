
// Basially all = and ObjectAssign creates a copy of the memory address
// It does not creates a NEW object
// This is why React will always return they as equals if you don't create a new one!

console.log("Creating an object A: ")
const objectA = new Map()
objectA.set(1, "ABC")
objectA.set(2, "DEF")
objectA.set(3, "GHI")
console.log(objectA, "\n")


console.log("Object assigning A to B: ")
const objectB = Object.assign(objectA)
console.log(objectB, "\n")
console.log("== ", objectA == objectB)
console.log("=== ",objectA === objectB)
console.log("Object.is() ", Object.is(objectA, objectB), "\n")

console.log("Mutating object B: ")
objectB.set(4, "JKL")
console.log("A: ", objectA, "\n")
console.log("B: ", objectB, "\n")
console.log("== ", objectA == objectB)
console.log("=== ",objectA === objectB)
console.log("Object.is() ", Object.is(objectA, objectB), "\n")

objectC = objectA
objectC.set(5, "MNO")
console.log("A: ", objectA, "\n")
console.log("B: ", objectB, "\n")
console.log("C: ", objectC, "\n")

objectD = new Map(objectA)
objectD.set(6, "PQR")
console.log("A: ", objectA, "\n")
console.log("B: ", objectB, "\n")
console.log("C: ", objectC, "\n")
console.log("D: ", objectD, "\n")
console.log("== ", objectA == objectD)
console.log("=== ",objectA === objectD)
console.log("Object.is() ", Object.is(objectA, objectD), "\n")
