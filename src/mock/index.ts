import type { MockMethod } from 'vite-plugin-mock'
import { createCategoryList } from './mockData/categoryList'
import { createTestData } from './mockData//testdata'
import { createHistory, deleteHistory } from './mockData/history'
import { createHot } from './mockData/hot'
import { createUser } from './mockData/user'
import { createChannelCategoryList } from './mockData/ChannelCategoryList'
import { createCarousel } from './mockData/carousel'
import { createFVideo, createSVideo } from './mockData/video'
import { createRankingList } from './mockData/rankingList'

/**
 * 模拟后台接口
 */
export default [
  /**
   * 测试方法
   */
  {
    url: '/api/test',
    timeout: 100,
    method: 'get',
    response: () => {
      // 统一返回测试数据
      return createTestData()
    }
  },
  /**
   * 获取nav分类信息
   */
  {
    url: '/api/home/category/head',
    timeout: 100,
    method: 'get',
    response: () => {
      return createCategoryList()
    }
  },
  /**
   * 获取nav搜索历史信息
   */
  {
    url: '/api/home/category/history',
    timeout: 100,
    method: 'get',
    response: () => {
      return createHistory()
    }
  },
  /**
   * 删除单个nav搜索历史信息
   */
  {
    url: '/api/home/category/history',
    timeout: 100,
    method: 'delete',
    response: () => {
      return deleteHistory()
    }
  },

  /**
   * 获取热搜
   */
  {
    url: '/api/home/category/hot',
    timeout: 100,
    method: 'get',
    response: () => {
      return createHot()
    }
  },
  /**
   * 获取用户基本信息
   */
  {
    url: '/api/home/category/user',
    timeout: 100,
    method: 'get',
    response: () => {
      return createUser()
    }
  },
  /**
   * 获取频道分类
   */
  {
    url: '/api/home/category/channelCategoryList',
    timeout: 100,
    method: 'get',
    response: () => {
      return createChannelCategoryList()
    }
  },
  /**
   * 获取轮播图信息
   */
  {
    url: '/api/home/carousel',
    timeout: 100,
    method: 'get',
    response: () => {
      return createCarousel()
    }
  },
  /**
   * 获取首页视频
   */
  {
    url: '/api/home/video',
    timeout: 100,
    method: 'get',
    response: () => {
      return createFVideo()
    }
  },
  /**
   * 获取首页后续视频
   */
  {
    url: '/api/home/nextVideo',
    timeout: 100,
    method: 'get',
    response: () => {
      return createSVideo()
    }
  },
  /**
   * 获取首页排行
   */
  {
    url: '/api/home/rankingList',
    timeout: 100,
    method: 'get',
    response: () => {
      return createRankingList()
    }
  }
] as MockMethod[]
