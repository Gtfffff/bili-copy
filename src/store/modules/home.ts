import { defineStore } from 'pinia'
import {
  getCategory,
  getHistory,
  getHot,
  deleteHistory,
  getUser,
  getChannelCategory,
  getVideo,
  getRankingList,
  getCarousel,
  getNextVedio
} from '/@/api/Home/home'
import {
  CategoryList,
  History,
  Hot,
  User,
  ChannelCategoryList,
  Video,
  RankingList,
  Carousel
} from '/@/api/Home/type/home'

interface MainState {
  categoryList: CategoryList
  history: History
  hot: Hot
  user: User
  channelCategory: ChannelCategoryList
  sticky: boolean
  video: Video
  videos: Video
  rankList: RankingList[]
  carousel: Carousel
  index: number
}

const useHomeStore = defineStore({
  id: 'home',

  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'homekey',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 🎉按需持久化，默认不写会存储全部
    paths: ['categoryList', 'channelCategory']
  },

  state: (): MainState => ({
    categoryList: {} as CategoryList,
    history: [] as History,
    hot: [] as Hot,
    user: {} as User,
    channelCategory: [] as ChannelCategoryList,
    video: [] as Video,
    videos: [] as Video,
    rankList: [] as RankingList[],
    carousel: [] as Carousel,
    sticky: false,
    index: 0
  }),

  getters: {
    left(categoryList) {
      return categoryList.categoryList.left
    },
    right(categoryList) {
      return categoryList.categoryList.right
    },
    rankingList: (rankList) => (index: number) => {
      return rankList.rankList.at(index)?.slice(1, 5)
    },
    rankingTop: (rankList) => (index: number) => {
      return rankList.rankList.at(index)?.slice(0, 1)
    },
    nextVideo: (videos) => (i: number) => {
      const start = 4 * i
      const end = start + 4
      return videos.videos.slice(start, end)
    },
    length: (videos) => {
      return videos.videos.length
    }
  },

  actions: {
    async getAllCategory() {
      this.categoryList = await getCategory()
      this.history = await getHistory()
      this.hot = await getHot()
      this.user = await getUser()
      this.channelCategory = await getChannelCategory()
      this.video = await getVideo()
      this.videos = await getNextVedio()
      this.carousel = await getCarousel()
      this.rankList[0] = await getRankingList()
    },

    async deleteHistory(index?: number) {
      if (index) {
        this.history.splice(index, 1)
        await deleteHistory(index)
      } else {
        this.history = <History>[]
        await deleteHistory()
      }
    },
    async getNextVedio() {
      this.videos = [...this.videos, ...(await getNextVedio())]
      this.rankList[this.index] = await getRankingList()
      this.index++
    }
  }
})
export default useHomeStore
