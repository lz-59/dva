import dynamic from 'dva/dynamic'

const app = window.app

export const Home = dynamic({//按需加载
  app,
  models: () => [
    import('@/models/home')
  ],
  component: () => import('@/page/home')
})