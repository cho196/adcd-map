import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import style from "../../styles/Home.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";

export default function Map() {
  const positions = {
    waterfront: [49.28594, -123.11129],
    burrard: [49.2856, -123.1202],
    granville: [49.2833, -123.1161],
    stadium: [49.2796, -123.1098],
    mainStreet: [49.2732, -123.1003],
    commercial: [49.2626, -123.0692],
    nanaimo: [49.2483, -123.0559],
    twentyNinth: [49.244084, -123.045931],
    joyce: [49.2384, -123.0318],
    patterson: [49.2298, -123.0127],
    metrotown: [49.2258, -123.0039],
    royalOak: [49.2201, -122.9885],
    edmonds: [49.2123, -122.9592],
    twentySecondStreet: [49.2, -122.949],
    newWest: [49.2015, -122.9126],
    columbia: [49.2048, -122.9061],
    scottRoad: [49.2044, -122.8743],
    gateway: [49.199, -122.8507],
    surreyCentral: [49.1896, -122.848],
    kingGeorge: [49.1828, -122.8448],
  };
  const polyline = [
    [49.28594, -123.11129],
    [49.2856, -123.1202],
    [49.2833, -123.1161],
    [49.2796, -123.1098],
    [49.2732, -123.1003],
    [49.2626, -123.0692],
    [49.2483, -123.0559],
    [49.244084, -123.045931],
    [49.2384, -123.0318],
    [49.2298, -123.0127],
    [49.2258, -123.0039],
    [49.2201, -122.9885],
    [49.2123, -122.9592],
    [49.2, -122.949],
    [49.2015, -122.9126],
    [49.2048, -122.9061],
    [49.2044, -122.8743],
    [49.199, -122.8507],
    [49.1896, -122.848],
    [49.1828, -122.8448],
  ];
  const purpleOption = { color: "purple" };
  const redOption = { color: "red" };
  return (
    <MapContainer
      className={style.map}
      center={positions.waterfront}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={positions.waterfront}>
        <Popup>
          Skytrain. <br /> Waterfront.
        </Popup>
      </Marker>
      <Marker position={positions.burrard}>
        <Popup>
          Skytrain. <br /> Burrard.
        </Popup>
      </Marker>
      <Marker position={positions.granville}>
        <Popup>
          Skytrain. <br /> Granville.
        </Popup>
      </Marker>
      <Marker position={positions.stadium}>
        <Popup>
          Skytrain. <br /> Stadium-Chinatown.
        </Popup>
      </Marker>
      <Marker position={positions.mainStreet}>
        <Popup>
          Skytrain. <br /> Main Street - Science World.
        </Popup>
      </Marker>
      <Marker position={positions.commercial}>
        <Popup>
          Skytrain. <br /> Commercial-Broadway.
        </Popup>
      </Marker>
      <Marker position={positions.nanaimo}>
        <Popup>
          Skytrain. <br /> Nanaimo.
        </Popup>
      </Marker>
      <Marker position={positions.twentyNinth}>
        <Popup>
          Skytrain. <br /> 29th Avenue.
        </Popup>
      </Marker>
      <Marker position={positions.joyce}>
        <Popup>
          Skytrain. <br /> Joyce-Collingwood.
        </Popup>
      </Marker>
      <Marker position={positions.patterson}>
        <Popup>
          Skytrain. <br /> Patterson.
        </Popup>
      </Marker>
      <Marker position={positions.metrotown}>
        <Popup>
          Skytrain. <br /> Metrotown.
        </Popup>
      </Marker>
      <Marker position={positions.royalOak}>
        <Popup>
          Skytrain. <br /> Royal Oak.
        </Popup>
      </Marker>
      <Marker position={positions.edmonds}>
        <Popup>
          Skytrain. <br /> Edmonds.
        </Popup>
      </Marker>
      <Marker position={positions.twentySecondStreet}>
        <Popup>
          Skytrain. <br /> 22nd Street.
        </Popup>
      </Marker>
      <Marker position={positions.newWest}>
        <Popup>
          Skytrain. <br /> New Westminister.
        </Popup>
      </Marker>
      <Marker position={positions.columbia}>
        <Popup>
          Skytrain. <br /> Columbia.
        </Popup>
      </Marker>
      <Marker position={positions.scottRoad}>
        <Popup>
          Skytrain. <br /> Scott Road.
        </Popup>
      </Marker>
      <Marker position={positions.gateway}>
        <Popup>
          Skytrain. <br /> Gateway.
        </Popup>
      </Marker>
      <Marker position={positions.surreyCentral}>
        <Popup>
          Skytrain. <br /> Surrey Central.
        </Popup>
      </Marker>
      <Marker position={positions.kingGeorge}>
        <Popup>
          Skytrain. <br /> King George.
        </Popup>
      </Marker>
      {/* <CircleMarker
        center={[49.2746, -123.1219]}
        pathOptions={redOption}
        radius={20}
      >
        <Popup>You have reached your destination.</Popup>
      </CircleMarker> */}
      <Polyline pathOptions={purpleOption} positions={polyline}></Polyline>
    </MapContainer>
  );
}
