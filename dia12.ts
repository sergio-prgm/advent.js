function selectSleigh(distance: number, sleighs: any[]) {
  const result = sleighs.reduce((name, sleigh, i) => {
    // console.log(sleigh.consumption * distance <= 20)
    if (sleigh.consumption * distance <= 20) return sleigh.name
    return name
  }, "")
  console.log(result)
  return result || null
}

console.log(selectSleigh(1, [
  { name: 'pheralb', consumption: 0.3 },
  { name: 'TMChein', consumption: 0.5 }
]))

console.log(selectSleigh(10, [
  { name: 'pedros', consumption: 1 },
  { name: 'samar', consumption: 5 }
]))

console.log(selectSleigh(50, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
]))