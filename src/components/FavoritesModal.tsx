import React from 'react';
import { LugarTuristico } from '../types';
import { Heart, X, ChevronRight, History, Trash2, MapPin } from 'lucide-react';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  history: string[];
  allLugares: LugarTuristico[];
  onSelectLugar: (id: string) => void;
  onClearHistory: () => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  history,
  allLugares,
  onSelectLugar,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  const favoriteLugares = allLugares.filter((l) => favorites.includes(l.id));
  const visitedLugares = history
    .map((id) => allLugares.find((l) => l.id === id))
    .filter((l): l is LugarTuristico => Boolean(l));

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400 fill-current" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Favoritos e Historial
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-6">
          {/* Favoritos Section */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" />
              <span>Lugares Favoritos ({favoriteLugares.length})</span>
            </h4>

            {favoriteLugares.length === 0 ? (
              <p className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                Aún no has agregado lugares a tus favoritos. Presiona el corazón en cualquier atractivo para guardarlo aquí.
              </p>
            ) : (
              <div className="space-y-2">
                {favoriteLugares.map((lugar) => (
                  <div
                    key={lugar.id}
                    onClick={() => {
                      onSelectLugar(lugar.id);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={lugar.imagenPrincipal}
                        alt={lugar.nombre}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-xs font-bold text-white line-clamp-1">{lugar.nombre}</p>
                        <p className="text-[11px] text-cyan-300 capitalize">{lugar.categoria}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Historial de lugares visitados Section */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <History className="w-3.5 h-3.5" />
                <span>Historial de Visitas ({visitedLugares.length})</span>
              </h4>

              {visitedLugares.length > 0 && (
                <button
                  onClick={onClearHistory}
                  className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Limpiar</span>
                </button>
              )}
            </div>

            {visitedLugares.length === 0 ? (
              <p className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                Aquí aparecerán los lugares que vayas explorando en Juli.
              </p>
            ) : (
              <div className="space-y-2">
                {visitedLugares.map((lugar) => (
                  <div
                    key={lugar.id}
                    onClick={() => {
                      onSelectLugar(lugar.id);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 hover:bg-slate-850 border border-slate-800/80 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-slate-200 font-medium">{lugar.nombreCorto}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Ver ficha</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
