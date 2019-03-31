<template>
  <v-container fluid ma-0 pa-0 v-if="!isLoading">
    <v-layout>
      <HeadTitle :title="course.title" />
    </v-layout>

    <v-layout class="my-4" style="position: relative; min-height: 600px;">
      <template v-if="source">
        <Video v-if="source.asset.asset_type === 'Video'" :source="source.asset" @next="next" />
        <div v-else>hi</div>
      </template>

      <Loading v-else class="source-loading" />
    </v-layout>

    <v-divider class="my-4" />

    <v-layout wrap>
      <v-flex xs12>
        <h1 class="text-uppercase mb-2 font-weight-regular letter-spacing">curriculum</h1>
      </v-flex>
      <v-flex xs12>
        <Curriculum
          :curriculum="course.curriculum"
          :chapter-index="currentChapterIndex"
          :lecture-index="currentLectureIndex"
          :course-id="id"
          @setSource="setSource"
        />
      </v-flex>
    </v-layout>
  </v-container>

  <Loading v-else />
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import request from '@/lib/request'
import HeadTitle from '@/components/common/HeadTitle'
import Curriculum from '@/components/Curriculum'
import Video from '@/components/Video'
import Loading from '@/components/common/Loading'

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      course: {
        title: '',
        curriculum: []
      },
      source: null,
      currentLectureIndex: 0,
      currentChapterIndex: 0
    }
  },
  methods: {
    ...mapMutations(['SET_LOADING']),
    async setSource({ lecture, chapterIndex }) {
      if (chapterIndex !== this.currentChapterIndex) {
        this.currentChapterIndex = chapterIndex < 0 ? 0 : chapterIndex
      }

      if (lecture.object_index !== this.currentLectureIndex) {
        this.currentLectureIndex = lecture.object_index
        this.source = null

        const response = await request(`/course/source/${this.id}/${lecture.id}`)
        this.source = response
      }
    },
    next() {
      const nextLectureIndex = this.currentLectureIndex + 1
      const chapter = this.course.curriculum.filter(c =>
        c.lectures.find(l => l.object_index === nextLectureIndex)
      )[0]

      if (!chapter) return
      const nextLecture = chapter.lectures.find(l => l.object_index === nextLectureIndex)
      if (!nextLecture) return

      this.setSource({ lecture: nextLecture, chapterIndex: chapter.object_index - 1 })
    }
  },
  computed: {
    ...mapState(['isLoading'])
  },
  components: {
    HeadTitle,
    Curriculum,
    Video,
    Loading
  },
  async created() {
    this.SET_LOADING(true)

    const [{ title }, { results }] = await Promise.all(
      ['title', 'curriculum'].map(p => request(`/course/${p}/${this.id}`))
    )
    this.course.title = title
    this.course.curriculum = results

    this.setSource({ lecture: results[0].lectures[0], chapterIndex: 0 })

    this.SET_LOADING(false)
  }
}
</script>

<style scoped>
.source-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
