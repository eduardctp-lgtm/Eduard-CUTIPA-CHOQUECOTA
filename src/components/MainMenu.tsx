import React, { useState } from 'react';
import { LugarTuristico, CategoriaLugar } from '../types';
import { 
  Search, 
  Heart, 
  MapPin, 
  Box, 
  ChevronRight, 
  Landmark, 
  Mountain, 
  Waves, 
  Sparkles,
  Compass,
  Ship,
  Filter,
  X,
  Smartphone,
  Download
} from 'lucide-react';

interface MainMenuProps {
  lugares: LugarTuristico[];
  onSelectLugar: (id: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenInstallModal?: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  lugares,
  onSelectLugar,
  favorites,
  onToggleFavorite,
  onOpenInstallModal,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  // Specific icon mapper for the 8 attractions
  const getLugarIcon = (id: string) => {
    switch (id) {
      case 'iglesia-san-pedro':
        return <Landmark className="w-4 h-4 text-cyan-400" />;
      case 'templo-san-juan-letran':
        return <Landmark className="w-4 h-4 text-amber-400" />;
      case 'templo-museo-asuncion':
        return <Landmark className="w-4 h-4 text-sky-400" />;
      case 'templo-santa-cruz-jerusalen':
        return <Landmark className="w-4 h-4 text-rose-400" />;
      case 'cerro-san-bartolome':
        return <Mountain className="w-4 h-4 text-emerald-400" />;
      case 'lago-titicaca-juli':
        return <Waves className="w-4 h-4 text-blue-400" />;
      case 'chullpas-huaquina':
        return <Compass className="w-4 h-4 text-amber-300" />;
      case 'muelle-fiscal-juli':
        return <Ship className="w-4 h-4 text-teal-400" />;
      default:
        return <MapPin className="w-4 h-4 text-cyan-400" />;
    }
  };

  // Filter places
  const filteredLugares = lugares.filter((lugar) => {
    const matchesSearch = 
      lugar.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lugar.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lugar.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = 
      selectedCategory === 'todos' ? true :
      selectedCategory === 'templos' ? lugar.categoria === 'templo' :
      selectedCategory === 'naturaleza' ? (lugar.categoria === 'naturaleza' || lugar.categoria === 'mirador') :
      selectedCategory === 'arqueologia' ? lugar.categoria === 'arqueologia' :
      selectedCategory === 'favoritos' ? favorites.includes(lugar.id) : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4 pb-12">
      {/* Banner Instalar App / APK en Teléfono */}
      {onOpenInstallModal && (
        <div 
          onClick={onOpenInstallModal}
          className="cursor-pointer bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/40 hover:border-cyan-400 rounded-2xl p-3 shadow-lg flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span>Instalar WALK BY JULI en tu teléfono</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-cyan-500/30 text-cyan-200 font-mono">APK</span>
              </p>
              <p className="text-[11px] text-slate-400">
                Acceso directo sin navegador, soporte sin conexión y carga instantánea.
              </p>
            </div>
          </div>
          <div className="shrink-0 p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
            <Download className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* Search & Filter Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              EXPLORAR ATRACTIVOS DE JULI
            </h2>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Selecciona cualquiera de los 8 destinos principales para acceder a su información completa, recorrido 3D, mapas y videos.
          </p>
        </div>

        {/* Search input field */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por templo, historia, mirador, lago..."
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-9 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
          {[
            { id: 'todos', label: 'Todos (8)' },
            { id: 'templos', label: 'Templos (4)' },
            { id: 'naturaleza', label: 'Mirador & Lago (2)' },
            { id: 'arqueologia', label: 'Arqueología & Puerto (2)' },
            { id: 'favoritos', label: `Favoritos (${favorites.length})` },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setSelectedCategory(chip.id)}
              className={`px-3 py-1 rounded-lg shrink-0 font-medium transition-all ${
                selectedCategory === chip.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:text-white hover:bg-slate-750'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* 8 MAIN ATTRACTION BUTTONS / CARDS GRID as strictly requested */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredLugares.map((lugar) => {
          const isFav = favorites.includes(lugar.id);

          return (
            <div
              key={lugar.id}
              onClick={() => onSelectLugar(lugar.id)}
              className="group relative bg-slate-900 border border-slate-800/90 hover:border-cyan-400/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-cyan-950/40 transition-all duration-300 cursor-pointer active:scale-[0.98] flex flex-col"
            >
              {/* Card Image Header with Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={lugar.imagenPrincipal}
                  alt={lugar.nombre}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/40" />

                {/* Number & Icon Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/40 flex items-center justify-center text-xs font-bold font-mono">
                    {lugar.numero}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700 flex items-center justify-center shadow-md">
                    {getLugarIcon(lugar.id)}
                  </div>
                </div>

                {/* Favorite button toggle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(lugar.id);
                  }}
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md border flex items-center justify-center transition-all ${
                    isFav
                      ? 'bg-rose-500/30 border-rose-500 text-rose-400 shadow-md'
                      : 'bg-slate-950/70 border-slate-700 text-slate-300 hover:text-rose-400'
                  }`}
                  title={isFav ? "Quitar de favoritos" : "Añadir a favoritos"}
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                </button>

                {/* 3D and Media Badges */}
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300">
                    <Box className="w-3 h-3" />
                    <span>3D Disponible</span>
                  </span>
                  <span className="text-[10px] text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-800">
                    {lugar.galeria.length} fotos
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">
                    {lugar.nombre}
                  </h3>
                  <p className="text-xs text-cyan-200/80 font-medium line-clamp-1 mt-0.5">
                    {lugar.subtitulo}
                  </p>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                    {lugar.descripcion}
                  </p>
                </div>

                {/* Action Footer on Card */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>Juli, Puno</span>
                  </span>

                  <div className="flex items-center gap-1 text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform text-[11px]">
                    <span>Ver información</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredLugares.length === 0 && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-2">
          <p className="text-sm font-semibold text-slate-200">No se encontraron atractivos coincidentes</p>
          <p className="text-xs text-slate-400">Prueba con otra palabra clave o limpia el filtro de búsqueda.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('todos');
            }}
            className="mt-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30"
          >
            Mostrar todos los 8 lugares
          </button>
        </div>
      )}
    </div>
  );
};
