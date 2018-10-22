module.exports = function markerModelFunction(db) {
  return {
    createMarker: function (markerData) {
      return db('markers').insert(markerData);
    },
    getMarkers: function (mapId) {
      return db('markers').select().where({map_id: mapId});
    }
  }

}
