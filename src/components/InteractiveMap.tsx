import React, { useState } from 'react';
import { LugarTuristico } from '../types';
import { 
  MapPin, 
  Navigation, 
  ChevronRight, 
  Layers, 
  Compass, 
  Sparkles, 
  Info,
  ExternalLink,
  Map as MapIcon
} from 'lucide-react';

interface InteractiveMapProps {
  lugares: LugarTuristico[];
  onSelectLugar: (id: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ lugares, onSelectLugar }) => {
  const [selectedId, setSelectedId] = useState<string>(lugares[0].id);

  const selectedLugar = lugares.find((l) => l.id === selectedId) || lugares[0];

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selectedLugar.coordenadas.lat},${selectedLugar.coordenadas.lng}`;
  const fullMapsUrl = `https://www.google.com/maps/search/?api=1&query=${selectedLugar.coordenadas.lat},${selectedLugar.coordenadas.lng}`;

  // Embedded map centered around Juli town & bay
  const mapEmbedUrl = `https://maps.google.com/maps?q=${selectedLugar.coordenadas.lat},${selectedLugar.coordenadas.lng}&hl=es&z=15&output=embed`;

  return (
    <div id="pantalla-descubre-juli" className="space-y-4 pb-16">
      {/* Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MapIcon className="w-4 h-4 text-cyan-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              DESCUBRE JULI
            </h2>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Mapa general con los 8 atractivos culturales, templos y paisajes del Titicaca señalizados.
          </p>
        </div>

        <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
          8 Marcadores
        </span>
      </div>

      {/* Horizontal Marker Selector Strip */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x">
        {lugares.map((l) => {
          const isSelected = l.id === selectedId;
          return (
            <button
              key={l.id}
              onClick={() => setSelectedId(l.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all snap-start shrink-0 border ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/25 scale-102'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                isSelected ? 'bg-slate-950 text-cyan-300' : 'bg-slate-800 text-slate-400'
              }`}>
                {l.numero}
              </span>
              <span>{l.nombreCorto}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Map Viewport */}
      <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
        <iframe
          title="Mapa General de Juli"
          src={mapEmbedUrl}
          className="w-full h-full border-0 filter brightness-95 contrast-105"
          loading="lazy"
        />

        {/* Floating Controls Overlay */}
        <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/30 text-xs text-cyan-300 shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold">Marcador activo: {selectedLugar.nombreCorto}</span>
        </div>

        <a
          href={fullMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-colors shadow-lg"
          title="Abrir en Google Maps exterior"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Selected Attraction Card (As strictly detailed in prompt) */}
      <div className="bg-slate-900 border-2 border-cyan-500/40 rounded-2xl p-4 shadow-xl shadow-cyan-950/30 space-y-3 animate-fade-in">
        <div className="flex gap-3.5">
          {/* Fotografía */}
          <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-slate-700 bg-slate-950">
            <img
              src={selectedLugar.imagenPrincipal}
              alt={selectedLugar.nombre}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-1 left-1 w-5 h-5 rounded-md bg-slate-950/90 text-cyan-300 text-[10px] font-bold flex items-center justify-center border border-cyan-500/30">
              #{selectedLugar.numero}
            </span>
          </div>

          {/* Nombre y pequeña descripción */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {selectedLugar.categoria}
              </span>
            </div>
            <h3 className="text-sm font-bold text-white truncate">
              {selectedLugar.nombre}
            </h3>
            <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
              {selectedLugar.descripcion}
            </p>
          </div>
        </div>

        {/* Action Buttons as requested: “VER INFORMACIÓN” y “CÓMO LLEGAR” */}
        <div className="grid grid-cols-2 gap-2.5 pt-1 border-t border-slate-800/80">
          <button
            onClick={() => onSelectLugar(selectedLugar.id)}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide shadow-md transition-all active:scale-98"
          >
            <span>VER INFORMACIÓN</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 hover:text-white border border-slate-700 hover:border-cyan-500/50 font-semibold text-xs tracking-wide shadow-md transition-all active:scale-98"
          >
            <Navigation className="w-3.5 h-3.5 text-cyan-400" />
            <span>CÓMO LLEGAR</span>
          </a>
        </div>
      </div>
    </div>
  );
};
