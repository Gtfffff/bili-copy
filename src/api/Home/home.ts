import httpRequest from '../../service/index'
import {
  Carousel,
  CategoryList,
  ChannelCategoryList,
  History,
  Hot,
  RankingList,
  User,
  Video
} from './type/home'

/**
 * 获取导航分类
 */
function getCategory() {
  return httpRequest.get<CategoryList>({
    url: '/home/category/head'
  })
}
/**
 * 获取搜索历史
 */
function getHistory() {
  return httpRequest.get<History>({
    url: '/home/category/history'
  })
}
/**
 * 删除搜索历史
 * 有索引代表删除指定历史，无索引代表删除全部
 */
function deleteHistory(index?: number) {
  return httpRequest.delete<History>({
    url: '/home/category/history',
    params: index
  })
}
/**
 * 获取热搜
 */
function getHot() {
  return httpRequest.get<Hot>({
    url: '/home/category/hot'
  })
}
/**
 * 获取用户信息
 */
function getUser() {
  return httpRequest.get<User>({
    url: '/home/category/user'
  })
}

/**
 * 获取导航分类
 */
function getChannelCategory() {
  return httpRequest.get<ChannelCategoryList>({
    url: '/home/category/channelCategoryList'
  })
}
/**
 * 获取轮播图
 */
function getCarousel() {
  return httpRequest.get<Carousel>({
    url: '/home/carousel'
  })
}
/**
 * 获取首页视频
 */
function getVideo() {
  return httpRequest.get<Video>({
    url: '/home/video'
  })
}
/**
 * 获取首页后续
 */
function getNextVedio() {
  return httpRequest.get<Video>({
    url: '/home/nextVideo'
  })
}
function getRankingList() {
  return httpRequest.get<RankingList>({
    url: '/home/rankingList'
  })
}

export {
  getCategory,
  getHistory,
  getHot,
  deleteHistory,
  getUser,
  getChannelCategory,
  getCarousel,
  getVideo,
  getRankingList,
  getNextVedio
}
