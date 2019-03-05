<template>
  <div class="results row d-flex justify-content-around">
    <div class="col-4 yellow">
      <h1>Results</h1>
      <div v-for="collection in results" @click='setActiveCollection(collection[0].collectionName)'>
        <h3>{{collection[0].collectionName}}</h3>
        <!-- <ol>
          <li v-for="song in collection">
            {{song.trackName}}
          </li>
        </ol> -->
      </div>
    </div>
    <details-view :songs='songs'></details-view>
  </div>
</template>

<script>
  import DetailsView from '@/components/Details.vue'
  export default {
    name: '',
    data() {
      return {
        activeCollection: {}
      }
    },
    computed: {
      results() {
        let dict = {}
        let songs = this.$store.state.results
        songs.sort((a, b) => {
          return a.trackName - b.trackName
        })
        for (let i = 0; i < songs.length; i++) {
          let song = songs[i]
          if (!dict[song.collectionName]) {
            dict[song.collectionName] = []
          }
          dict[song.collectionName].push(song)
        }
        return dict
      },
      songs() {
        return this.results[this.activeCollection] || []
      }
    },
    methods: {
      setActiveCollection(collection) {
        this.activeCollection = collection
      }
    },
    components: {
      DetailsView
    }
  }
</script>

<style>
  .yellow {
    background-color: yellow
  }
</style>