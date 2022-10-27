export function createCarousel() {
  const arr = []
  for (let k = 0; k < 4; k++) {
    arr[k] = {
      id: '@id',
      title: '@ctitle(5,15)',
      cover: '../../../assets/jpg/miku6.jpg'
    }
  }
  return arr
}
