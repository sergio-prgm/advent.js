function getCompleted(part: string, total: string) {
  // convert to seconds
  const firstUp = (toSeconds(part) / toSeconds(total))
  // const up = firstUp * Math.pow(10, 6)
  const up = Number((firstUp * Math.pow(10, 3)).toFixed(3)) - Number(firstUp.toFixed(4)) * 10

  // convert to fraction over 10^n 
  // const down = Math.pow(10, 6)
  const down = 990

  const GCD = gcd(up, down)
  // console.log(down / GCD)

  return `${up / GCD}/${down / GCD}`
}

const toSeconds = (time: string) => {
  const newt = time.split(':').map(val => Number(val))
  return newt[0] * 3600 + newt[1] * 60 + newt[2]
}

const gcd = (up: number, down: number): any => {
  if (!down) return up
  return gcd(down, up % down)
}

console.log(
  getCompleted('01:00:00', '03:00:00'), // '1/3'
  getCompleted('02:00:00', '04:00:00'), // '1/2'
  getCompleted('01:00:00', '01:00:00'), // '1/1'
  getCompleted('00:10:00', '01:00:00'), // '1/6'
  getCompleted('01:10:10', '03:30:30'), // '1/3'
  getCompleted('03:30:30', '05:50:50') // '3/5'
)