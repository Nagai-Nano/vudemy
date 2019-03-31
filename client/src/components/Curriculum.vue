<template>
  <v-expansion-panel :value="chapterIndex">
    <v-expansion-panel-content v-for="chapter in curriculum" :key="chapter.id">
      <template v-slot:header>
        <div class="letter-spacing">
          <h2 class="text-uppercase font-weight-regular">section {{ chapter.object_index }}:</h2>
          <h2 class="headline font-weight-regular">{{ chapter.title || 'Untitled Section' }}</h2>
        </div>
      </template>
      <v-card class="px-3" style="margin-bottom: 12px;">
        <v-card-text v-for="lecture in chapter.lectures" :key="lecture.id" class="ma-0 px-2 py-0">
          <template v-if="lecture._class === 'lecture'">
            <p
              @click="$emit('setSource', { lecture, chapterIndex: chapter.object_index - 1 })"
              class="hoverable pa-3 ma-0 subheading d-flex align-center"
              :class="{ 'grey darken-2': lectureIndex === lecture.object_index }"
            >
              <span>{{ lecture.object_index }}. {{ lecture.title }}</span>
              <span class="text-xs-right grey--text text--lighten-2">
                {{ lecture.asset.length | formatTime(lecture.asset.asset_type) }}
              </span>
            </p>
            <template v-if="lecture.supplementary_assets.length">
              <p
                v-for="(asset, index) in lecture.supplementary_assets"
                :key="asset.id"
                class="px-3 py-2 ma-0 grey darken-2"
                :class="{ 'mb-2': index === lecture.supplementary_assets.length - 1 }"
              >
                <a @click.prevent class="d-block decoration-none hover-underline white--text">
                  {{ asset.title }}
                </a>
              </p>
            </template>
          </template>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { formatTime } from '@/lib/filters'

export default {
  props: {
    curriculum: {
      type: Array,
      required: true
    },
    chapterIndex: {
      type: Number,
      required: true
    },
    lectureIndex: {
      type: Number,
      required: true
    }
  },
  filters: {
    formatTime
  }
}
</script>
