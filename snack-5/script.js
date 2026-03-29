const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNumbers = nums.filter(function(element){
  if (element%2 === 0){
        return true
    } else {
        return false
    }
        
     // piùs nello  return element%2 === 0
})

console.log(evenNumbers)

