export default {
  data() {
    return {
      bp: null
    }
  },
  watch: {
    '$vuetify.breakpoint'() {
      this.bp = this.$vuetify.breakpoint
    }
  },
  created() {
    this.bp = this.$vuetify.breakpoint
  },
  destroyed() {
    this.bp = null
  }
}
