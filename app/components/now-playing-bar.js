import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  tagName: 'div',
  shouldPlay: null,
  currentTime: null,

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
