<template>
  <Loading v-if="isLoading" />
  <v-container fluid pa-0 ma-0 v-else>
    <v-layout wrap>
      <HeadTitle :title="detail.title" />
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import request from '@/lib/request'
import HeadTitle from '@/components/common/HeadTitle'
import ImageItem from '@/components/common/ImageItem'
import Loading from '@/components/common/Loading'

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  components: {
    HeadTitle,
    ImageItem,
    Loading
  },
  data() {
    return {
      detail: {}
    }
  },
  methods: {
    ...mapMutations(['SET_LOADING'])
  },
  computed: {
    ...mapState(['isLoading'])
  },
  async created() {
    this.SET_LOADING(true)

    const response = await request(`/course/detail/${this.id}`)
    this.detail = response

    this.SET_LOADING(false)
  }
}
</script>
