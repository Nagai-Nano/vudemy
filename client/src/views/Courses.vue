<template>
  <v-container fluid pa-0 ma-0>
    <v-layout wrap v-if="!isLoading">
      <HeadTitle :title="title" />
      <CourseGrid :courses="courses" />
    </v-layout>
    <div v-if="isLoading">loading ....</div>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import request from '@/lib/request'
import HeadTitle from '@/components/common/HeadTitle'
import CourseGrid from '@/components/common/CourseGrid'

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
    CourseGrid
  },
  computed: {
    ...mapState(['isLoading', 'categories'])
  },
  methods: {
    ...mapMutations(['SET_LOADING'])
  },
  async created() {
    this.SET_LOADING(true)

    const data = await request(`/courses${this.query}${this.page}`)
    this.courses = data.courses
    this.hasNext = data.next

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
