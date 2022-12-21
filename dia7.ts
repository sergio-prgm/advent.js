function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  return [a1, a2, a3]
    .flatMap((val, i) => {
      return val.filter((val, i, arr) => arr.indexOf(val, i + 1) == -1)
    })
    .filter((val, i, arr) => arr.filter(vl => vl == val).length == 1)
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
console.log(getGiftsToRefill(a1, a2, a3))