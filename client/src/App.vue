<template>
  <v-app dark>
    <v-content>
      <app-header />
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
  components: {
    'app-header': Header
  }
}
</script>
