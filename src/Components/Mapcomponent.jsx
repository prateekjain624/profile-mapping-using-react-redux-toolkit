import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const Mapcomponent = ({ location }) => {
  // Fallback values if location is not provided
  const position =
    location?.lat && location?.lng ? [location.lat, location.lng] : [0, 0];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={mapContainerStyle}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {/* Display location's name or some other relevant information */}
          <div>{location?.name || "No name available"}</div>
          <div>{`Lat: ${location?.lat}, Lng: ${location?.lng}`}</div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapcomponent;
