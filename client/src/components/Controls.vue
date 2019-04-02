<template>
  <v-layout row wrap ma-0 pa-0 d-flex align-center mt-2>
    <v-flex xs12 sm7>
      <p class="headline mb-0 letter-spacing">{{ currentIndex }}. {{ source.title }}</p>
    </v-flex>
    <v-flex xs12 sm5 d-flex align-center justify-end>
      <v-btn depressed v-if="!isFirst" @click="changeLecture(-1)">Prev</v-btn>

      <v-menu v-if="source.asset.asset_type === 'Video'" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn depressed v-on="on">
            Download
          </v-btn>
        </template>
        <v-list class="pa-0">
          <div>
            <span class="subheading px-3 py-1 d-block grey--text text--lighten-2">Videos</span>
            <a
              v-for="url in downloadUrls"
              :key="url.label"
              class="decoration-none d-block px-4 py-2 blue--text text--lighten-2 hoverable"
              :href="url.file"
              download
            >
              {{ url.label }}p
            </a>
          </div>
          <div v-if="source.asset.captions.length">
            <span class="subheading px-3 py-1 d-block grey--text text--lighten-2">Subtitles</span>
            <a
              v-for="sub in source.asset.captions"
              :key="sub.id"
              class="decoration-none d-block px-4 py-2 blue--text text--lighten-2 hoverable"
              :href="sub.url"
              download
            >
              {{ sub.video_label }}
            </a>
          </div>
        </v-list>
      </v-menu>
      <v-btn depressed v-if="!isLast" @click="changeLecture(1)">Next</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    source: {
      type: Object,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    },
    curriculum: {
      type: Array,
      required: true
    }
  },
  computed: {
    isLast() {
      const lastChapter = this.curriculum[this.curriculum.length - 1]
      const lastLecture = lastChapter.lectures[lastChapter.lectures.length - 1]

      return lastLecture.object_index === this.currentIndex
    },
    isFirst() {
      return this.curriculum[0].lectures[0].object_index === this.currentIndex
    },
    downloadUrls() {
      return this.source.asset.download_urls
        ? this.source.asset.download_urls.Video
        : this.source.asset.stream_urls.Video
    }
  },
  methods: {
    changeLecture(num) {
      this.$emit('changeLecture', num)
    }
  }
}
</script>

<style scoped>
.v-menu {
  display: none !important;
}
</style>
