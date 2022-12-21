function checkJump(heights: number[]) {
  const max = Math.max(...heights)
  const result = heights.map((val, i, array) => {
    if (!i) return -2
    return val > array[i - 1]
      ? -1
      : val === array[i - 1]
        ? 0
        : 1
  })

  let rise = result.splice(0, heights.indexOf(max) + 1)
  console.log(rise, result)
  return rise.every((val) => val <= 0) && result.every(val => val >= 0)
}

function checkTwo(heights: number[]) {
  const maxI = heights.indexOf(Math.max(...heights))
  const direction = { rising: false, falling: false }

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] === heights[i - 1]) continue

    let dir = heights[i] > heights[i - 1]
      ? "rising"
      : "falling"

    direction[dir as keyof typeof direction] = true

    if (dir === "falling" && i <= maxI) {
      return false
    }
    if (dir === "rising" && i > maxI) {
      return false
    }

  }

  // if (heights.every)
  return Object.values(direction).every(val => val)
}

console.log(checkTwo([1, 2, 2, 2, 1]), true)
console.log(checkTwo([1, 1000, 100, 800]), false)
console.log(checkTwo([1, 1000, 900, 800]), true)
console.log(checkTwo([1, 2, 3, 2, 1]), true)
console.log(checkTwo([1, 3, 8, 5, 2]), true)
console.log(checkTwo([1, 2, 3, 1, 3, 1]), false)
console.log(checkTwo([2, 2, 2, 2]), false)
console.log(checkTwo([1, 2, 3]), false)