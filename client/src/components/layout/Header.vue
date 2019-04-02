<template>
  <header>
    <v-toolbar app flat clipped-left :extended="bp.smAndDown && toggleSearch">
      <v-toolbar-side-icon v-if="bp.smAndDown" @click="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase letter-spacing ma-0">
        <router-link to="/" class="white--text decoration-none d-flex justify-center align-center">
          <img :src="require('@/assets/logo.png')" style="width: 35px" />
          udemy
        </router-link>
      </v-toolbar-title>

      <template v-if="bp.mdAndUp">
        <v-spacer />
        <SearchBar class="mt-2" />
        <v-spacer />
        <ToolbarItems :categories="categories" />
      </template>

      <template v-if="bp.smAndDown">
        <v-spacer />
        <v-icon @click="toggleSearch = !toggleSearch">
          {{ toggleSearch ? 'close' : 'search' }}
        </v-icon>
      </template>

      <template v-if="bp.smAndDown && toggleSearch" v-slot:extension>
        <SearchBar />
      </template>
    </v-toolbar>
    <Drawer v-if="bp.smAndDown" :drawer="drawer" :categories="categories" />
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import bpMixin from '@/lib/breakpointMixin'
import SearchBar from './SearchBar'
import ToolbarItems from './ToolbarItems'
import Drawer from './Drawer'

export default {
  mixins: [bpMixin],
  data() {
    return {
      drawer: false,
      toggleSearch: false
    }
  },
  components: {
    SearchBar,
    ToolbarItems,
    Drawer
  },
  computed: {
    ...mapGetters(['categories'])
  },
  methods: {
    ...mapActions(['getCategories'])
  },
  created() {
    this.getCategories()
  }
}
</script>
