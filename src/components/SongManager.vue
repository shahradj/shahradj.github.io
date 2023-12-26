<template>
  <div>
    <select v-model="selectedItem" aria-placeholder="Select Song" style="background-color: #f00;">
      <option v-for="item in items" :key="item.id" :value="item">
        {{ item.name }}
      </option>
    </select>

    <div v-if="selectedItem">
      <!-- Display information related to the selected item -->
      <h2>{{ selectedItem.name }}</h2>
      <!-- Make API calls or perform actions based on the selected item -->
    </div>
    <Track
      v-for="(track, index) in $store.state.tracks"
      :track="track"
      :number="index + 1"
      :key="track.id"
    />
  </div>
</template>

<script>
import Track from './Track';
import Song from './Song';
import Dropdown from 'vue-simple-search-dropdown';

var files2;

fetch('https://shahradj.pythonanywhere.com/static/',{
      mode: 'cors',
      headers: {
          'Access-Control-Allow-Origin':'*'
      },
      contentType: 'arraybuffer',
      redirect: 'follow'
  }).then(function(resp) {
      return resp.json()
  }).then((data) => {
    files2 = data
    console.log(data)
  })
var files = [
  {'id':1,
  'name':'song_name_2',
  property: 'Song Name',
  'files': [
    'testa.mp3',
    'testb.mp3',
  ]
}, 
{'id':2,
'name':'song_name_1',
property: 'Song NameX',
'files': [
    'testc.mp3',
    'testd.mp3',
]}
]
export default {
  components: {
    Dropdown,
    Track,
    Song
  },
  data() {
    return {
      files: [],
      options: files,
      selectedItem: null,
      items: files
    };
  },
  watch: {
    selectedItem(newValue, oldValue) {
      // Perform API calls or actions based on the selected item's property
      this.$store.state.tracks = []
      this.callApi1(newValue);
      // Add more conditions as needed for different property values
    },
  },
  methods: {
    addTracks(files) {
      if (!files.length) {
        return;
      }

      files.forEach(file => {
        const name = file.name.substring(0, file.name.lastIndexOf('.'));
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
      });
      this.files = [];
    },
    callApi1(event) {
        event.files.map( (file) => {
          fetch('https://shahradj.pythonanywhere.com/static/song_name_1/'+file,{
          // fetch('http://localhost:5050/static/'+file,{
              mode: 'cors',
              headers: {
                  'Access-Control-Allow-Origin':'*'
              },
              contentType: 'arraybuffer',
              redirect: 'follow'
          }).then(function(resp) {
              // contentType = resp.headers.get('content-type');
              return resp.blob();
          }).then( blob => {
              var reader = new FileReader();
              // reader.readAsDataURL(blob);
              reader.readAsArrayBuffer(blob);
              reader.addEventListener('load', () => {
              this.$store.dispatch('addTrack', {
                file,
                arrayBuffer: reader.result
              });
            });
          })
        })
    },

  }
};
</script>