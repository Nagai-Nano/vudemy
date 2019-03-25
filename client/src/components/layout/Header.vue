<template>
  <header>
    <v-toolbar dark flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase letter-spacing ma-0">
        <router-link to="/" class="white--text decoration-none">Vudemy</router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn flat>Home</v-btn>
        <v-menu :nudge-width="100">
          <template v-slot:activator="{ on }">
            <v-toolbar-title v-on="on" style="cursor: pointer;" class="d-flex align-center">
              <span class="text-uppercase font-weight-medium white--text body-2">category</span>
              <v-icon dark>arrow_drop_down</v-icon>
            </v-toolbar-title>
          </template>

          <template v-if="category.length">
            <v-list class="py-0">
              <v-list-tile v-for="cat in category" :key="cat.id">
                <v-list-tile-title>
                  <router-link to="/" class="white--text decoration-none">
                    {{ cat.title }}
                  </router-link>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </template>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      category: []
    }
  },
  async created() {
    const response = await fetch('http://localhost:1337/api/category')
    const json = await response.json()
    this.category = json.categories
    console.log(this.category)
  }
}
</script>

<style scoped>
.v-menu__content {
  top: 64px !important;
  left: 1123px !important;
}
</style>
