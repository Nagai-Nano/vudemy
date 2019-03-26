<template>
  <v-layout class="error-wrapper">
    <div class="xs12 mb-3">
      <img :src="imgSrc" />
    </div>
    <div class="text-xs-center">
      <template v-if="status === 403">
        <p class="headline letter-spacing ma-0">
          Access token has been expired.
        </p>
        <p class="headline letter-spacing">
          Please contact the
          <a
            class="blue--text text--lighten-2 decoration-none"
            href="https://www.facebook.com/Nanoooooooooooooooooooooooooooooooooooooooooooooox"
            target="_blank"
          >
            author
          </a>
          to update the new one
        </p>
      </template>
      <template v-else>
        <p class="headline letter-spacing ma-0">
          The page you are looking for is not found
        </p>
        <p class="headline letter-spacing">
          Go back
          <router-link to="/" class="blue--text text--lighten-2 decoration-none">Home</router-link>
        </p>
      </template>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: {
    status: {
      type: [String, Number],
      default: 404
    }
  },
  data() {
    return {
      imgSrc:
        this.status === 403
          ? 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.1997-6/s168x128/10574694_1498876503686813_1420873835_n.png?_nc_cat=1&_nc_eui2=AeExnPAGS1j9oWOoQgFpj5NwaN8_7e_4b3m8eKB2tvdoDM4xVDywvKsKzxerWxAN4FQLfxuqogvaJP3_J0C3twsuF8U1_Qta1-wm-mh0gwot9w&_nc_ht=scontent.fsgn2-4.fna&oh=86923c3810f7805a5d7c9a39847eebd9&oe=5D0B459E'
          : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.1997-6/s168x128/14279490_1804313623147203_1346244953_n.png?_nc_cat=1&_nc_ht=scontent.fsgn2-4.fna&oh=a9d81d20c6e63f219ca7cbe0a23b0524&oe=5D0E6FCA'
    }
  }
}
</script>

<style scoped>
.error-wrapper {
  height: 80vh !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
