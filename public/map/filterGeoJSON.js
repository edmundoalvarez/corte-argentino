import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function filterGeoJSON() {
  try {
    const data = await fs.readFile(`${__dirname}/custom.geo.json`, 'utf8');
    let geoData = JSON.parse(data);

    // Filtrar solo las características de nivel de país
    const filteredFeatures = geoData.features.filter(feature => {
      return feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon';
    });

    const filteredGeoData = {
      type: 'FeatureCollection',
      features: filteredFeatures
    };

    // Guardar el nuevo archivo GeoJSON filtrado
    await fs.writeFile(`${__dirname}/custom_filtered.geo.json`, JSON.stringify(filteredGeoData), 'utf8');
    console.log('Archivo GeoJSON filtrado guardado como custom_filtered.geo.json');
  } catch (err) {
    console.error('Error:', err);
  }
}

filterGeoJSON();
