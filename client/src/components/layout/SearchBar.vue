<template>
  <v-text-field
    placeholder="Search course..."
    autofocus
    solo
    color="white"
    flat
    append-icon="search"
    v-bind="$attrs"
    v-model="q"
    @keyup.enter="search"
  />
</template>

<script>
export default {
  data() {
    return {
      q: ''
    }
  },
  methods: {
    search() {
      if (this.q) {
        this.$router.push(`/courses/?search=${this.q}`)
      }
    }
  }
}
</script>
