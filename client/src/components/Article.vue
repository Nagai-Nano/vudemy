<template>
  <v-flex xs12 class="shadow text-xs-center overflow-x-hidden overflow-y-auto article">
    <div style="max-width: 90%; margin: auto" class="py-2">
      <template v-if="assetType === 'Article'">
        <div
          v-html="source.content"
          class="font-weight-regular mt-2 letter-spacing"
          style="font-size: 1.3rem;"
        />
      </template>
      <template v-else-if="assetType === 'Presentation'">
        <div v-if="source.asset.download_urls">
          <a
            v-for="link in downloadUrls"
            :key="link.file"
            :href="link.file"
            class="v-btn grey darken-3 theme--dark v-btn--depressed"
            download
          >
            Download Resources
          </a>
        </div>
        <ImageItem
          v-for="image in source.asset.slide_urls"
          :key="image"
          :src="image"
          contain
          class="mt-2"
        />
      </template>
      <template v-else-if="assetType === 'E-Book'">
        <p style="font-size: 1.3rem;">
          Download and review the PDF provided by your instructor for this lecture.
        </p>
        <div v-if="source.asset.download_urls">
          <a
            v-for="link in downloadUrls"
            :key="link.file"
            :href="link.file"
            class="v-btn grey darken-3 theme--dark v-btn--depressed"
            download
          >
            Download
          </a>
        </div>
      </template>
      <template v-else>
        oh nooooo...
      </template>
    </div>
  </v-flex>
</template>

<script>
import ImageItem from '@/components/common/ImageItem'

export default {
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  computed: {
    assetType() {
      return this.source.asset.asset_type
    },
    downloadUrls() {
      return this.source.asset.download_urls[this.assetType]
    }
  },
  components: {
    ImageItem
  }
}
</script>

<style scoped>
.shadow {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}

.overflow-y-auto {
  overflow-y: auto;
}

.article {
  max-height: 600px;
}
</style>
