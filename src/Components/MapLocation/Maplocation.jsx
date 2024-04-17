import { Map, map } from 'leaflet';
import { useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';


const Maplocation = () => {
    const [center, setCenter] = useState({ lat: 23.6850, lng: 90.3563 })
    const ZOOM_LEVEL = 9
    const mapRef = useRef()

    const mapProvider = {
        maptiler: {
            url: 'https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Rbr5XAr0xCu0cRuUEBIV',
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
    }

    return (
        <div className='h-[600px] w-1/2' >
            <MapContainer
                center={center}
                ref={mapRef}
                zoom={ZOOM_LEVEL}
            >
                <TileLayer
                    url={mapProvider.maptiler.url}
                    attribution={mapProvider.maptiler.attribution}
                ></TileLayer>

            </MapContainer>
        </div>
    );
};

export default Maplocation;