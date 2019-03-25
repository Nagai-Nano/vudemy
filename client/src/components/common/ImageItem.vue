<template>
  <v-img v-bind="$attrs" :lazy-src="require('@/assets/loading.png')">
    <template v-slot:placeholder>
      <v-layout fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="blue lighten-2"></v-progress-circular>
      </v-layout>
    </template>
  </v-img>
</template>
