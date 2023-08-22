<template>
  <div>
    <Dropdown
      :options="options"
      v-on:selected="validateSelection"
      :disabled="false"
      name="zipcode"
      :maxItem="10"
      placeholder="Please select a song"
    >
    </Dropdown>
    <VFileInput
      label="Tracks"
      @change="addTracks"
      :value="files"
      multiple
      placeholder="Add audio files"
      accept="audio/*"
    />
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
import Dropdown from 'vue-simple-search-dropdown';

const fs = require('fs');
var newfiles = [];
var files = ['this song', 'thath song', 'test song'];
const http = require('http');

fs.readdir('./data/', (err, files) => {
  var i = 1;
  files.forEach(file => {
    newfiles.push({
      id: i,
      name: file
    });
    i++;
  });
});
var newfiles2 = [
  {
    id: 1,
    name: 'test1'
  },
  {
    id: 2,
    name: 'that song'
  },
  {
    id: 3,
    name: 'test song'
  }
];
export default {
  components: {
    Dropdown,
    Track
  },
  data() {
    return {
      files: [],
      options: newfiles
    };
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
        fileReader.addEventListener('load', () => {
          this.$store.dispatch('addTrack', {
            name,
            arrayBuffer: fileReader.result
          });
        });
      });
      this.files = [];
    },
    validateSelection(event) {
      if (event) {
        console.log(event.target);
      }
    }
  }
};
</script>
