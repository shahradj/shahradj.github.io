<template>
  <VCard class="mb-4">
    <VCardText>
      <VRow no-gutters>
        <VCol cols="4" sm="3" class="pr-3">
          <VRow dense justify="space-between">
            {{ number }}<VBtn :outlined="!solo" color="primary" @click="toggleSolo"
              >{{track.name}}</VBtn
            >
          </VRow>
        </VCol>
        
      </VRow>
    </VCardText>
  </VCard>
</template>

<script>

export default {
  props: {
    number: Number,
    track: Object
  },
  mounted() {},
  computed: {
    gain: {
      get() {
        return this.track.gainValue;
      },
      set(value) {
        return this.$store.dispatch('setTrackGainValue', {
          track: this.track,
          value
        });
      }
    },
    solo() {
      return this.$store.state.soloTrack === this.track;
    },
    activeColor() {
      const soloTrack = this.$store.state.soloTrack;
      return soloTrack === this.track || soloTrack === null
        ? 'primary'
        : 'accent';
    }
  },
  watch: {
    'track.ready'() {
      this.track.initWaveform({
        container: this.$refs.waveformContainer,
        height: 150,
        cursorColor: 'rgba(0, 0, 0, 0.4)',
        waveColor: '#999',
        progressColor: 'rgba(0, 0, 0, 0.4)'
      });
    },
    active(active) {
      this.track.setGainValue(active ? this.gain : 0);
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('removeTrack', this.track);
    },
    toggleActive() {
      this.$store.dispatch('setTrackActive', {
        track: this.track,
        value: !this.track.active
      });
    },
    toggleSolo() {
      this.$store.dispatch('setSoloTrack', this.solo ? null : this.track);
    }
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .progress {
    position: absolute;
    left: 47%;
    top: 38%;
  }
}

.container {
  position: relative;
}
</style>
