function fitsInOneBox(boxes) {
  let boxesOrdenadas = []
  let box = []
  let boxOrdenada = []

  boxes.forEach(a => {
    box = a.l.toString() + a.w.toString() + a.h.toString()
    boxOrdenada = Array.from(box).sort()
    boxesOrdenadas.push(parseInt(parseInt(boxOrdenada.join(""))))
  })
  boxesOrdenadas = boxesOrdenadas.sort()
  console.log(boxesOrdenadas)
  for(let i; i= 0; i++) {
      if(boxesOrdenadas[i] > boxesOrdenadas[i+1]) {
      return false
      }
  }

  return true
} 

function dos(boxes) {
  boxes.sort((a, b) => a.l - b.l)
  return boxes
}

console.log(dos([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]
))

console.log(dos([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]))