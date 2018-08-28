import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('collection', function() {
    this.route('playlists');
    this.route('songs');
    this.route('albums');
    this.route('artists');
    this.route('podcasts');
  });

  this.route('user', { path: '/user/:username' }, function() {
    this.route('playlist', { path: '/playlist/:id' });
  });

  this.route('album', { path: '/album/:id' });
  this.route('artist', { path: '/artist/:id' });
  this.route('podcast', { path: '/podcast/:id' });

  this.route('not-found', { path: '/*path' });

  // I don't think I need a song route
  // this.route('song', { path: '/song/:id' });
});

export default Router;
