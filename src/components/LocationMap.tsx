import React, { useState } from 'react';
import { Coordenadas } from '../types';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Compass,
  Map as MapIcon
} from 'lucide-react';

interface LocationMapProps {
  coordenadas: Coordenadas;
  lugarNombre: string;
  direccionTexto: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({ 
  coordenadas, 
  lugarNombre, 
  direccionTexto 
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const hasCoords = coordenadas && coordenadas.lat !== 0 && coordenadas.lng !== 0;

  const googleMapsUrl = hasCoords 
    ? `https://www.google.com/maps/search/?api=1&query=${coordenadas.lat},${coordenadas.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lugarNombre + ' Juli Puno')}`;

  const directionsUrl = hasCoords
    ? `https://www.google.com/maps/dir/?api=1&destination=${coordenadas.lat},${coordenadas.lng}`
    : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(lugarNombre + ' Juli Puno')}`;

  const embedMapUrl = hasCoords
    ? `https://maps.google.com/maps?q=${coordenadas.lat},${coordenadas.lng}&hl=es&z=16&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(lugarNombre + ' Juli Puno')}&hl=es&z=16&output=embed`;

  const copyCoordinates = () => {
    if (!hasCoords) return;
    const text = `${coordenadas.lat}, ${coordenadas.lng}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="seccion-ubicacion-mapa" className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl space-y-3 p-4">
      {/* Map Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">UBICACIÓN</h3>
            <p className="text-xs text-slate-300 font-medium">{lugarNombre}</p>
          </div>
        </div>

        {hasCoords && (
          <button
            onClick={copyCoordinates}
            className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700 transition-colors"
            title="Copiar coordenadas geográficas"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiadas' : 'Coordenadas'}</span>
          </button>
        )}
      </div>

      {/* Address description */}
      <p className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-2">
        <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <span>{direccionTexto}</span>
      </p>

      {/* Interactive Google Maps Embed */}
      <div className="relative w-full h-[240px] rounded-xl overflow-hidden border border-slate-700/80 shadow-inner bg-slate-950">
        <iframe
          title={`Mapa de ${lugarNombre}`}
          src={embedMapUrl}
          className="w-full h-full border-0 filter brightness-95 contrast-105"
          loading="lazy"
          allowFullScreen
        />

        {/* Coords Floating Badge */}
        {hasCoords ? (
          <div className="absolute bottom-2 left-2 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-500/40 text-[10px] text-cyan-300 font-mono shadow-lg flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Lat: {coordenadas.lat.toFixed(5)}, Lng: {coordenadas.lng.toFixed(5)}</span>
          </div>
        ) : (
          <div className="absolute bottom-2 left-2 bg-amber-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/40 text-[10px] text-amber-300">
            Coordenadas: Información pendiente de actualización.
          </div>
        )}
      </div>

      {/* Action Buttons as requested */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold shadow-md transition-all active:scale-98"
        >
          <ExternalLink className="w-4 h-4 text-cyan-400" />
          <span>VER EN GOOGLE MAPS</span>
        </a>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-900/30 transition-all active:scale-98"
        >
          <Navigation className="w-4 h-4" />
          <span>CÓMO LLEGAR</span>
        </a>
      </div>
    </div>
  );
};
