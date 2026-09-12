import React, { useState, useEffect } from 'react';
import { LugarTuristico } from '../types';
import { Viewer3D } from './Viewer3D';
import { VideoPlayer } from './VideoPlayer';
import { ImageGallery } from './ImageGallery';
import { LocationMap } from './LocationMap';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  Landmark, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Calendar, 
  Info, 
  Check, 
  Copy,
  Clock,
  Layers,
  Award,
  Film,
  AlertTriangle,
  Leaf,
  Users
} from 'lucide-react';

interface LugarDetailProps {
  lugar: LugarTuristico;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectLugar: (id: string) => void;
}

export const LugarDetail: React.FC<LugarDetailProps> = ({
  lugar,
  onBack,
  isFavorite,
  onToggleFavorite,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [shareSuccess, setShareSuccess] = useState<boolean>(false);

  // Scroll to top upon mounting
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, [lugar.id]);

  // Audio Guide via Web Speech API
  const toggleAudioGuide = () => {
    if (!('speechSynthesis' in window)) {
      alert('La síntesis de voz no está disponible en este dispositivo.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = lugar.audioGuiaTexto || `${lugar.nombre}. ${lugar.descripcion} ${lugar.historia}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'es-PE';
      utterance.rate = 0.95;

      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${lugar.nombre} | WALK BY JULI`,
      text: `Descubre ${lugar.nombre} en Juli, Puno - La Pequeña Roma de América con la app WALK BY JULI.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share canceled', err);
      }
    } else {
      navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 3000);
    }
  };

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 pb-24">
      {/* 2. IMAGEN PRINCIPAL (Hero Section with floating controls) */}
      <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-slate-900">
        <img
          src={lugar.imagenPrincipal}
          alt={lugar.nombre}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-90"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/60" />

        {/* Top App Bar Navigation */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/80 text-white hover:text-cyan-300 hover:border-cyan-400 flex items-center justify-center shadow-lg transition-all active:scale-90"
            title="Volver al menú"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {/* Audio Guide button */}
            <button
              onClick={toggleAudioGuide}
              className={`px-3 py-2 rounded-full backdrop-blur-md border flex items-center gap-1.5 text-xs font-semibold shadow-lg transition-all active:scale-95 ${
                isPlayingAudio
                  ? 'bg-cyan-500 border-cyan-400 text-slate-950 animate-pulse'
                  : 'bg-slate-950/75 border-slate-700/80 text-slate-200 hover:text-cyan-300'
              }`}
              title={isPlayingAudio ? "Detener Audio-guía" : "Escuchar narración histórica"}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              <span>{isPlayingAudio ? 'Detener' : 'Audio-guía'}</span>
            </button>

            {/* Favorite button */}
            <button
              onClick={() => onToggleFavorite(lugar.id)}
              className={`w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center shadow-lg transition-all active:scale-90 ${
                isFavorite
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                  : 'bg-slate-950/75 border-slate-700/80 text-white hover:text-rose-400'
              }`}
              title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/80 text-white hover:text-cyan-300 hover:border-cyan-400 flex items-center justify-center shadow-lg transition-all active:scale-90"
              title="Compartir este lugar"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 1. NOMBRE DEL LUGAR (In Hero Header) */}
        <div className="absolute bottom-4 inset-x-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 shadow-md">
              Atractivo #{lugar.numero}
            </span>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700 text-cyan-300 capitalize">
              {lugar.categoria}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
            {lugar.nombre}
          </h1>
          <p className="text-xs sm:text-sm text-cyan-200/90 font-medium drop-shadow mt-0.5">
            {lugar.subtitulo}
          </p>
        </div>
      </div>

      {/* Share Toast Feedback */}
      {shareSuccess && (
        <div className="fixed top-6 inset-x-4 z-50 max-w-sm mx-auto bg-emerald-950 border border-emerald-500 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs animate-fade-in">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>¡Enlace de {lugar.nombreCorto} copiado al portapapeles con éxito!</span>
        </div>
      )}

      {/* Main Content Sections Container */}
      <main className="max-w-3xl mx-auto px-4 pt-5 space-y-6">

        {/* 7. DESCRIPCIÓN TURÍSTICA */}
        <section id="seccion-descripcion" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-2">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <h2 className="text-xs font-bold uppercase tracking-wider">DESCRIPCIÓN DEL LUGAR</h2>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-normal">
            {lugar.descripcion}
          </p>
        </section>

        {/* 3. GALERÍA DE IMÁGENES */}
        <section id="seccion-galeria" className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <Layers className="w-4 h-4" />
              <h2 className="text-xs font-bold uppercase tracking-wider">GALERÍA DE FOTOGRAFÍAS</h2>
            </div>
            <span className="text-[11px] text-slate-400">Desliza o toca para ampliar</span>
          </div>
          <ImageGallery imagenes={lugar.galeria} lugarNombre={lugar.nombreCorto} />
        </section>

        {/* 4. MODELO O VISUALIZACIÓN 3D */}
        <section id="seccion-3d" className="space-y-2">
          <Viewer3D config={lugar.modelo3D} lugarNombre={lugar.nombreCorto} />
        </section>

        {/* 5. INFORMACIÓN HISTÓRICA */}
        <section id="seccion-historia" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-2.5">
          <div className="flex items-center gap-2 text-amber-400">
            <Clock className="w-4 h-4" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">HISTORIA</h2>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-normal">
            {lugar.historia}
          </p>
        </section>

        {/* 6. INFORMACIÓN CULTURAL */}
        <section id="seccion-cultura" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-2.5">
          <div className="flex items-center gap-2 text-emerald-400">
            <Landmark className="w-4 h-4" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">IMPORTANCIA CULTURAL</h2>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-normal">
            {lugar.importanciaCultural}
          </p>
        </section>

        {/* 8. DATOS IMPORTANTES */}
        <section id="seccion-datos-importantes" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-3">
            <Info className="w-4 h-4" />
            <h2 className="text-xs font-bold uppercase tracking-wider">DATOS IMPORTANTES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <span className="text-slate-400 block text-[11px] mb-0.5">Ubicación exacta</span>
              <span className="font-semibold text-slate-200">{lugar.datosImportantes.ubicacion}</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <span className="text-slate-400 block text-[11px] mb-0.5">Distrito / Provincia / Región</span>
              <span className="font-semibold text-slate-200">
                {lugar.datosImportantes.distrito}, {lugar.datosImportantes.provincia}, {lugar.datosImportantes.region}
              </span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <span className="text-slate-400 block text-[11px] mb-0.5">Tipo de atractivo turístico</span>
              <span className="font-semibold text-cyan-300">{lugar.datosImportantes.tipoAtractivo}</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <span className="text-slate-400 block text-[11px] mb-0.5">Altitud sobre el nivel del mar</span>
              <span className="font-semibold text-slate-200">{lugar.datosImportantes.altitud}</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <span className="text-slate-400 block text-[11px] mb-0.5">Época de construcción / Origen</span>
              <span className="font-semibold text-amber-300">{lugar.datosImportantes.epocaConstruccion}</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <span className="text-slate-400 block text-[11px] mb-0.5">Estado de conservación</span>
              <span className="font-semibold text-emerald-400">{lugar.datosImportantes.estadoConservacion}</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <span className="text-slate-400 block text-[11px] mb-0.5">Forma de acceso</span>
              <span className="font-semibold text-slate-200">{lugar.datosImportantes.acceso}</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <span className="text-slate-400 block text-[11px] mb-0.5">Tarifa de ingreso sugerida</span>
              <span className="font-semibold text-slate-200">{lugar.datosImportantes.tarifaIngreso}</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 sm:col-span-2">
              <span className="text-slate-400 block text-[11px] mb-0.5">Horario de visita recomendado</span>
              <span className="font-semibold text-slate-200">{lugar.datosImportantes.horarioAtencion}</span>
            </div>
          </div>
        </section>

        {/* 9. VIDEO */}
        <section id="seccion-video" className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 px-1">
            <Film className="w-4 h-4" />
            <h2 className="text-xs font-bold uppercase tracking-wider">VIDEO DEL LUGAR</h2>
          </div>
          <VideoPlayer video={lugar.video} lugarNombre={lugar.nombreCorto} />
        </section>

        {/* 10. GOOGLE MAPS */}
        <section id="seccion-mapa-individual">
          <LocationMap 
            coordenadas={lugar.coordenadas} 
            lugarNombre={lugar.nombre} 
            direccionTexto={lugar.datosImportantes.ubicacion} 
          />
        </section>

        {/* 11. RECOMENDACIONES */}
        <section id="seccion-recomendaciones" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-3">
            <ShieldCheck className="w-4 h-4" />
            <h2 className="text-xs font-bold uppercase tracking-wider">RECOMENDACIONES PARA EL VISITANTE</h2>
          </div>

          <div className="space-y-3.5 text-xs">
            {/* Patrimonio */}
            <div className="space-y-1.5">
              <h3 className="font-semibold text-amber-300 flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5" />
                <span>Cuidado del Patrimonio Histórico</span>
              </h3>
              <ul className="space-y-1 pl-5 list-disc text-slate-300">
                {lugar.recomendaciones.patrimonio.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>

            {/* Costumbres Locales */}
            <div className="space-y-1.5">
              <h3 className="font-semibold text-cyan-300 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Respeto a las Costumbres Locales</span>
              </h3>
              <ul className="space-y-1 pl-5 list-disc text-slate-300">
                {lugar.recomendaciones.costumbresLocales.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>

            {/* Seguridad */}
            <div className="space-y-1.5">
              <h3 className="font-semibold text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Seguridad y Altitud</span>
              </h3>
              <ul className="space-y-1 pl-5 list-disc text-slate-300">
                {lugar.recomendaciones.seguridad.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>

            {/* Medio Ambiente */}
            <div className="space-y-1.5">
              <h3 className="font-semibold text-emerald-300 flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5" />
                <span>Conservación del Medio Ambiente</span>
              </h3>
              <ul className="space-y-1 pl-5 list-disc text-slate-300">
                {lugar.recomendaciones.medioAmbiente.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>

            {/* Espacios Religiosos y Culturales */}
            {lugar.recomendaciones.espaciosReligiosos.length > 0 && (
              <div className="space-y-1.5">
                <h3 className="font-semibold text-indigo-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Respeto a Espacios Religiosos y Culturales</span>
                </h3>
                <ul className="space-y-1 pl-5 list-disc text-slate-300">
                  {lugar.recomendaciones.espaciosReligiosos.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* BOTTOM ACTION BAR: Share Place Button */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleShare}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-950/50 transition-all active:scale-98"
          >
            <Share2 className="w-4 h-4" />
            <span>COMPARTIR ESTE LUGAR</span>
          </button>

          <button
            onClick={onBack}
            className="py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-xs transition-colors"
          >
            Volver a la lista
          </button>
        </div>

      </main>
    </article>
  );
};
