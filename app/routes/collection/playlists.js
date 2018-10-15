import Route from '@ember/routing/route';

export default Route.extend({
  // get all the playlists
  model() {
    return this.store.findAll('playlist');
  }
});
