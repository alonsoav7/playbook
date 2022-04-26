// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)

const countriesEndsByway = countries7.filter((country) => country.includes('way'))
console.log(countriesEndsByway)

const countriesEndsByark = countries7.filter((country) => country.includes('ark'))
console.log(countriesEndsByark)

const countriesEndsByden = countries7.filter((country) => country.includes('den'))
console.log(countriesEndsByden)


