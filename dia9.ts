function countTime(leds: number[]) {
  // if (leds.every(val => val))
  //   return leds
  let count = 0
  while (leds.some(val => val === 0)) {
    // console.log(leds)
    count++
    leds = leds.map((val, i) => {
      if (!i && !val && leds[leds.length - 1]) return 1
      if (i && !val && leds[i - 1]) return 1
      return val
    })
  }
  return count * 7
  // return countTime(newLeds)
}

function countTime2(leds: number[]) {
  const len = leds.length
  let chains: number[] = new Array(len).fill(0)
  let lastChain: number = -1

  leds.forEach((val, i) => {
    if (val) return
    if (leds[i - 1] || !i) lastChain = i
    chains[lastChain] += 1
  })
  // chains[0] += chains[len - 1]
  if (!leds[len - 1]) chains[0] += chains[lastChain]
  console.log(chains, lastChain)
  return Math.max(...chains)
}

console.log(
  countTime2([0, 1, 1, 0, 1]),
  countTime2([0, 0, 0, 1]),
  countTime2([0, 0, 1, 0, 0])
)