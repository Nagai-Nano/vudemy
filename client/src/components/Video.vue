<template>
  <v-flex xs12 :key="source.id">
    <video
      ref="video"
      class="mw-100"
      crossorigin
      playsInline
      :poster="source.thumbnail_url"
      :src="source.stream_urls.Video[0].file"
    >
      <source
        v-for="source in source.stream_urls.Video"
        :key="source.label"
        :src="source.file"
        :type="source.type"
        :size="source.label"
      />

      <track
        kind="captions"
        v-for="caption in source.captions"
        :key="caption.id"
        :label="caption.video_label"
        :srclang="caption.locale_id"
        :src="caption.url"
        default
      />
    </video>
  </v-flex>
</template>

<script>
export default {
  props: {
    source: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      player: {}
    }
  },
  methods: {
    nextLecture() {
      this.$emit('changeLecture', 1)
    }
  },
  mounted() {
    this.player = new window.Plyr(this.$refs.video, {
      seekTime: 5
    })

    this.player.on('ended', this.nextLecture)
  },
  destroyed() {
    this.player.off('ended', this.nextLecture)
    this.player.destroy()
  }
}
</script>

<style>
.plyr,
.plyr__video-wrapper {
  min-width: 100% !important;
}
</style>
