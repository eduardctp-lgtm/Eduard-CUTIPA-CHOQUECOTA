import React, { useState, useEffect } from 'react';
import { LUGARES_JULI } from './data/lugares';
import { TabNavegacion, LugarTuristico } from './types';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MainMenu } from './components/MainMenu';
import { LugarDetail } from './components/LugarDetail';
import { InteractiveMap } from './components/InteractiveMap';
import { InformacionScreen } from './components/InformacionScreen';
import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { FavoritesModal } from './components/FavoritesModal';
import { InstallAppModal } from './components/InstallAppModal';
import { Sparkles, MapPin, Compass, Landmark, Waves, Mountain, Award } from 'lucide-react';

export default function App() {
  const [isWelcomeActive, setIsWelcomeActive] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<TabNavegacion>('inicio');
  const [selectedLugarId, setSelectedLugarId] = useState<string | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);

  // LocalStorage favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('walk_by_juli_favorites');
      return saved ? JSON.parse(saved) : ['iglesia-san-pedro', 'lago-titicaca-juli'];
    } catch {
      return ['iglesia-san-pedro', 'lago-titicaca-juli'];
    }
  });

  // LocalStorage visited history
  const [history, setHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('walk_by_juli_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('walk_by_juli_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('walk_by_juli_history', JSON.stringify(history));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [history]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectLugar = (id: string) => {
    setSelectedLugarId(id);
    // Add to history if not already first
    setHistory((prev) => [id, ...prev.filter((item) => item !== id)].slice(0, 15));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleGoHome = () => {
    setSelectedLugarId(null);
    setCurrentTab('inicio');
    setIsWelcomeActive(false);
  };

  const handleSelectTab = (tab: TabNavegacion) => {
    setSelectedLugarId(null);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedLugar = LUGARES_JULI.find((l) => l.id === selectedLugarId);

  // 1. If Welcome Screen is active, show the welcome screen
  if (isWelcomeActive) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center">
        <div className="w-full max-w-lg min-h-screen shadow-2xl relative border-x border-slate-900 bg-slate-950">
          <WelcomeScreen
            onStartExploration={() => {
              setIsWelcomeActive(false);
              setCurrentTab('inicio');
            }}
            onOpenInstallModal={() => setIsInstallModalOpen(true)}
          />
          <InstallAppModal
            isOpen={isInstallModalOpen}
            onClose={() => setIsInstallModalOpen(false)}
          />
        </div>
      </div>
    );
  }

  // 2. Main Mobile Layout Container
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex justify-center selection:bg-cyan-500 selection:text-white">
      {/* Centered Mobile Device Viewport */}
      <div className="w-full max-w-lg min-h-screen relative flex flex-col bg-slate-950 border-x border-slate-900/90 shadow-2xl">
        
        {/* Top App Header */}
        <Header
          onGoHome={handleGoHome}
          favoritesCount={favorites.length}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onOpenInstallModal={() => setIsInstallModalOpen(true)}
          isHome={currentTab === 'inicio' && !selectedLugarId}
        />

        {/* Dynamic Screen View */}
        <main className="flex-1 pb-16">
          {selectedLugar ? (
            /* Individual Attraction Page */
            <LugarDetail
              lugar={selectedLugar}
              onBack={() => setSelectedLugarId(null)}
              isFavorite={favorites.includes(selectedLugar.id)}
              onToggleFavorite={toggleFavorite}
              onSelectLugar={handleSelectLugar}
            />
          ) : (
            <div className="p-4 space-y-4">
              {/* Tab: INICIO */}
              {currentTab === 'inicio' && (
                <div className="space-y-4 animate-fade-in">
                  {/* Hero Quick Banner */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-cyan-500/30 p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-950 border border-cyan-400/80 shrink-0 shadow-md">
                        <img
                          src="/logo.jpg"
                          alt="Logo Walk by Juli"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                          <Sparkles className="w-3 h-3" />
                          <span>Guía Turística Digital</span>
                        </div>
                        <h2 className="text-base font-extrabold text-white tracking-tight font-outfit">
                          Bienvenido a Juli, Puno
                        </h2>
                        <p className="text-xs text-slate-300">
                          “La Pequeña Roma de América” • 8 Destinos Principales
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 8 Main Buttons organized in visual card grid */}
                  <MainMenu
                    lugares={LUGARES_JULI}
                    onSelectLugar={handleSelectLugar}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    onOpenInstallModal={() => setIsInstallModalOpen(true)}
                  />
                </div>
              )}

              {/* Tab: LUGARES */}
              {currentTab === 'lugares' && (
                <div className="animate-fade-in">
                  <MainMenu
                    lugares={LUGARES_JULI}
                    onSelectLugar={handleSelectLugar}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    onOpenInstallModal={() => setIsInstallModalOpen(true)}
                  />
                </div>
              )}

              {/* Tab: MAPA (“DESCUBRE JULI”) */}
              {currentTab === 'mapa' && (
                <div className="animate-fade-in">
                  <InteractiveMap
                    lugares={LUGARES_JULI}
                    onSelectLugar={handleSelectLugar}
                  />
                </div>
              )}

              {/* Tab: INFORMACIÓN */}
              {currentTab === 'informacion' && (
                <div className="animate-fade-in">
                  <InformacionScreen 
                    onOpenInstallModal={() => setIsInstallModalOpen(true)}
                  />
                </div>
              )}
            </div>
          )}
        </main>

        {/* Bottom Navigation Bar */}
        <BottomNavigation
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
        />

        {/* Favorites & History Modal */}
        <FavoritesModal
          isOpen={isFavoritesOpen}
          onClose={() => setIsFavoritesOpen(false)}
          favorites={favorites}
          history={history}
          allLugares={LUGARES_JULI}
          onSelectLugar={handleSelectLugar}
          onClearHistory={handleClearHistory}
        />

        {/* Modal de Instalación PWA / APK */}
        <InstallAppModal
          isOpen={isInstallModalOpen}
          onClose={() => setIsInstallModalOpen(false)}
        />
      </div>
    </div>
  );
}
