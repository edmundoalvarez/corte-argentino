import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map2 = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/map/custom_filtered.geo.json')
      .then(response => response.json())
      .then(data => {
        // Filtra las características para incluir solo países sin divisiones internas
        const filteredData = {
          ...data,
          features: data.features.filter(feature => feature.properties.featurecla === "Admin-0 country")
        };
        setGeoData(filteredData);
      });
  }, []);

  const defaultStyle = {
    fillColor: 'white',
    weight: 1,
    color: 'black',
    fillOpacity: 1
  };

  const highlightStyle = {
    fillColor: 'blue',
    weight: 2,
    color: 'black',
    fillOpacity: 0.7
  };

  const onEachFeature = (feature, layer) => {
    const countryUrls = {
      'Panama': 'https://example.com/panama',
      'El Salvador': 'https://example.com/elsalvador',
      'United States of America': 'https://example.com/usa'
    };

    if (['Panama', 'El Salvador', 'United States of America'].includes(feature.properties.name)) {
      layer.setStyle(highlightStyle);
      layer.on({
        click: () => {
          window.open(countryUrls[feature.properties.name], '_blank');
        }
      });
    } else {
      layer.setStyle(defaultStyle);
    }
  };

  return (
    <MapContainer 
      center={[30.0, -95.0]} 
      zoom={4.4} 
      style={{ height: '800px', width: '700px' }}
      scrollWheelZoom={false} 
      doubleClickZoom={false} 
      dragging={false} 
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoData && <GeoJSON data={geoData} onEachFeature={onEachFeature} />}
    </MapContainer>
  );
};

export default Map2;
