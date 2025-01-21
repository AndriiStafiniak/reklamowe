import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px 0;
`;

const Map = () => {
  return (
    <MapContainer>
      <iframe
        title="Company Location"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=19.424157,51.825548,19.432397,51.827548&layer=mapnik&marker=51.8265451,19.4282642"
      ></iframe>
      <br />
      <small>
        <a
          href="https://www.openstreetmap.org/?mlat=51.8265451&mlon=19.4282642#map=17/51.82654/19.42826"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Larger Map
        </a>
      </small>
    </MapContainer>
  );
};

export default Map;
