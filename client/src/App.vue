<template>
  <v-app dark>
    <v-content>
      <app-header />
      <v-container>
        <router-view :key="$route.fullPath" />
      </v-container>
      <app-footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
