<template>
  <v-toolbar-items>
    <v-btn flat>Home</v-btn>
    <v-menu :nudge-width="100" offset-y>
      <template v-slot:activator="{ on }">
        <v-toolbar-title v-on="on" style="cursor: pointer;" class="d-flex align-center">
          <span class="text-uppercase font-weight-medium white--text body-2">category</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
      </template>

      <template v-if="categories.length">
        <v-list class="py-0 grey darken-4">
          <v-list-tile v-for="cat in categories" :key="cat.id">
            <v-list-tile-title>
              <router-link
                :to="`/courses/?category_id=${cat.id}`"
                class="white--text decoration-none"
              >
                <p class="pa-0 ma-0">{{ cat.title }}</p>
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </template>
    </v-menu>
  </v-toolbar-items>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
div[role='listitem']:hover {
  cursor: pointer;
  background: #424242;
}
</style>
