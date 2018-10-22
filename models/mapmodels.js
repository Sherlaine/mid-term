module.exports = function mapModelsFunction(db) {
    return {
      getMapsWithMarkers() {
        // get all maps in the db
        // for all the maps in found; get corresponding markers
        // add markers on each map
        // return maps with markers
        return db.select().table('maps')
          .then(maps =>
            Promise.all(maps.map(currentMap =>
              db.select().table('markers')
                .where({ map_id: currentMap.id })
                .then(markers => {
                  currentMap.markers = markers;
                  return currentMap;
                })
              ))
          )
      }
    }
  }