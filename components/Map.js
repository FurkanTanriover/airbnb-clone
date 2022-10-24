import React, { useState } from "react";
import ReactMapGl, {Marker} from "react-map-gl";
import Image from "next/image";
function Map() {
  const [viewport, setViewport] = useState({
    // width:600,
    // height:600,
    latitude: 40,
    longtitude: -100,
    zoom: 8,
  });
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onMove={evt =>setViewport(evt.viewport)}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
    </ReactMapGl>
  );
}

export default Map;
