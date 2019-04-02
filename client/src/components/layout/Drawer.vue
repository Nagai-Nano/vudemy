<template>
  <v-navigation-drawer app clipped floating :value="drawer" class="grey darken-4">
    <v-container>
      <v-list subheader class="mt-5">
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon class="white--text">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="white--text text-uppercase">Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group v-model="active" prepend-icon="category" active-class="white--text">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="text-uppercase">Category</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <template v-if="categories.length">
            <v-list-tile
              v-for="cat in categories"
              :key="cat.id"
              :to="`/courses/?category_id=${cat.id}`"
            >
              <v-list-tile-title class="white--text decoration-none">
                {{ cat.title }}
              </v-list-tile-title>
            </v-list-tile>
          </template>
        </v-list-group>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: false
    }
  }
}
</script>
