import React, { useState } from 'react';
import { Play, Bell, Menu, ShieldCheck, Dumbbell, Utensils, Smartphone, LayoutDashboard } from 'lucide-react';

export default function Header({ activeView, setActiveView, onStartWorkout }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'exercises', label: 'Exercises', icon: Dumbbell },
    { id: 'nutrition', label: 'Nutrition & BMI', icon: Utensils },
    // { id: 'mobile', label: 'Mobile App', icon: Smartphone },
    { id: 'admin', label: 'Admin', icon: ShieldCheck },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-base/80 backdrop-blur-xl border-b border-border-subtle shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
      <div className="h-20 w-full px-margin-mobile md:px-margin-desktop flex items-center justify-between gap-space-md">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-space-md">
          <button 
            onClick={() => setActiveView('dashboard')}
            className="flex items-center gap-space-xs group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-container to-secondary-container p-0.5 flex items-center justify-center shadow-[0_0_12px_rgba(0,255,135,0.4)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-surface-base rounded-[10px] flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-[22px]">bolt</span>
              </div>
            </div>
            <span className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-text-primary uppercase">FITFLOW</span>
            <span className="relative flex h-2.5 w-2.5 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container shadow-[0_0_8px_#00ff87]"></span>
            </span>
          </button>
          <div className="h-4 w-px bg-surface-container-highest hidden sm:block"></div>
          
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-space-xxs p-1 rounded-xl bg-surface-container-lowest border border-border-subtle">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`px-space-md py-space-xs text-body-sm rounded-lg transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-surface-container text-on-surface font-semibold shadow-[0_0_12px_rgba(0,255,135,0.15)] border border-primary-container/20'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-container-low font-medium'
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Strip */}
        <div className="flex items-center gap-space-xs md:gap-space-sm">
          
          {/* Notifications Popover */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifs(!showNotifs)}
              aria-label="Notifications" 
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-low border border-border-subtle text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-danger font-label-caps text-[9px] font-bold text-text-primary leading-none shadow-[0_0_8px_rgba(255,67,101,0.5)]">3</span>
            </button>

            {showNotifs && (
              <div className="absolute right-0 mt-space-xs w-80 rounded-2xl bg-surface-elevated/95 backdrop-blur-2xl border border-border-subtle p-space-md shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)] z-50">
                <div className="flex items-center justify-between pb-space-xs border-b border-border-subtle">
                  <span className="font-headline-sm text-body-md font-bold text-text-primary">Telemetry Alerts</span>
                  <span className="font-label-caps text-[10px] text-primary-fixed-dim bg-surface-container px-space-xs py-0.5 rounded-full border border-primary-fixed-dim/30">Live Sync</span>
                </div>
                <div className="space-y-space-xs mt-space-xs">
                  <div className="p-space-xs rounded-xl bg-surface-container/80 hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-label-data text-label-data text-text-primary font-bold">Zone 4 HR Exceeded</span>
                      <span className="font-label-caps text-[10px] text-text-muted">2m ago</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">Heart rate peaked at 182 BPM during high intensity set.</p>
                  </div>
                  <div className="p-space-xs rounded-xl bg-surface-container/80 hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-label-data text-label-data text-text-primary font-bold">Protein Target Reached</span>
                      <span className="font-label-caps text-[10px] text-text-muted">14m ago</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">Daily requirement satisfied (190g target).</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative flex items-center gap-space-xs pl-space-xs border-l border-border-subtle">
            <div className="relative">
              <img alt="Alex Morgan" className="w-9 h-9 rounded-full object-cover border border-primary-container/40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUSIgpCBPVtuSIXUimp4DPRRjPbXTHMJTssXB3rbmw7jD_Fgb9FLL2e57bQsZewSeCeg2-Z67A6Pi_ne52OSx8mmnoXZs_WTq5fisT_CHunGflv2Jdz7vA61335wRsd3iLOLIBcgIDD3gBLVqQJKGXdiO_s-hXs95Si-y1eqfgtC0A1SA6vAieSX4AJY1AQfcKZST6gYEs8avrTeMi_4qGcOxKcKzi3JfHaHQFja8QfhLR7x4D-elHqQ"/>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-primary-container shadow-[0_0_6px_#00ff87]"></span>
            </div>
            <div className="hidden xl:flex flex-col text-left">
              <span className="font-body-sm text-body-sm font-semibold text-text-primary leading-tight">Alex Morgan</span>
              <span className="font-label-caps text-[10px] text-primary-fixed-dim uppercase tracking-wider">PRO Member</span>
            </div>
          </div>

          {/* Start Workout CTA */}
          <button 
            onClick={onStartWorkout}
            className="flex items-center gap-space-xs px-space-md py-space-xs bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold rounded-xl shadow-[0_0_20px_rgba(0,255,135,0.4)] hover:shadow-[0_0_28px_rgba(0,255,135,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all" 
            type="button"
          >
            <Play size={16} fill="currentColor" />
            <span className="hidden sm:inline">Start Workout</span>
          </button>

          {/* Mobile Menu Drawer Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-low border border-border-subtle text-text-primary"
          >
            <Menu size={22} />
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-elevated/95 backdrop-blur-2xl border-b border-border-subtle px-margin-mobile py-space-md space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  setMobileOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium flex items-center gap-3 ${
                  isActive
                    ? 'bg-surface-container text-primary-container font-bold'
                    : 'text-text-secondary hover:bg-surface-container'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
