import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    const { albums } = payload;
    let serializedData = { albums: albums.items };
    console.log(serializedData);
    const returnedPayload = this._super(
      store,
      primaryModelClass,
      serializedData,
      id,
      requestType
    );
    return returnedPayload;
  }
});
