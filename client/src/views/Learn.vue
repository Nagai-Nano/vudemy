<template>
  <Loading v-if="isLoading" />
  <v-container fluid pa-0 ma-0 v-else>
    <v-layout>
      <HeadTitle :title="title" />
    </v-layout>
    <v-layout my-4>
      <div class="mw-100" v-if="lecture.type === 'Video' && lecture.data" :key="lecture.id">
        <Video :data="lecture.data" />
      </div>
      <Loading
        v-else
        class="mw-100 d-flex column justify-center align-center"
        style="min-height: 600px"
      />
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
            <v-card class="px-4 mb-3">
              <template v-for="(lecture, index) in chapter.lectures">
                <v-card-text :key="lecture.id" v-if="lecture._class !== 'quiz'" class="pa-0">
                  <p
                    @click="setLectureData(lecture)"
                    class="pa-3 hoverable title font-weight-regular letter-spacing ma-0 d-flex justify-space-around"
                  >
                    <span>{{ index + 1 }}. {{ lecture.title }}</span>
                    <span class="text-xs-right">
                      {{ lecture.asset.length | formatTime(lecture.asset.asset_type) }}
                    </span>
                  </p>
                  <template v-if="lecture.supplementary_assets.length">
                    <div v-for="asset in lecture.supplementary_assets" :key="asset.id">
                      <template v-if="asset.asset_type === 'ExternalLink'">
                        <a
                          :href="asset.external_url"
                          class="decoration-none subheading blue--text text--lighten-2 mt-2 d-block grey darken-4 hover-underline px-3 py-2"
                          target="_blank"
                        >
                          {{ asset.title }}
                        </a>
                      </template>
                      <template v-else>
                        <a
                          class="decoration-none subheading blue--text text--lighten-2 mt-2 d-block grey darken-4 hover-underline px-3 py-2"
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
import { formatTime } from '@/lib/filters'
import HeadTitle from '@/components/common/HeadTitle'
import Loading from '@/components/common/Loading'
import Video from '@/components/Video'

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  components: {
    HeadTitle,
    Loading,
    Video
  },
  data() {
    return {
      title: '',
      curriculum: [],
      lecture: {
        title: '',
        type: '',
        data: {}
      }
    }
  },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapMutations(['SET_LOADING']),
    async downloadAssetFile(id) {},
    async setLectureData({ id, asset }) {
      this.lecture.data = {}
      this.lecture.type = ''

      const response = await request(`/course/source/${this.id}/${id}`)
      this.lecture.data = response.asset
      this.lecture.type = asset.asset_type
    }
  },
  filters: {
    formatTime
  },
  async created() {
    this.SET_LOADING(true)

    const [title, curriculum] = await Promise.all(
      ['title', 'curriculum'].map(p => request(`/course/${p}/${this.id}`))
    )
    this.title = title.title
    this.curriculum = curriculum.results
    await this.setLectureData(this.curriculum[0].lectures[0])

    this.SET_LOADING(false)
  }
}
</script>
