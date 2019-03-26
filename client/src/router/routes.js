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
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/Error.vue'),
    props: true
  },
  {
    path: '*',
    redirect: { name: 'error', params: { status: 404 } }
  }
]
