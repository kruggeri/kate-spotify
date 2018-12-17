import Component from '@ember/component';

export default Component.extend({
  tagName: 'audio',
  audioSource: 'http://www.kozco.com/tech/organfinale.mp3',
  attributeBindings: ['controls'],

  togglePlay() {
    if (this.get('shouldPlay') === null) {
      return;
    } else if (this.get('shouldPlay')) {
      this.element.play();
    } else if (this.get('shouldPlay') === false) {
      this.element.pause();
    }
  },

  didReceiveAttrs() {
    this.togglePlay();
  },

  didInsertElement() {
    this.element.onended = () => {
      this.set('shouldPlay', false);
    };

    this.element.ontimeupdate = () => {
      const time = this.element.currentTime;
      this.set('currentTime', time)
    }
  }
});
