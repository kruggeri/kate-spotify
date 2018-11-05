import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    const { albums } = payload;
    let serializedData = { albums: albums.items };
    const returnedPayload = this._super(
      store,
      primaryModelClass,
      serializedData,
      id,
      requestType
    );
    return returnedPayload;
  },

  normalizeFindRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  ) {
    const fetchedAlbum = [];
    fetchedAlbum.pushObject(payload);
    const serializedData = { albums: fetchedAlbum };
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
