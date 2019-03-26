<template>
  <div>{{ id }} watch</div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
