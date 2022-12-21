function decorateTree(base: string) {
  const DECOR_TYPE = ['R', 'B', 'P']
  let lastStep = base.split(' ')
  let result: string[] = new Array(lastStep.length).fill('RBP')
  return result.map((val, i, arr) => {
    if (i === 0) return base
    lastStep = lastStep.map((ival, ii, iarray) => {
      if (ival === iarray[ii + 1]) return ival
      return val.split('').filter((v) => v !== ival && v !== iarray[ii + 1])[0]
    })
    lastStep.pop()
    return lastStep.join(' ').trim()

  }).reverse()
}
// function decorateTree(base: string) {
//   const DECOR_TYPE = ['R', 'B', 'P']
//   let lastStep = base.split(' ')
//   let result: string[] = [base]

//   while (lastStep.length > 1) {
//     console.log(1, lastStep)
//     lastStep = lastStep.map((val, i, array) => {
//       return val === array[i + 1]
//         ? val
//         : DECOR_TYPE.filter((v) => v !== val && v !== array[i + 1])[0]
//     }).slice(0, lastStep.length - 1)
//     // console.log(2, lastStep)

//     result.unshift(lastStep.join(' ').trim())
//   }
//   return result
// }

console.log(
  decorateTree('B P R P'),
  decorateTree('B B')
)

/*
Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R

decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']
*/