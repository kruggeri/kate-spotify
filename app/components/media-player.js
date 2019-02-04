import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';
import { observer } from '@ember/object';

export default Component.extend({
  tagName: 'audio',
  attributeBindings: ['controls'],
  audioSource: null,

  audioSourceChanged: observer('audioSource', function() {
    this.element.load();
  }),

  togglePlay() {
    if (this.get('shouldPlay') === null) {
      return;
    } else if (this.get('shouldPlay')) {
      this.element.play();
    } else if (this.get('shouldPlay') === false) {
      if (!this.element) {
        return;
      }
      this.element.pause();
    }
  },

  didReceiveAttrs() {
    scheduleOnce('afterRender', this, 'togglePlay');
  },

  didInsertElement() {
    this.element.onended = () => {
      this.set('shouldPlay', false);
    };

    this.element.ontimeupdate = () => {
      const time = this.element.currentTime;
      this.set('currentTime', time);
    };
  },
});
