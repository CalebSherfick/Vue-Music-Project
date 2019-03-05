<template>
  <div class="details col-7 yellow">

    <div v-for="song in songs">
      <img class="song-img" :src="song.artworkUrl100"></img>
      <h1>{{song.trackName}}</h1>
      <h1>{{song.artistName}}</h1>
      <ol>
        <li v-for="song in collection">
          {{song.trackName}}
        </li>
      </ol>
      <audio controls :src="song.previewUrl"></audio>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'Details',
    props: ['songs'],
    data() {
      return {
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style>
</style>