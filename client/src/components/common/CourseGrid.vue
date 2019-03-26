<template>
  <v-container grid-list-md fluid pa-0 ma-0 mt-3>
    <v-layout row wrap>
      <v-flex v-for="course in courses" :key="course.id" md3 d-flex>
        <v-card flat hover>
          <router-link :to="`/course/${course.id}/detail`">
            <ImageItem :src="course.image_240x135" />
          </router-link>
          <v-card-title class="pa-3">
            <div>
              <h3 class="ma-0 subheading font-weight-regular" style="min-height: 48px;">
                <router-link
                  :to="`/course/${course.id}/detail`"
                  class="white--text decoration-none hover-underline"
                >
                  {{ course.title | textTruncate(50) }}
                </router-link>
              </h3>
              <div class="mt-2 grey--text text--lighten-2">
                {{ course.visible_instructors[0].display_name }}
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn flat class="blue--text text--lighten-2" :to="`/course/${course.id}/watch`">
              start course
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ImageItem from './ImageItem'
import { textTruncate } from '@/lib/filters'

export default {
  props: {
    courses: {
      type: Array,
      required: true
    }
  },
  components: {
    ImageItem
  },
  filters: {
    textTruncate
  }
}
</script>
