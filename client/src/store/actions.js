import request from '@/lib/request'

export const getCategories = async ({ commit }) => {
  const data = await request('/category')
  commit('SET_CATEGORIES', data.categories)
}
