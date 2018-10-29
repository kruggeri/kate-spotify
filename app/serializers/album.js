import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse() {
    const data = this._super();
  }
});
