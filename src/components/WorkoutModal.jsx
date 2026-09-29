import React, { useState, useEffect } from 'react';
import { Timer, X, Pause, Play, Check } from 'lucide-react';

export default function WorkoutModal({ isOpen, onClose }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isOpen && isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOpen, isRunning]);

  if (!isOpen) return null;

  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');

  const handleFinish = () => {
    alert(`Great session! Total workout time: ${hrs}:${mins}:${secs}. Telemetry saved.`);
    setSeconds(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-margin-mobile">
      <div className="w-full max-w-lg rounded-2xl bg-surface-card border border-border-subtle p-space-xl shadow-2xl space-y-space-md">
        <div className="flex items-center justify-between border-b border-border-subtle pb-space-sm">
          <div className="flex items-center gap-2">
            <Timer size={24} className="text-primary-container" />
            <h3 className="font-headline-md text-headline-sm font-bold text-text-primary">Active Workout Tracker</h3>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary"><X size={20}/></button>
        </div>

        <div className="py-space-md text-center space-y-3">
          <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-widest block">Hypertrophy Session</span>
          <div className="font-display-hero text-[48px] font-extrabold text-text-primary tracking-tight">
            {hrs}:{mins}:{secs}
          </div>
          <p className="font-body-sm text-text-secondary">Polar H10 Live Heart Rate: <span className="font-bold text-accent-danger">142 BPM</span></p>
        </div>

        <div className="flex items-center gap-space-md">
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className="flex-1 py-3 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-lg hover:shadow-[0_0_24px_rgba(0,255,135,0.4)] transition-all flex items-center justify-center gap-2"
          >
            {isRunning ? <Pause size={18}/> : <Play size={18}/>}
            <span>{isRunning ? 'Pause Workout' : 'Resume Workout'}</span>
          </button>
          <button 
            onClick={handleFinish}
            className="flex-1 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary hover:bg-surface-container-high font-headline-sm text-body-sm font-semibold transition-all flex items-center justify-center gap-2"
          >
            <Check size={18}/>
            <span>Complete & Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
