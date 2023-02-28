const old = new Date()
old.setMonth(old.getMonth() - 1)

const tomorrow = new Date()
tomorrow.setMonth(tomorrow.getMonth() + 1)

const today = new Date()

old_minor_today = today > old && today < tomorrow
console.log(old_minor_today);