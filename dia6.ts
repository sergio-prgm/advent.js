function makeBox(size: number) {
  let topLines: string[] = []
  for (let i = 1; i <= size; i++) {
    topLines[i - 1] = `${' '.repeat(size - i)}${'/\\'.repeat(i)}${'_\\'.repeat(size)}`
  }
  let lines = topLines.concat(topLines.slice(0).reverse().map((val, i) => {
      return val.replaceAll('/\\', '\\/').replaceAll('_\\', '_/')
  }))
  return lines.join('\n')
}

function createBoxes(size: number) {
  let topLines: string[] = new Array(size).fill('')
    .map((_, i) => {
    return `${' '.repeat(size - i - 1)}${'/\\'.repeat(i + 1)}${'_\\'.repeat(size)}`
  })

  let lines = topLines.concat(topLines.slice(0).reverse().map((val, i) => {
      return val.replaceAll('/\\', '\\/').replaceAll('_\\', '_/')
  }))
  return lines.join('\n')
}

console.log(makeBox(3))
console.log(createBoxes(3))