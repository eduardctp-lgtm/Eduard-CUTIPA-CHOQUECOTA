import React from 'react';
import { Heart, Sparkles, Home, Smartphone, Download } from 'lucide-react';

interface HeaderProps {
  onGoHome: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenInstallModal: () => void;
  isHome: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  favoritesCount,
  onOpenFavorites,
  onOpenInstallModal,
  isHome,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-850 px-3 sm:px-4 py-2 flex items-center justify-between">
      {/* Brand with Official Logo */}
      <div 
        onClick={onGoHome}
        className="flex items-center gap-2 cursor-pointer group select-none"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-slate-900 border border-cyan-400/60 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
          <img
            src="/logo.jpg"
            alt="Logo Walk by Juli"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-xs sm:text-sm font-extrabold text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors font-outfit">
            WALK BY JULI
          </h1>
          <p className="text-[9px] sm:text-[10px] text-cyan-400 font-medium tracking-wide">
            Cultura & Turismo • Juli
          </p>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Instalar App / APK Button */}
        <button
          onClick={onOpenInstallModal}
          className="flex items-center gap-1 px-2 py-1.5 rounded-xl bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-500/50 text-cyan-300 hover:text-white hover:border-cyan-400 hover:shadow-cyan-500/20 shadow-sm transition-all text-xs font-semibold"
          title="Instalar aplicación / Descargar APK"
        >
          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-bold">Instalar</span>
          <span className="text-[9px] px-1 py-0.2 rounded bg-cyan-500/30 text-cyan-200 font-mono hidden sm:inline">
            APK
          </span>
        </button>

        {!isHome && (
          <button
            onClick={onGoHome}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            title="Pantalla de bienvenida"
          >
            <Home className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={onOpenFavorites}
          className="relative p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
          title="Ver favoritos guardados"
        >
          <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-rose-400 fill-current' : ''}`} />
          {favoritesCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center shadow-md">
              {favoritesCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

