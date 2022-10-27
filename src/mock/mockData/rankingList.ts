export function createRankingList() {
  const arr = []
  for (let k = 0; k < 5; k++) {
    arr[k] = {
      id: '@id',
      title: '@ctitle(5,15)',
      up: '@cname',
      cover: '/@/assets/jpg/c1.jpeg'
    }
  }
  return arr
}
