import Home from '@/views/Home'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/courses',
    component: () => import('@/views/Courses.vue'),
    props: route => ({ ...route.query })
  }
]
