import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  Film, 
  Link as LinkIcon, 
  Check, 
  Sparkles,
  ExternalLink,
  Youtube
} from 'lucide-react';
import { VideoLugar } from '../types';

interface VideoPlayerProps {
  video: VideoLugar;
  lugarNombre: string;
}

interface YouTubeInfo {
  videoId: string;
  startTime: number;
}

export function parseYouTubeUrl(url: string): YouTubeInfo | null {
  if (!url) return null;
  
  // Match youtube.com/watch?v=..., youtu.be/..., youtube.com/embed/...
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regExp);
  if (!match || !match[1]) return null;

  const videoId = match[1];
  let startTime = 0;

  // Match t=42s, t=42, start=42, 1m20s, etc.
  const timeMatch = url.match(/[?&](?:t|start)=([0-9hms]+)/i);
  if (timeMatch && timeMatch[1]) {
    const tStr = timeMatch[1];
    let secs = 0;
    const h = tStr.match(/(\d+)h/i);
    const m = tStr.match(/(\d+)m/i);
    const s = tStr.match(/(\d+)s/i);
    if (h) secs += parseInt(h[1], 10) * 3600;
    if (m) secs += parseInt(m[1], 10) * 60;
    if (s) secs += parseInt(s[1], 10);
    if (!h && !m && !s && /^\d+$/.test(tStr)) {
      secs = parseInt(tStr, 10);
    }
    startTime = secs;
  }

  return { videoId, startTime };
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, lugarNombre }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentVideoSrc, setCurrentVideoSrc] = useState<string>(video.url);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [customUrl, setCustomUrl] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);

  // Auto-detect YouTube format
  const youtubeData = parseYouTubeUrl(currentVideoSrc);

  // Controls auto-hide timer for HTML5 player
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCurrentVideoSrc(video.url);
    setIsPlaying(false);
    setCurrentTime(0);
    setVideoError(false);
    setIframeKey(prev => prev + 1);
  }, [video.url]);

  const togglePlay = () => {
    if (youtubeData) {
      setIsPlaying(!isPlaying);
      return;
    }

    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setVideoError(false);
      }).catch(() => {
        setVideoError(true);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    videoRef.current.muted = newMuted;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => console.log('Fullscreen request handled:', err));
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleUserActivity = () => {
    setShowControls(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const applyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      setCurrentVideoSrc(customUrl.trim());
      setIsPlaying(false);
      setVideoError(false);
      setIsCustomMode(false);
      setIframeKey(prev => prev + 1);
    }
  };

  // Build high-res thumbnail for YouTube if not provided or fallback
  const posterImage = youtubeData 
    ? `https://img.youtube.com/vi/${youtubeData.videoId}/hqdefault.jpg`
    : video.thumbnail;

  return (
    <div id="seccion-video-lugar" className="space-y-3">
      {/* Video Display Container */}
      <div 
        ref={containerRef}
        onMouseMove={handleUserActivity}
        onTouchStart={handleUserActivity}
        className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl group select-none"
      >
        {/* YOUTUBE PLAYER EMBED */}
        {youtubeData ? (
          <div className="w-full h-full relative bg-black">
            <iframe
              key={`${iframeKey}-${youtubeData.videoId}`}
              src={`https://www.youtube.com/embed/${youtubeData.videoId}?autoplay=0&start=${youtubeData.startTime}&rel=0&modestbranding=1`}
              title={`Video de ${lugarNombre}`}
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          /* STANDARD HTML5 VIDEO PLAYER */
          <>
            <video
              ref={videoRef}
              src={currentVideoSrc}
              poster={video.thumbnail}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onError={() => setVideoError(true)}
              playsInline
              className="w-full h-full object-cover"
              onClick={togglePlay}
            />

            {/* Center Play Overlay when paused */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-slate-950/30"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white tracking-wide drop-shadow-md">
                  Reproducir Video de {lugarNombre}
                </p>
                {video.duracion && (
                  <span className="mt-1 text-xs text-cyan-200 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                    {video.duracion}
                  </span>
                )}
              </div>
            )}

            {/* Video Error / Fallback */}
            {videoError && (
              <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-4 text-center">
                <Film className="w-10 h-10 text-cyan-400 mb-2 opacity-80" />
                <p className="text-sm font-semibold text-slate-200">Video no disponible en esta fuente</p>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Puedes insertar un enlace de YouTube o video directo abajo.
                </p>
                <button
                  onClick={() => {
                    setCurrentVideoSrc('https://www.youtube.com/watch?v=-sgZ-43HbE8&t=42s');
                    setVideoError(false);
                  }}
                  className="mt-3 px-3 py-1.5 rounded-lg bg-red-600/30 text-red-300 border border-red-500/40 text-xs font-medium hover:bg-red-600/40 transition-colors flex items-center gap-1.5"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>Cargar YouTube oficial de Juli</span>
                </button>
              </div>
            )}

            {/* Custom HTML5 Video Controls Bar */}
            <div 
              className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent p-3 pt-6 transition-opacity duration-300 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Progress Bar */}
              <div className="relative mb-2">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all"
                />
              </div>

              {/* Controls row */}
              <div className="flex items-center justify-between gap-2 text-slate-200">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
                    title={isPlaying ? "Pausar" : "Reproducir"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        setCurrentTime(0);
                      }
                    }}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Reiniciar"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  {/* Volume */}
                  <div className="flex items-center gap-1.5 ml-1">
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title={isMuted ? "Activar audio" : "Silenciar"}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-rose-400" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  <span className="text-[11px] font-mono text-slate-300 ml-2">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                >
                  {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Action bar under video */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold text-slate-200">{video.titulo}</p>
            {youtubeData && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-red-400 bg-red-950/50 border border-red-800/60 px-1.5 py-0.2 rounded">
                <Youtube className="w-3 h-3" />
                <span>YouTube</span>
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-400">
            {video.descripcion || 'Material audiovisual educativo sobre el patrimonio cultural de Juli.'}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
          {/* Quick link to open on YouTube if applicable */}
          {youtubeData && (
            <a
              href={`https://www.youtube.com/watch?v=${youtubeData.videoId}${youtubeData.startTime ? `&t=${youtubeData.startTime}s` : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 bg-red-950/40 border border-red-500/30 px-2.5 py-1.5 rounded-lg transition-colors"
              title="Abrir en YouTube en nueva pestaña"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Ver en YouTube</span>
            </a>
          )}

          {/* If YouTube iframe, offer a reload button */}
          {youtubeData && (
            <button
              onClick={() => {
                setIframeKey(k => k + 1);
              }}
              className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800 border border-slate-700 px-2 py-1.5 rounded-lg transition-colors"
              title="Reiniciar reproducción del video"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          )}

          <button
            onClick={() => setIsCustomMode(!isCustomMode)}
            className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>{isCustomMode ? 'Cerrar' : 'Cambiar enlace'}</span>
          </button>
        </div>
      </div>

      {/* Custom URL Drawer / Form */}
      {isCustomMode && (
        <form onSubmit={applyCustomUrl} className="bg-slate-900 border border-cyan-500/30 rounded-xl p-3 space-y-2.5 animate-fade-in">
          <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Insertar URL de video para {lugarNombre}:</span>
            </span>
            <span className="text-[10px] text-cyan-400 font-normal">YouTube o MP4/WebM</span>
          </label>

          <div className="flex gap-2">
            <input
              type="url"
              placeholder="https://www.youtube.com/watch?v=... o https://servidor.com/video.mp4"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-xs flex items-center gap-1 transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Aplicar</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[10px] text-slate-400">Enlace sugerido de Juli:</span>
            <button
              type="button"
              onClick={() => {
                setCustomUrl('https://www.youtube.com/watch?v=-sgZ-43HbE8&t=42s');
              }}
              className="text-[10px] text-red-400 hover:text-red-300 bg-red-950/30 border border-red-800/50 px-2 py-0.5 rounded transition-colors flex items-center gap-1"
            >
              <Youtube className="w-3 h-3" />
              <span>YouTube Juli (-sgZ-43HbE8 & t=42s)</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
