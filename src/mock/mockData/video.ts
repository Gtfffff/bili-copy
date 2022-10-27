function createVideo(n: number) {
  const arr = []
  for (let k = 0; k < n; k++) {
    arr[k] = {
      id: '@id',
      title: '@ctitle(5,15)',
      up: '@cname',
      w: '@integer(600,1000)',
      barrage: '@integer(10,200)',
      mn: '@time()',
      cover: '/@/assets/jpg/miku3.jpg',
      url: '/@/assets/video/miku1.mp4',
      date: '@date("M-d")'
    }
  }
  return arr
}
function createFVideo() {
  return createVideo(10)
}
function createSVideo() {
  return createVideo(4)
}
export { createFVideo, createSVideo }
