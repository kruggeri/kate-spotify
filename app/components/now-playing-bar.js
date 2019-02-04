import Component from '@ember/component';
import { get } from '@ember/object';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'div',
  playingTrack: service(),
  shouldPlay: reads('playingTrack.isTrackPlaying'),
  audioSource: reads('playingTrack.audioSource'),

  currentTime: null,

  actions: {
    togglePlay() {
      if (get(this, 'shouldPlay')) {
        this.get('playingTrack').pauseTrack();
      } else {
        this.get('playingTrack').resumeTrack();
      }
    },
  },
});
