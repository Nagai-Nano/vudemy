<template>
  <v-container grid-list-md fluid pa-0 ma-0 mt-3>
    <v-layout row wrap>
      <v-flex v-for="(course, index) in courses" :key="index" xs12 sm6 md3 d-flex>
        <v-card flat hover class="text-truncate">
          <router-link :to="`/course/${course.id}/overview`">
            <ImageItem position="top center" :src="course.image_240x135" max-height="135px" />
          </router-link>
          <v-card-title class="pa-3 text-truncate">
            <div class="text-truncate">
              <h3 class="ma-0 subheading font-weight-regular text-truncate">
                <router-link
                  :to="`/course/${course.id}/overview`"
                  class="white--text decoration-none hover-underline"
                >
                  {{ course.title }}
                </router-link>
              </h3>
              <div class="mt-2 grey--text text--lighten-2 text-truncate">
                {{ course.visible_instructors[0].display_name }}
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn flat class="blue--text text--lighten-2" :to="`/course/${course.id}/learn`">
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

export default {
  props: {
    courses: {
      type: Array,
      required: true
    }
  },
  components: {
    ImageItem
  }
}
</script>
