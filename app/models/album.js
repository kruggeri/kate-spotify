import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  name: DS.attr('string'),
  artists: DS.attr(),
  images: DS.attr(),
  albumType: DS.attr('string'),
  releaseDate: DS.attr('string'),
  totalTracks: DS.attr('number')
});
