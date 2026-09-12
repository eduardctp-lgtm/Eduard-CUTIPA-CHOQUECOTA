import React, { useState } from 'react';
import { ImagenGaleria } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface ImageGalleryProps {
  imagenes: ImagenGaleria[];
  lugarNombre: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ imagenes, lugarNombre }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalZoom, setModalZoom] = useState<number>(1);

  const currentImg = imagenes[currentIndex] || imagenes[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagenes.length);
    setModalZoom(1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    setModalZoom(1);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalZoom(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalZoom(1);
  };

  const zoomIn = () => setModalZoom((z) => Math.min(2.5, z + 0.3));
  const zoomOut = () => setModalZoom((z) => Math.max(1, z - 0.3));
  const resetZoom = () => setModalZoom(1);

  return (
    <div id="seccion-galeria-imagenes" className="space-y-3">
      {/* Main Image Slider View */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
        <img
          src={currentImg.url}
          alt={currentImg.titulo}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
            {currentIndex + 1} de {imagenes.length}
          </span>

          <button
            onClick={() => openModal(currentIndex)}
            className="p-2 rounded-full bg-slate-950/75 backdrop-blur-md text-white hover:text-cyan-300 border border-slate-700 hover:border-cyan-400 transition-all shadow-lg active:scale-95"
            title="Ver en pantalla completa"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={handlePrev}
          aria-label="Imagen anterior"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-700/80 text-white hover:text-cyan-300 hover:border-cyan-400 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Imagen siguiente"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-700/80 text-white hover:text-cyan-300 hover:border-cyan-400 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 active:scale-90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Caption */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="text-sm font-semibold text-white drop-shadow-md truncate">
            {currentImg.titulo}
          </p>
          <p className="text-xs text-slate-300 line-clamp-1 opacity-90 drop-shadow">
            {currentImg.descripcion}
          </p>
        </div>
      </div>

      {/* Slideable Thumbnails Strip */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x">
        {imagenes.map((img, idx) => (
          <button
            key={img.id || idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all snap-start ${
              idx === currentIndex
                ? 'border-cyan-400 shadow-md shadow-cyan-500/30 scale-102'
                : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
            }`}
          >
            <img
              src={img.url}
              alt={img.titulo}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal View */}
      {isModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 animate-fade-in"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between text-white border-b border-slate-800 pb-3">
            <div>
              <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                Galería de {lugarNombre}
              </p>
              <h3 className="text-sm font-bold text-slate-100">
                {currentImg.titulo} ({currentIndex + 1}/{imagenes.length})
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={zoomIn}
                className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 transition-colors"
                title="Acercar imagen"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={zoomOut}
                className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 transition-colors"
                title="Alejar imagen"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={resetZoom}
                className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 transition-colors"
                title="Restablecer zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 transition-colors ml-2"
                title="Cerrar pantalla completa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image Container */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
            <img
              src={currentImg.url}
              alt={currentImg.titulo}
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${modalZoom})` }}
              className="max-h-full max-w-full object-contain transition-transform duration-200 rounded-lg shadow-2xl"
            />

            {/* Modal Arrow Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center transition-all shadow-xl active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center transition-all shadow-xl active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Footer Description */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center text-xs text-slate-300">
            <p className="max-w-xl mx-auto">{currentImg.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
};
