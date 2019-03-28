<template>
  <video
    ref="video"
    class="mw-100"
    crossorigin
    playsInline
    :poster="data.thumbnail_url"
    :src="data.stream_urls.Video[0].file"
  >
    <source
      v-for="source in data.stream_urls.Video"
      :key="source.label"
      :src="source.file"
      :type="source.type"
      :size="source.label"
    />

    <track
      kind="captions"
      v-for="caption in data.captions"
      :key="caption.id"
      :label="caption.video_label"
      :srclang="caption.locale_id"
      :src="caption.url"
    />
  </video>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      player: {}
    }
  },
  mounted() {
    this.player = new window.Plyr(this.$refs.video, {
      seekTime: 5,
      invertTime: false,
      autoplay: true
    })
  },
  beforeDestroy() {
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
