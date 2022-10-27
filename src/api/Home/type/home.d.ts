import { type } from 'os'

/**
 * 分类数据
 */
type CategoryItem = {
  id: string
  name: string
  svg?: string
}
type CategoryList = {
  left: CategoryItem[]
  right: CategoryItem[]
}
/**
 * 搜索历史
 */
type History = string[]
/**
 * 热搜
 */
type Hot = string[]
/**
 * 用户信息
 */
type User = {
  name: string
  level: string
  fork: string
  follow: string
  dyn: string
  coin: string
  Bcoin: string
  avatar: string
}
/**
 * 频道分类
 */
type ChannelCategoryList = string[]

/**
 * 轮播图
 */
type Carousel = {
  id: string
  title: string
  cover: string
}[]

/**
 * 首页视频
 */
type Video = {
  id: string
  title: string
  up: string
  w: string
  barrage: string
  mn: string
  cover: string
  url: string
  date: string
}[]
/**
 * 首页后续
 */
type RankingList = {
  id: string
  title: string
  cover: string
  up: string
}[]

export { CategoryList, History, Hot, User, ChannelCategoryList, Video, Carousel, RankingList }
