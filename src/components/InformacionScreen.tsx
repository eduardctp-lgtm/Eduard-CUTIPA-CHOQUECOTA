import React from 'react';
import { 
  Landmark, 
  BookOpen, 
  MapPin, 
  Calendar, 
  Utensils, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  ExternalLink,
  Layers,
  GraduationCap,
  Smartphone,
  Download
} from 'lucide-react';

interface InformacionScreenProps {
  onOpenInstallModal?: () => void;
}

export const InformacionScreen: React.FC<InformacionScreenProps> = ({ onOpenInstallModal }) => {
  return (
    <div id="pantalla-informacion-cultural" className="space-y-5 pb-16">
      {/* Official Identity Hero Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-cyan-500/30 p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-950 border-2 border-cyan-400/80 shadow-lg shrink-0">
            <img
              src="/logo.jpg"
              alt="Logotipo oficial WALK BY JULI"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1 flex-1">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Proyecto Educativo y Cultural
            </span>
            <h2 className="text-xl font-extrabold text-white font-outfit">
              WALK BY JULI
            </h2>
            <p className="text-xs font-semibold text-cyan-300">
              Aplicación móvil de cultura y turismo de Juli
            </p>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              Guía turística digital interactiva diseñada para difundir, revalorar y preservar el invaluable patrimonio histórico, cultural y natural de la ciudad de Juli, provincia de Chucuito, Puno – Perú.
            </p>

            {onOpenInstallModal && (
              <div className="pt-2">
                <button
                  onClick={onOpenInstallModal}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-950/50 transition-all active:scale-95"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Instalar en mi Celular / Descargar APK</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Why "La Pequeña Roma de América" */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2.5">
          <Landmark className="w-4 h-4" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            ¿POR QUÉ JULI ES LA «PEQUEÑA ROMA DE AMÉRICA»?
          </h3>
        </div>

        <p className="text-xs text-slate-200 leading-relaxed">
          Durante los siglos XVI y XVII, Juli se convirtió en el principal centro de adoctrinamiento religioso, lingüístico y cultural de la orden dominica y posteriormente de la Compañía de Jesús en el sur andino.
        </p>

        <p className="text-xs text-slate-300 leading-relaxed">
          Con una población predominantemente aymara, los sacerdotes jesuitas establecieron en Juli cuatro suntuosos templos mayores: <strong className="text-white">San Pedro, San Juan de Letrán, Nuestra Señora de la Asunción y Santa Cruz de Jerusalén</strong>. La suntuosidad de su arquitectura inspirada en las basílicas de Roma y su trascendencia teológica le valieron el célebre apelativo de <span className="text-cyan-300 font-semibold">«La Pequeña Roma de América»</span>.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] text-center font-medium">
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
            <span className="block font-bold text-cyan-400">1565</span>
            Llegada Dominica
          </div>
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
            <span className="block font-bold text-amber-400">1576</span>
            Misión Jesuítica
          </div>
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
            <span className="block font-bold text-emerald-400">1612</span>
            Imprenta Aymara
          </div>
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
            <span className="block font-bold text-rose-400">4 Templos</span>
            Patrimonio Vivo
          </div>
        </div>
      </section>

      {/* Historic Printing Press in Aymara */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2.5">
        <div className="flex items-center gap-2 text-amber-400 border-b border-slate-800 pb-2">
          <BookOpen className="w-4 h-4" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            LA HISTÓRICA IMPRENTA DE JULI DE 1612
          </h3>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          En Juli funcionó una de las primeras imprentas de Sudamérica. En el año 1612, el jesuita <strong className="text-white">Ludovico Bertonio</strong> publicó el célebre <em>«Vocabulario de la Lengua Aymara»</em>, una obra monumental que documentó la riqueza gramatical y filosófica del pueblo aymara. Juli se erigió así como el faro intelectual del altiplano.
        </p>
      </section>

      {/* Festividades y Calendario Cultural */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-emerald-400 border-b border-slate-800 pb-2">
          <Calendar className="w-4 h-4" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            FESTIVIDADES Y CELEBRACIONES PRINCIPALES
          </h3>
        </div>

        <div className="space-y-2 text-xs">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-3">
            <span className="px-2 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-bold text-[10px] shrink-0">
              28 - 29 JUN
            </span>
            <div>
              <p className="font-bold text-slate-100">Fiesta Patronal de San Pedro y San Pablo</p>
              <p className="text-slate-400 text-[11px]">Danzas autóctonas (Sicuris, Morenadas, Diabladas) y procesión del Templo Matriz.</p>
            </div>
          </div>

          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-3">
            <span className="px-2 py-1 rounded-md bg-amber-500/20 text-amber-300 font-bold text-[10px] shrink-0">
              15 AGOSTO
            </span>
            <div>
              <p className="font-bold text-slate-100">Virgen de la Asunción</p>
              <p className="text-slate-400 text-[11px]">Festividad en el Templo Museo de la Asunción con misa de fiesta y ferias gastronómicas.</p>
            </div>
          </div>

          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-3">
            <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-bold text-[10px] shrink-0">
              24 AGOSTO
            </span>
            <div>
              <p className="font-bold text-slate-100">Peregrinación al Apu San Bartolomé</p>
              <p className="text-slate-400 text-[11px]">Caminata comunitaria a la cumbre del cerro tutelar con rituales andinos y misas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gastronomía Típica de Juli */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-rose-400 border-b border-slate-800 pb-2">
          <Utensils className="w-4 h-4" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            SABORES TRADICIONALES DE JULI
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <p className="font-bold text-slate-200">Trucha Frita del Titicaca</p>
            <p className="text-slate-400 text-[11px]">Criada en las frías aguas del lago, acompañada de papas andinas nativas y ensalada.</p>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <p className="font-bold text-slate-200">Kankacho Andino</p>
            <p className="text-slate-400 text-[11px]">Cordero macerado con ají panca y cerveza negra, asado en horno de leña.</p>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <p className="font-bold text-slate-200">Pescapé y Chairo Puneño</p>
            <p className="text-slate-400 text-[11px]">Sopa tradicional a base de chuño negro, carne de cordero, verduras y hierbabuena.</p>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <p className="font-bold text-slate-200">Mazamorra de Quinua</p>
            <p className="text-slate-400 text-[11px]">Elaborada con granos de quinua real y cal de chuño (jataña), nutritiva y ancestral.</p>
          </div>
        </div>
      </section>

      {/* Educational Credits Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-2">
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
          <GraduationCap className="w-5 h-5" />
        </div>
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
          EMPRENDIMIENTO EDUCATIVO Y TURÍSTICO
        </h4>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Proyecto escolar y comunitario desarrollado para el fortalecimiento de la identidad cultural y el turismo sostenible en Juli, Puno.
        </p>
        <p className="text-[11px] text-slate-500">
          Versión 1.0 • Puno, Perú • WALK BY JULI
        </p>
      </div>
    </div>
  );
};
