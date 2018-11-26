import Component from '@ember/component';
import { observer } from '@ember/object';

export default Component.extend({
  tagName: 'audio',
  audioSource: 'http://www.kozco.com/tech/organfinale.mp3',
  attributeBindings: ['controls'],
  songEnded: null,

  songEndedUpdated: observer('songEnded', function() {
    if (this.songEnded) {
      this.set('shouldPlay', false);
    }
  }),

  togglePlay() {
    if (this.get('shouldPlay') === null) {
      return;
    } else if (this.get('shouldPlay')) {
      this.element.play();
    } else if (this.get('shouldPlay') === false) {
      this.element.pause();
    }
  },

  completeSong() {
    if (this.songEnded) {
      this.togglePlay();
    }
  },

  didReceiveAttrs() {
    this.togglePlay();
  },

  didInsertElement() {
    this.element.onended = () => {
      this.set('songEnded', true);
    };
    this.set('songDuration', this.element.duration);
  }
});
