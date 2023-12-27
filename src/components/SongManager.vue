<template>
  <div>
    <select v-model="selectedItem" style="border-color: rgb(0, 0, 0)">
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


export default {
  components: {
    Dropdown,
    Track,
    Song
  },
  data() {
    return {
      selectedItem: 'Select Song',
      items: []
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
  beforeMount() {
    this.getTracks()
  },
  methods: {
    getTracks(){
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
          var i = 1
          for (const key in data){
            this.items.push({
              id: 1,
              name: key,
              files: data[key]
            })
            i++
          }
        })
    },
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
          fetch('https://shahradj.pythonanywhere.com/static/'+event.name+'/'+file,{
              mode: 'cors',
              headers: {
                  'Access-Control-Allow-Origin':'*'
              },
              contentType: 'arraybuffer',
              redirect: 'follow'
          }).then(function(resp) {
              return resp.blob();
          }).then( blob => {
              var reader = new FileReader();
              reader.readAsArrayBuffer(blob);
              reader.addEventListener('load', () => {
              this.$store.dispatch('addTrack', {
                file,
                arrayBuffer: reader.result
              });
              console.log(this.$store.tracks)
            });
          })
        })
    },

  }
};
</script>