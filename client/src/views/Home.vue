<template>
  <Loading v-if="isLoading" />
  <v-container fluid pa-0 ma-0 v-else>
    <v-layout wrap v-for="(section, index) in sections" :key="index">
      <HeadTitle :title="section.title" :class="{ 'mt-3': index > 0 }" />
      <v-flex xs12 v-if="section.courses.length">
        <CourseGrid :courses="section.courses" />
        <v-btn
          block
          flat
          :to="section.url"
          class="subheading mt-3 letter-spacing font-weight-regular"
        >
          View more
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import request from '@/lib/request'
import HeadTitle from '@/components/common/HeadTitle'
import CourseGrid from '@/components/common/CourseGrid'
import Loading from '@/components/common/Loading'

export default {
  data() {
    return {
      sections: [
        {
          title: 'recently enrolled',
          api: '/courses',
          url: '/courses',
          courses: []
        },
        {
          title: 'it & software',
          api: '/courses?id=294',
          url: '/courses/?category_id=294',
          courses: []
        },
        {
          title: 'photography',
          api: '/courses?id=273',
          url: '/courses/?category_id=273',
          courses: []
        }
      ]
    }
  },
  components: {
    HeadTitle,
    CourseGrid,
    Loading
  },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapMutations(['SET_LOADING'])
  },
  async created() {
    document.title = 'VUDEMY | FREE UDEMY COURSES'
    this.SET_LOADING(true)

    const responses = await Promise.all(this.sections.map(s => request(s.api)))
    this.sections.forEach((_, i) => {
      this.sections[i].courses = responses[i].courses
    })

    this.SET_LOADING(false)
  }
}
</script>
