import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  currentlyPlayingTrack: null,
  isTrackPlaying: false,
  isTrackPaused: false,
  // audioSource: `https://p.scdn.co/mp3-preview/697c874cdd9cfd73e1265673f389c86ecec31165?cid=774b29d4f13844c495f206cafdad9c86`,
  audioSource: computed('currentlyPlayingTrack', function() {
    if (this.currentlyPlayingTrack) {
      return this.currentlyPlayingTrack.preview_url;
    }
  }),

  init() {
    this._super(arguments);
  },

  setPlayingTrack(track) {
    this.set('currentlyPlayingTrack', track);
    this.set('isTrackPlaying', true);
  },

  stopPlayingTrack() {
    this.set('currentlyPlayingTrack', null);
    this.set('isTrackPlaying', false);
    this.set('isTrackPaused', false);
  },

  pauseTrack() {
    this.set('isTrackPaused', true);
  },

  resumeTrack() {
    this.set('isTrackPaused', false);
    this.set('isTrackPlaying', true);
  },
});
