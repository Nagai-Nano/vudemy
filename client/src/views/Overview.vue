<template>
  <Loading v-if="isLoading" />
  <v-container fluid pa-0 ma-0 v-else>
    <v-layout>
      <HeadTitle :title="detail.title" />
    </v-layout>
    <v-layout wrap mt-4>
      <v-flex md4>
        <ImageItem :src="detail.image_480x270" max-height="270px" />
      </v-flex>
      <v-flex md8 pl-3 class="letter-spacing">
        <h2 class="mb-2 headline font-weight-regular">{{ detail.headline }}</h2>
        <h2>
          Skill level : <span class="font-weight-regular">{{ detail.instructional_level }}</span>
        </h2>
        <h2>
          Video length : <span class="font-weight-regular">{{ detail.content_info }}</span>
        </h2>
        <v-btn
          :to="`/course/${detail.id}/learn`"
          style="margin-left: 1px"
          depressed
          class="grey darken-3 mt-2"
        >
          Learn Now
        </v-btn>
      </v-flex>
    </v-layout>
    <v-divider class="my-4" />
    <v-layout column>
      <h2 class="text-uppercase letter-spacing font-weight-regular mb-4">description</h2>
      <p v-html="detail.description" style="font-size: 16px; margin: 0" />
    </v-layout>
    <v-divider class="my-4" />
    <v-layout wrap>
      <h2 class="text-uppercase letter-spacing font-weight-regular mb-4">
        {{ detail.visible_instructors.length > 1 ? 'Instructors' : 'Instructor' }}
      </h2>
      <v-flex
        xs12
        v-for="instructor in detail.visible_instructors"
        :key="instructor.id"
        class="mb-4"
      >
        <div class="d-flex align-center">
          <img
            :src="instructor.image_200_H"
            style="border-radius: 50%; flex-grow: 0!important; width: 100px!important; height: 100px!important"
          />
          <div class="ml-3">
            <h2 class="font-weight-regular letter-spacing">{{ instructor.display_name }}</h2>
            <h3 class="font-weight-regular letter-spacing grey--text text--lighten-2">
              {{ instructor.job_title }}
            </h3>
          </div>
        </div>
        <p v-html="instructor.description" style="font-size: 16px;" class="mt-3 pl-1" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import request from '@/lib/request'
import HeadTitle from '@/components/common/HeadTitle'
import ImageItem from '@/components/common/ImageItem'
import Loading from '@/components/common/Loading'

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  components: {
    HeadTitle,
    ImageItem,
    Loading
  },
  data() {
    return {
      detail: {}
    }
  },
  methods: {
    ...mapMutations(['SET_LOADING'])
  },
  computed: {
    ...mapState(['isLoading'])
  },
  async created() {
    this.SET_LOADING(true)

    const response = await request(`/course/detail/${this.id}`)
    this.detail = response

    this.SET_LOADING(false)
  }
}
</script>
