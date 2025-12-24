import GoogleMapReact from "google-map-react";

export default function Map() {
  const location = {
    address: "Tbilisi, Georgia",
    lat: 41.687624,
    lng: 44.808777,
  };
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={10}
      ></GoogleMapReact>
    </div>
  );
}
