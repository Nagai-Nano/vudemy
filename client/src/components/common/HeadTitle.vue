<template>
  <v-flex xs12 style="border-top: 4px solid #424242">
    <h2
      class="headline text-uppercase letter-spacing font-weight-regular d-inline-block px-3 py-2 grey darken-3"
    >
      {{ title }}
    </h2>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
