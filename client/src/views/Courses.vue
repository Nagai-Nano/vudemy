<template>
  <v-container fluid pa-0 ma-0>
    <v-layout wrap v-if="courses.length || !isLoading">
      <HeadTitle :title="title" />
      <InfiniteScroll :has-next="hasNext" :is-loading="isLoading" @loadmore="loadmore">
        <CourseGrid :courses="courses" />
      </InfiniteScroll>
      <div v-if="isLoading">loading ....</div>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import request from '@/lib/request'
import HeadTitle from '@/components/common/HeadTitle'
import CourseGrid from '@/components/common/CourseGrid'
import InfiniteScroll from '@/components/HOC/InfiniteScroll'

export default {
  props: {
    search: String,
    category_id: [String, Number]
  },
  data() {
    let query
    this.category_id
      ? (query = `?category_id=${this.category_id}&page=`)
      : this.search
      ? (query = `?search=${this.search}&page=`)
      : (query = '?page=')

    return {
      page: 1,
      query,
      title: '',
      hasNext: false,
      courses: []
    }
  },
  components: {
    HeadTitle,
    CourseGrid,
    InfiniteScroll
  },
  computed: {
    ...mapState(['isLoading', 'categories'])
  },
  methods: {
    ...mapMutations(['SET_LOADING']),
    async loadmore() {
      this.SET_LOADING(true)
      this.page += 1

      const response = await request(`/courses${this.query}${this.page}`)
      this.courses.push(...response.courses)
      this.hasNext = response.next

      this.SET_LOADING(false)
    }
  },
  async created() {
    this.SET_LOADING(true)

    const response = await request(`/courses${this.query}${this.page}`)
    this.courses = response.courses
    this.hasNext = response.next

    if (this.category_id) {
      this.title = this.categories.filter(cat => cat.id === +this.category_id)[0].title
    } else if (this.search) {
      this.title = `search by: ${decodeURIComponent(this.search)}`
    } else {
      this.title = 'recently enrolled'
    }

    this.SET_LOADING(false)
  }
}
</script>
