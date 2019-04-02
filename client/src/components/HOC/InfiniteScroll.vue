<script>
export default {
  props: {
    hasNext: {
      type: Boolean,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    scrollHandler() {
      if (
        this.hasNext &&
        !this.isLoading &&
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100
      ) {
        this.$emit('loadmore')
      }
    }
  },
  render() {
    return this.$slots.default
  },
  created() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>
