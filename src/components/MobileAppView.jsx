import React, { useState } from 'react';
import { Watch, WifiOff, Heart } from 'lucide-react';

export default function MobileAppView() {
  const [activeTab, setActiveTab] = useState('workout');

  return (
    <section className="relative w-full px-margin-mobile md:px-margin-desktop py-space-xl overflow-hidden max-w-[1440px] mx-auto space-y-space-2xl">
      
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container border border-border-subtle">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00ff87]"></span>
          <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">React Native 0.74 Showcase • iOS & Android</span>
        </div>
        
        <h1 className="mt-space-md font-display-hero text-headline-lg md:text-display-hero text-text-primary tracking-tight max-w-4xl">
          Your Fitness Platform, <span className="bg-gradient-to-r from-primary-container via-primary-fixed-dim to-secondary-container bg-clip-text text-transparent">Anywhere.</span>
        </h1>
        <p className="mt-space-sm font-body-lg text-body-md md:text-body-lg text-text-secondary max-w-2xl">
          Interactive phone app simulation featuring 120 FPS UI components, live workout tracking, Apple Watch HealthKit sync, and offline logging.
        </p>

        <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-xs">
          <span className="px-space-sm py-1 rounded-full bg-surface-container-high font-label-data text-label-data text-text-secondary border border-border-subtle">React Native 0.74</span>
          <span className="px-space-sm py-1 rounded-full bg-surface-container-high font-label-data text-label-data text-text-secondary border border-border-subtle">Reanimated 3 (120 FPS)</span>
          <span className="px-space-sm py-1 rounded-full bg-surface-container-high font-label-data text-label-data text-primary-fixed-dim border border-border-subtle">HealthKit & Apple Watch</span>
        </div>
      </div>

      {/* Simulated Interactive Mobile Frame */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-space-2xl pt-space-md">
        
        {/* Phone Chassis */}
        <div className="relative w-full max-w-[340px] h-[680px] rounded-[48px] bg-surface-card border-4 border-surface-container-highest p-3 shadow-[0_24px_60px_rgba(0,0,0,0.9)] flex flex-col justify-between">
          <div className="w-full h-full rounded-[40px] bg-surface-base overflow-hidden flex flex-col relative border border-border-subtle">
            
            {/* Dynamic Island */}
            <div className="h-9 w-full flex items-center justify-between px-6 pt-2 select-none relative z-20">
              <span className="font-label-data text-[11px] text-text-primary font-semibold">9:41</span>
              <div className="h-4 w-20 bg-surface-container-lowest rounded-full mx-auto flex items-center justify-end pr-2">
                <span className="w-2 h-2 rounded-full bg-surface-container-high"></span>
              </div>
              <div className="flex items-center gap-1 text-text-primary text-[10px]">
                <span className="material-symbols-outlined text-[13px]">signal_cellular_4_bar</span>
                <span className="material-symbols-outlined text-[13px]">wifi</span>
                <span className="material-symbols-outlined text-[14px]">battery_full</span>
              </div>
            </div>

            {/* Screen View Content */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {activeTab === 'workout' && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-label-caps text-[9px] text-text-muted uppercase">ACTIVE SESSION</span>
                      <h3 className="font-headline-sm text-body-md font-bold text-text-primary">Hypertrophy Chest</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-accent-danger/20 text-accent-danger font-label-caps text-[10px] font-bold border border-accent-danger/30">00:42:15</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-surface-card border border-border-subtle space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-data text-body-sm font-bold text-primary-container">Barbell Bench Press</span>
                      <span className="font-label-caps text-[10px] text-text-muted">Set 3 / 4</span>
                    </div>
                    <div className="flex items-center justify-between bg-surface-container p-2 rounded-xl text-body-sm font-label-data">
                      <span>100 kg</span>
                      <span>× 8 reps</span>
                      <span className="px-2 py-1 rounded-lg bg-primary-container text-on-primary-container font-bold text-[10px]">Logged</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-surface-card border border-border-subtle">
                    <span className="font-label-caps text-[10px] text-text-muted uppercase block">Biometric Pulse</span>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Heart size={20} className="text-accent-danger animate-pulse" />
                        <div>
                          <span className="font-headline-sm text-headline-sm font-bold text-text-primary">154 BPM</span>
                          <span className="font-label-caps text-[10px] text-text-muted block">Target Zone 3</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-surface-card border border-border-subtle flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Watch size={18} className="text-secondary-container" />
                      <span className="font-body-sm text-text-primary font-semibold">Apple Watch Ultra</span>
                    </div>
                    <span className="font-label-caps text-[10px] text-primary-fixed-dim bg-surface-container px-2 py-0.5 rounded-full">Connected</span>
                  </div>
                </>
              )}

              {activeTab === 'stats' && (
                <div className="space-y-3">
                  <h3 className="font-headline-sm text-body-md font-bold text-text-primary">Weekly Volume</h3>
                  <div className="p-3 rounded-2xl bg-surface-card border border-border-subtle">
                    <span className="font-label-data text-headline-sm text-primary-container font-bold">28,450 kg</span>
                    <p className="font-body-sm text-[12px] text-text-secondary mt-1">Total weight lifted this week across 4 sessions.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Phone Bottom Tab Switcher */}
            <div className="h-14 bg-surface-elevated/95 border-t border-border-subtle flex items-center justify-around text-text-muted text-[11px]">
              <button onClick={() => setActiveTab('workout')} className={`flex flex-col items-center ${activeTab === 'workout' ? 'text-primary-container' : 'hover:text-text-primary'}`}>
                <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                <span className="font-label-caps text-[9px]">Train</span>
              </button>
              <button onClick={() => setActiveTab('stats')} className={`flex flex-col items-center ${activeTab === 'stats' ? 'text-primary-container' : 'hover:text-text-primary'}`}>
                <span className="material-symbols-outlined text-[20px]">analytics</span>
                <span className="font-label-caps text-[9px]">Stats</span>
              </button>
            </div>

          </div>
        </div>

        {/* Callouts */}
        <div className="max-w-md space-y-space-md">
          <div className="p-space-md rounded-2xl bg-surface-card border border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                <WifiOff size={20} />
              </div>
              <div>
                <h4 className="font-headline-sm text-body-md font-bold text-text-primary">Offline-First WatermelonDB</h4>
                <p className="font-body-sm text-text-secondary mt-0.5">Train anywhere without signal. Workouts sync instantly when reconnected.</p>
              </div>
            </div>
          </div>

          <div className="p-space-md rounded-2xl bg-surface-card border border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary-container">
                <Watch size={20} />
              </div>
              <div>
                <h4 className="font-headline-sm text-body-md font-bold text-text-primary">Real-time Watch Telemetry</h4>
                <p className="font-body-sm text-text-secondary mt-0.5">Heart rate, rest timers, and rep counters synced directly to your wrist.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
