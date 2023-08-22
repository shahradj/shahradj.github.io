<template>
  <VContainer>
    <SettingsDialog />
    <AboutDialog />
    <SongManager />
  </VContainer>
</template>

<script>
import SongManager from '@/components/SongManager';
import SettingsDialog from '@/components/SettingsDialog';
import AboutDialog from '@/components/AboutDialog';

export default {
  components: {
    SongManager,
    SettingsDialog,
    AboutDialog
  },
  name: 'home',
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>
