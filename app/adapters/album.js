import ApplicationAdapter from './application';
import ENV from 'kate-spotify/config/environment';

export default ApplicationAdapter.extend({
  urlForFindAll() {
    return 'https://api.spotify.com/v1/browse/new-releases';
  },
  headers: {
    Authorization: `Bearer ${ENV.AUTH_KEY}`
  }
});
