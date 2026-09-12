import React from 'react';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  ChevronRight, 
  Landmark, 
  Waves, 
  Mountain,
  Footprints,
  Smartphone,
  Download
} from 'lucide-react';

interface WelcomeScreenProps {
  onStartExploration: () => void;
  onOpenInstallModal?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ 
  onStartExploration,
  onOpenInstallModal,
}) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-slate-100 select-none">
      {/* Scenic Background Hero Image with Dark Gradient Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_juli.jpg"
          alt="Paisaje de Juli y Lago Titicaca"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/95" />
        
        {/* Subtle Andean glowing orbs inspired by the logo */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-600/25 blur-3xl pointer-events-none" />
      </div>

      {/* Top Android Status Bar Bar Mockup */}
      <div className="relative z-10 pt-3 px-6 flex items-center justify-between text-[11px] text-slate-300 font-medium tracking-wide">
        <span className="font-semibold text-slate-200">Juli, Puno</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            3,884 m.s.n.m.
          </span>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-6">
        {/* Official Logo Container with Glowing Neon Frame */}
        <div className="relative mb-5 group">
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-80 blur-md group-hover:opacity-100 transition-opacity animate-pulse" />
          
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-400/80 shadow-2xl shadow-cyan-900/60 flex items-center justify-center">
            <img
              src="/logo.jpg"
              alt="Logotipo oficial WALK BY JULI"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* App Title */}
        <div className="space-y-1 max-w-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Guía Turística Digital Oficial</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg font-outfit">
            WALK BY JULI
          </h1>

          <p className="text-sm font-semibold text-cyan-300 drop-shadow">
            Aplicación móvil de cultura y turismo de Juli
          </p>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pt-1.5 max-w-xs sm:max-w-sm mx-auto">
            “Descubre la cultura, historia y belleza de Juli”
          </p>
        </div>

        {/* Cultural Pills Preview */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-sm">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80 text-[11px] text-slate-200">
            <Landmark className="w-3 h-3 text-amber-400" />
            <span>4 Templos Mayores</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80 text-[11px] text-slate-200">
            <Waves className="w-3 h-3 text-cyan-400" />
            <span>Lago Titicaca</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80 text-[11px] text-slate-200">
            <Mountain className="w-3 h-3 text-emerald-400" />
            <span>Apu San Bartolomé</span>
          </span>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="relative z-10 px-6 pb-8 pt-2 max-w-md w-full mx-auto space-y-3">
        {/* Prominent EXPLORAR JULI Button */}
        <button
          onClick={onStartExploration}
          className="w-full relative group overflow-hidden py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-slate-950 font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-3 transition-all transform active:scale-95 hover:shadow-cyan-400/50"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <Footprints className="w-5 h-5" />
          <span>EXPLORAR JULI</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Instalar App / APK en Teléfono */}
        {onOpenInstallModal && (
          <button
            onClick={onOpenInstallModal}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-slate-950/80 transition-all hover:bg-slate-850 active:scale-98"
          >
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>Instalar App / APK en Teléfono</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              Android / iOS
            </span>
          </button>
        )}

        {/* Heritage Subtitle */}
        <div className="text-center">
          <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <MapPin className="w-3 h-3 text-cyan-400" />
            <span>Conocida como «La Pequeña Roma de América»</span>
          </p>
          <p className="text-[10px] text-slate-500 mt-0.5">
            Chucuito • Puno • Perú
          </p>
        </div>
      </div>
    </div>
  );
};
