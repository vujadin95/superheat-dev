"use client";
import L, { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
// import MarkerIcon from "../..icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const kragujevac = { lat: 44.01, long: 20.91 };
  const srnje = { lat: 43.63, long: 21.28 };
  const cacak = { lat: 43.88, long: 20.34 };
  const iconWidth = 25;
  return (
    <MapContainer
      className="w-full h-full rounded-lg"
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
          iconUrl: "/black-bear.png",
          iconRetinaUrl: "/black-bear.png",
          iconSize: [iconWidth, iconWidth],
          popupAnchor: [0, -30],
          shadowUrl: "/black-bear.png",
          shadowSize: [30, 35],
        })}
        position={latLng(kragujevac.lat, kragujevac.long)}
      >
        <Popup>Kragujevac</Popup>
      </Marker>
      <Marker
        icon={L.icon({
          iconUrl: "/black-bear.png",

          iconRetinaUrl: "/black-bear.png",
          iconSize: [iconWidth, iconWidth],
          popupAnchor: [0, -30],
          shadowUrl: MarkerShadow.src,
          shadowSize: [30, 35],
        })}
        position={latLng(srnje.lat, srnje.long)}
      >
        <Popup>Srnje</Popup>
      </Marker>
      <Marker
        icon={L.icon({
          iconUrl: "/black-bear.png",
          iconRetinaUrl: "/black-bear.png",
          iconSize: [iconWidth, iconWidth],
          popupAnchor: [0, -30],
          shadowUrl: MarkerShadow.src,
          shadowSize: [30, 35],
        })}
        position={latLng(cacak.lat, cacak.long)}
      >
        <Popup>Čačak</Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
