<template>
  <v-img v-bind="$attrs" :lazy-src="require('@/assets/loading.png')">
    <template v-slot:placeholder>
      <v-layout fill-height align-center justify-center ma-0>
        <Loading />
      </v-layout>
    </template>
  </v-img>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  components: {
    Loading
  }
}
</script>
