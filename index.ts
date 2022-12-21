function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number): number {
  giftsCities = giftsCities.filter((val) => val < maxGifts).sort()
  giftsCities.unshift(0)
  // edge cases
  if (giftsCities.length == 1) return 0
  if (Math.max(...giftsCities) === maxGifts) return maxGifts

  // the solution ??
  let sl: number[][] = new Array(giftsCities.length).fill(0).map(() => new Array(maxCities))
  let maxV = (i: number, sum: number, C: number): number => {
    let result: number = 0

    if (sl[i][C]) return sl[i][C]
    console.log("value -> ", giftsCities[i], "total -> ",  sum)
    // Base Case
    if (sum === 0 || i === 0 || C === 0)
      result = 0
    else if (sum - giftsCities[i] === 0)
      result = sum
    // Value too high
    else if (giftsCities[i] > sum)
      return maxV(i - 1, sum, C)
    // True case
    else {
      result = giftsCities[i] + maxV(i - 1, sum - giftsCities[i], C - 1)
      sl[i][C] = result
    }
    return result
  }
  let results = giftsCities.map((_, i) => {
    console.log(`Now on ${giftsCities[giftsCities.length- 1 - i]}`)
    return maxV(giftsCities.length - 1 - i, maxGifts, maxCities)})
  return Math.max(...results)
}


console.log("return ", getMaxGifts([12, 3, 11, 5, 7], 20, 3))
/* function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number): number {
  giftsCities = giftsCities.filter((val) => val < maxGifts).sort()
  giftsCities.unshift(0)
  // edge cases
  if (giftsCities.length == 1) return 0
  if (Math.max(...giftsCities) === maxGifts) return maxGifts

  // the solution ??
  let maxV = (i: number, sum: number, C: number): number => {
    let result: number = 0
    console.log("value -> ", giftsCities[i], "total -> ",  sum)
    // Base Case
    if (sum === 0 || i === 0 || C === 0)
      result = 0
    else if (sum - giftsCities[i] === 0)
      result = sum
    // Value too high
    else if (giftsCities[i] > sum)
      return maxV(i - 1, sum, C)
    // True case
    else {
      result = giftsCities[i] + maxV(i - 1, sum - giftsCities[i], C - 1)
    }
    return result
  }

  let results = giftsCities.map((_, i) => {
    console.log(`Now on ${_}`)
    return maxV(i, maxGifts, maxCities)})
  return Math.max(...results)
} */