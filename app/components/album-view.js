import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Component.extend({
  playingTrack: service(),
  currentlyPlayingTrack: reads('playingTrack.currentlyPlayingTrack'),
  isTrackPlaying: reads('playingTrack.isTrackPlaying'),
  isTrackPaused: reads('playingTrack.isTrackPaused'),

  actions: {
    setCurrentlyPlayingTrack(track) {
      this.get('playingTrack').setPlayingTrack(track);
    },

    stopPlayingTrack() {
      this.get('playingTrack').stopPlayingTrack();
    },

    pausePlayingTrack() {
      this.get('playingTrack').pauseTrack();
    },
  },
});
