import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { mapPins } from '../data/itineraryData';

// Fix default marker icon paths for Leaflet + bundler
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView([40.75, -73.98], 12);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    mapPins.forEach(pin => {
      L.marker(pin.coords).addTo(map).bindPopup(`<b>${pin.name}</b>`);
    });

    // Ensure tiles render correctly after container is visible
    setTimeout(() => map.invalidateSize(), 100);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        地点索引
      </h2>
      <div id="map" ref={mapRef}></div>
      <p className="text-xs text-slate-500 mt-2">
        提示：点击地图图标查看详细地址及备注
      </p>
    </div>
  );
}
