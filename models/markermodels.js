module.exports = function markerModelFunction(db) {
  return {
    createMarker: function (markerData) {
      return db('markers').insert(markerData);
    },
    getMarkers: function () {
      return db('markers').select();
    }
  }

}