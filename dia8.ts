function checkPart(part: string) {
  // if (part == [...part].reverse().join(''))
  //   return part

  for (const letter of part.padStart(part.length + 1)) {
    const Part = part.replace(letter, '')
    if (Part == [...Part].reverse().join('')) return Part
  }
  return false
}

function checkPart1(part: string) {
  for (const letter of part.padStart(part.length + 1)) {
    const newPart = part.replace(letter, '')
    if (newPart == [...newPart].reverse().join('')) return true
  }
  return false
}


console.log(checkPart1("uwu")) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter