import React from "react";
import styled from "styled-components";

const MapImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
`;

const MapLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StaticMap = () => {
  const mapUrl =
    "https://staticmap.openstreetmap.de/staticmap.php?center=51.8265451,19.4282642&zoom=15&size=600x400&markers=51.8265451,19.4282642,ol-marker";

  return (
    <div>
      <MapImage src={mapUrl} alt="Company Location Map" />
      <MapLink
        href="https://www.openstreetmap.org/?mlat=51.8265451&mlon=19.4282642#map=17/51.82654/19.42826"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Larger Map
      </MapLink>
    </div>
  );
};

export default StaticMap;
