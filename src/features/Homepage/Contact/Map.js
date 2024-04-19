import React, { useEffect, useRef } from "react";

export const Map = ({ placeId, lat, lng }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps JavaScript API library is not loaded.");
      return;
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 15,
    });

    if (placeId) {
      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails({ placeId }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
          });

          map.setCenter(place.geometry.location);
        }
      });
    }
  }, [placeId, lat, lng]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};
