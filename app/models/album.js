import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  name: DS.attr(),
  artists: DS.attr(),
  images: DS.attr(),
  tracks: DS.attr()
});
