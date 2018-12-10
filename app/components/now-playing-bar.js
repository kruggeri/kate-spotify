import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { formattedTime } from '../lib/format-time';

export default Component.extend({
  tagName: 'div',
  shouldPlay: null,
  currentTime: null,

  formattedCurrentTime: computed('currentTime', function () {
    return formattedTime(this.currentTime);
  }),

  actions: {
    togglePlay() {
      if (get(this, 'shouldPlay')) {
        this.set('shouldPlay', false);
      } else {
        this.set('shouldPlay', true);
      }
    }
  }
});
