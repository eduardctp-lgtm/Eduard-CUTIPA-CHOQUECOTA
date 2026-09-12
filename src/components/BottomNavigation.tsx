import React from 'react';
import { TabNavegacion } from '../types';
import { Home, MapPin, Map as MapIcon, Info } from 'lucide-react';

interface BottomNavigationProps {
  currentTab: TabNavegacion;
  onSelectTab: (tab: TabNavegacion) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentTab,
  onSelectTab,
}) => {
  const tabs = [
    { id: 'inicio' as TabNavegacion, label: 'INICIO', icon: Home },
    { id: 'lugares' as TabNavegacion, label: 'LUGARES', icon: MapPin },
    { id: 'mapa' as TabNavegacion, label: 'MAPA', icon: MapIcon },
    { id: 'informacion' as TabNavegacion, label: 'INFORMACIÓN', icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 max-w-lg mx-auto shadow-2xl">
      <div className="flex items-center justify-around py-2 px-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all relative select-none ${
                isActive
                  ? 'text-cyan-400 font-bold scale-105'
                  : 'text-slate-400 hover:text-slate-200 font-medium'
              }`}
            >
              {/* Active glow indicator pill */}
              {isActive && (
                <span className="absolute -top-2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-sm shadow-cyan-400/50 animate-fade-in" />
              )}
              
              <div className={`p-1 rounded-lg ${isActive ? 'bg-cyan-500/15' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-wider mt-0.5 font-outfit">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
