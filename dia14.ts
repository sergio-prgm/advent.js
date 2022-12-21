function getOptimalPath(path: number[][]) {
  const maxDepth = path.length

  // usa depth first search
  const dfs = (time: number, depth: number, i: number): number => {
    if (depth >= maxDepth) return 0

    let leftMax = dfs(path[depth + 1]?.[i], depth + 1, i)
    let rightMax = dfs(path[depth + 1]?.[i + 1], depth + 1, i + 1)

    // console.log(depth, i, "left max", leftMax, "right max", rightMax)
    return time + Math.min(leftMax, rightMax)
  }

  return dfs(path[0][0], 0, 0)
}


console.log(getOptimalPath([[0], [7, 4], [2, 4, 6]]))
console.log(getOptimalPath([[0], [2, 3]]))
console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]))
console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]]))
