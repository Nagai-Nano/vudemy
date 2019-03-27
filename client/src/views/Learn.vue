<template>
  <v-container fluid pa-0 ma-0>
    <v-layout>
      <HeadTitle title="hi" />
    </v-layout>
  </v-container>
</template>

<script>
import HeadTitle from '@/components/common/HeadTitle'
import request from '@/lib/request'

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  components: {
    HeadTitle
  }
}
</script>
