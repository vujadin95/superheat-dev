"use client";
import L, { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const kragujevac = { lat: 44.01, long: 20.91 };
  const srnje = { lat: 43.63, long: 21.28 };
  const cacak = { lat: 43.88, long: 20.34 };

  // [43.88, 20.34];
  // const srnje = [43.63, 21.28];
  return (
    <MapContainer
      className="h-[30rem]"
      center={latLng(kragujevac.lat, kragujevac.long)}
      zoom={7}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={L.icon({
          iconUrl: MarkerIcon.src,
          iconRetinaUrl: MarkerIcon.src,
          iconSize: [20, 35],
          popupAnchor: [0, -25],
          shadowUrl: MarkerShadow.src,
          shadowSize: [25, 25],
        })}
        position={latLng(kragujevac.lat, kragujevac.long)}
      >
        <Popup>Kragujevac</Popup>
      </Marker>
      <Marker
        icon={L.icon({
          iconUrl: MarkerIcon.src,
          iconRetinaUrl: MarkerIcon.src,
          iconSize: [20, 35],
          popupAnchor: [0, -25],
          shadowUrl: MarkerShadow.src,
          shadowSize: [25, 25],
        })}
        position={latLng(srnje.lat, srnje.long)}
      >
        <Popup>Srnje</Popup>
      </Marker>
      <Marker
        icon={L.icon({
          iconUrl: MarkerIcon.src,
          iconRetinaUrl: MarkerIcon.src,
          iconSize: [20, 35],
          popupAnchor: [0, -25],
          shadowUrl: MarkerShadow.src,
          shadowSize: [25, 25],
        })}
        position={latLng(cacak.lat, cacak.long)}
      >
        <Popup>Čačak</Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
