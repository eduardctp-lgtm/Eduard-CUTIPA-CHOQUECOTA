import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  QrCode, 
  ExternalLink, 
  CheckCircle2, 
  Share2, 
  Sparkles, 
  X, 
  Copy, 
  Check,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({ isOpen, onClose }) => {
  const { canInstall, isPromptReady, isInstalled, isIOS, install } = usePWAInstall();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'telefono' | 'apk' | 'qr'>('telefono');

  if (!isOpen) return null;

  // Real accessible URL of the app
  const appUrl = typeof window !== 'undefined' 
    ? (window.location.origin.includes('localhost') 
        ? 'https://ais-pre-gjshmkktfu2pvbumb562p4-51485673226.us-west2.run.app' 
        : window.location.origin)
    : 'https://ais-pre-gjshmkktfu2pvbumb562p4-51485673226.us-west2.run.app';

  const pwaBuilderUrl = `https://www.pwabuilder.com/reportcard?site=${encodeURIComponent(appUrl)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(appUrl)}&bgcolor=020617&color=38bdf8`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleNativeInstall = async () => {
    if (isPromptReady) {
      const success = await install();
      if (success) {
        onClose();
      }
    } else {
      alert('Para instalar directamente desde el navegador de tu teléfono: Abre el menú de opciones (⋮) en Chrome y pulsa "Instalar aplicación" o "Agregar a la pantalla principal".');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div 
        className="bg-slate-900 border border-cyan-500/40 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-950 border border-cyan-400 shrink-0 shadow-md">
              <img 
                src="/logo.jpg" 
                alt="Walk by Juli" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-outfit flex items-center gap-1.5">
                <span>Instalar WALK BY JULI</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40 font-mono">
                  APK / PWA
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Lista para instalar y usar en tu teléfono móvil
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-950/60 p-1 text-xs">
          <button
            onClick={() => setActiveTab('telefono')}
            className={`py-2 px-1 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'telefono'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>En Teléfono</span>
          </button>

          <button
            onClick={() => setActiveTab('apk')}
            className={`py-2 px-1 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'apk'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Generar .APK</span>
          </button>

          <button
            onClick={() => setActiveTab('qr')}
            className={`py-2 px-1 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'qr'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Código QR</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 overflow-y-auto space-y-4 text-xs">
          {/* TAB 1: INSTALACIÓN EN TELÉFONO */}
          {activeTab === 'telefono' && (
            <div className="space-y-3.5">
              {isInstalled ? (
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3 flex items-center gap-2.5 text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="font-semibold text-xs text-white">¡Aplicación ya instalada!</p>
                    <p className="text-[11px] text-emerald-300/80">Estás ejecutando Walk by Juli en modo app independiente en tu dispositivo.</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 rounded-xl p-3.5 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs">Instalación Nativa Directa (WebAPK)</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Android y Chrome generan automáticamente el archivo APK nativo en tu teléfono sin descargas peligrosas de terceros.
                      </p>
                    </div>
                  </div>

                  {isPromptReady ? (
                    <button
                      onClick={handleNativeInstall}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                      <Download className="w-4 h-4" />
                      <span>Instalar Ahora en este Dispositivo</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleNativeInstall}
                      className="w-full py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>¿Cómo instalar en mi móvil?</span>
                    </button>
                  )}
                </div>
              )}

              {/* Guía según sistema operativo */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 space-y-2.5">
                <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-xs">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Pasos para instalar en Android (Google Chrome):</span>
                </div>
                <ol className="space-y-1.5 text-slate-300 text-[11px] pl-4 list-decimal">
                  <li>Abre el enlace de la aplicación en <strong>Chrome en tu celular</strong>.</li>
                  <li>Toca el menú de <strong>tres puntos (⋮)</strong> en la esquina superior derecha.</li>
                  <li>Selecciona <strong>"Instalar aplicación"</strong> o <strong>"Agregar a la pantalla principal"</strong>.</li>
                  <li>¡Listo! Se creará el acceso directo con el icono oficial de Walk by Juli y funcionará como una app instalada.</li>
                </ol>
              </div>

              {/* iOS instructions */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 space-y-2 text-slate-400 text-[11px]">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-xs">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>En iPhone / iPad (Safari):</span>
                </div>
                <p className="text-slate-300">
                  Toca el botón <strong>Compartir</strong> (icono de cuadrado con flecha hacia arriba) en Safari y pulsa <strong>"Agregar al inicio"</strong>.
                </p>
              </div>

              {/* Link copy action */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 truncate max-w-[200px]">{appUrl}</span>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 text-[11px] font-medium transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copiado' : 'Copiar link'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: GENERAR .APK NATIVO */}
          {activeTab === 'apk' && (
            <div className="space-y-3.5">
              <div className="bg-slate-950/70 border border-cyan-500/30 rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Paquete .APK para Android</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Esta aplicación está configurada bajo los estándares oficiales de <strong>PWA Manifest v2</strong> de Google, lo que permite empaquetar un archivo instalador <strong>.APK</strong> o <strong>.AAB</strong> firmado para Android o para publicar en Google Play Store.
                </p>
              </div>

              <div className="space-y-2 bg-slate-950/50 border border-slate-800 rounded-xl p-3">
                <h5 className="font-semibold text-white text-xs flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Descargar / Compilar el archivo .APK:</span>
                </h5>
                <p className="text-slate-400 text-[11px]">
                  Puedes generar el APK instalable en 1 clic utilizando el generador oficial <strong>PWABuilder</strong> (creado por Google y Microsoft para aplicaciones PWA):
                </p>

                <a
                  href={pwaBuilderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-cyan-900/30 flex items-center justify-center gap-2 transition-all inline-flex"
                >
                  <span>Empaquetar APK en PWABuilder</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="pt-2 text-[10px] text-slate-400 space-y-1">
                  <p>✓ Detecta el manifiesto oficial con iconos de 192px y 512px.</p>
                  <p>✓ Genera el archivo .APK firmado listo para instalar en cualquier teléfono.</p>
                  <p>✓ También incluye el paquete AAB para Google Play Store si deseas publicarla.</p>
                </div>
              </div>

              {/* Tips for sideloading */}
              <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3 text-[11px] text-amber-200/90 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Consejo rápido:</strong> No necesitas descargar archivos APK desconocidos; el método de la pestaña <strong>"En Teléfono"</strong> instala la app directamente a través de Google Play Services con mayor seguridad y actualizaciones automáticas.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CÓDIGO QR */}
          {activeTab === 'qr' && (
            <div className="space-y-3 flex flex-col items-center text-center">
              <p className="text-xs text-slate-300 max-w-xs">
                Escanea este código con la cámara de tu teléfono para abrir la aplicación e instalarla al instante:
              </p>

              <div className="p-3 bg-slate-950 border-2 border-cyan-500/50 rounded-2xl shadow-xl shadow-cyan-950/50 inline-block">
                <img 
                  src={qrCodeUrl} 
                  alt="QR para instalar Walk by Juli" 
                  className="w-44 h-44 rounded-lg object-contain bg-slate-950"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 truncate max-w-[210px]">{appUrl}</span>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Walk by Juli • Versión Móvil</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
