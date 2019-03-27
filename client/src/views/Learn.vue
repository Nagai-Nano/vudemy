<template>
  <Loading v-if="isLoading" />
  <v-container fluid pa-0 ma-0 v-else>
    <v-layout>
      <HeadTitle :title="title" />
    </v-layout>
    <v-layout wrap>
      <v-flex xs12>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="chapter in curriculum" :key="chapter.id">
            <template v-slot:header>
              <div class="letter-spacing">
                <h3 class="text-uppercase font-weight-regular">
                  section {{ chapter.object_index }}:
                </h3>
                <h2 class="font-weight-medium">{{ chapter.title }}</h2>
              </div>
            </template>
            <v-card class="px-4">
              <template v-for="(lecture, index) in chapter.lectures">
                <v-card-text :key="lecture.id" v-if="lecture._class !== 'quiz'">
                  <p
                    class="title font-weight-regular letter-spacing ma-0 d-flex justify-space-around"
                  >
                    <span>{{ index + 1 }}. {{ lecture.title }}</span>
                    <span class="text-xs-right">
                      {{ formatTime(lecture.asset.length, lecture.asset.asset_type) }}
                    </span>
                  </p>
                  <template v-if="lecture.supplementary_assets.length">
                    <div v-for="asset in lecture.supplementary_assets" :key="asset.id">
                      <template v-if="asset.asset_type === 'ExternalLink'">
                        <a
                          :href="asset.external_url"
                          class="decoration-none subheading blue--text text--lighten-2 mt-2 d-block grey darken-2 hover-underline px-3 py-2"
                          target="_blank"
                        >
                          {{ asset.title }}
                        </a>
                      </template>
                      <template v-else>
                        <a
                          class="decoration-none subheading blue--text text--lighten-2 mt-2 d-block grey darken-2 hover-underline px-3 py-2"
                          @click.prevent="downloadAssetFile(asset.id)"
                        >
                          {{ asset.filename }}
                        </a>
                      </template>
                    </div>
                  </template>
                </v-card-text>
              </template>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import request from '@/lib/request'
import HeadTitle from '@/components/common/HeadTitle'
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
    Loading
  },
  data() {
    return {
      title: '',
      curriculum: []
    }
  },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapMutations(['SET_LOADING']),
    formatTime(length, type) {
      if (type !== 'Video') return ''

      const date = new Date(null)
      date.setSeconds(length)
      return date.toISOString().substr(14, 5)
    },
    async downloadAssetFile(id) {
      console.log(id)
    }
  },
  async created() {
    this.SET_LOADING(true)

    const apis = [`/course/title/${this.id}`, `/course/curriculum/${this.id}`]
    const [title, curriculum] = await Promise.all(apis.map(request))
    this.title = title.title
    this.curriculum = curriculum.results

    this.SET_LOADING(false)
  }
}
</script>
