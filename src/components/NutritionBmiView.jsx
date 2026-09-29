import React, { useState } from 'react';
import { PlusCircle, Flame, Droplets } from 'lucide-react';

export default function NutritionBmiView({ loggedCalories, protein, onOpenMealModal }) {
  const [height, setHeight] = useState(178);
  const [weight, setWeight] = useState(76);
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState('male');

  const targetCalories = 2400;
  const targetProtein = 190;

  // BMI calculation
  const hM = height / 100;
  const bmi = (hM > 0 && weight > 0) ? (weight / (hM * hM)).toFixed(1) : 24.0;
  
  let statusText = 'Optimal Normal Weight';
  let statusBg = 'bg-primary-container/20 text-primary-container border-primary-container/30';
  let pinPct = Math.max(5, Math.min(95, ((bmi - 15) / (35 - 15)) * 100));

  if (bmi < 18.5) {
    statusText = 'Underweight';
    statusBg = 'bg-secondary-container/20 text-secondary-container border-secondary-container/30';
  } else if (bmi >= 18.5 && bmi < 25) {
    statusText = 'Optimal Normal Weight';
    statusBg = 'bg-primary-container/20 text-primary-container border-primary-container/30';
  } else if (bmi >= 25 && bmi < 30) {
    statusText = 'Overweight';
    statusBg = 'bg-accent-warning/20 text-accent-warning border-accent-warning/30';
  } else {
    statusText = 'Obese Class I';
    statusBg = 'bg-accent-danger/20 text-accent-danger border-accent-danger/30';
  }

  // BMR Mifflin-St Jeor
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  bmr = gender === 'male' ? Math.round(bmr + 5) : Math.round(bmr - 161);
  const tdee = Math.round(bmr * 1.55);

  const calPct = Math.min(100, Math.round((loggedCalories / targetCalories) * 100));
  const strokeOffset = 427.25 * (1 - Math.min(1, loggedCalories / targetCalories));

  return (
    <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-space-xl space-y-space-2xl w-full">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
        <div className="space-y-space-xs max-w-3xl">
          <div className="flex items-center gap-space-xs">
            <span className="px-space-xs py-0.5 rounded-full bg-surface-container font-label-caps text-label-caps text-primary-fixed-dim border border-border-subtle uppercase">Metabolic Intelligence</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-text-muted">LIVE SYNCED</span>
          </div>
          <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-text-primary font-extrabold tracking-tight">
            Nutrition & Health Analytics
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
            Fuel your athletic performance with interactive BMI/BMR calculation, macronutrient targets, and meal log tracking.
          </p>
        </div>

        <button onClick={onOpenMealModal} className="flex items-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary-container rounded-xl font-headline-sm text-body-sm font-bold shadow-[0_0_24px_rgba(0,255,135,0.4)] hover:shadow-[0_0_32px_rgba(0,255,135,0.65)] transition-all shrink-0" type="button">
          <PlusCircle size={20} />
          <span>+ Log Meal / Food</span>
        </button>
      </div>

      {/* Macro Budget & Calorie Meter Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-stretch">
        
        {/* Radial Calorie Card */}
        <div className="lg:col-span-5 bg-surface-card rounded-2xl p-space-lg border border-border-subtle flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-space-md">
            <div>
              <span className="font-label-caps text-label-caps text-text-muted uppercase block">Daily Energy Budget</span>
              <h2 className="font-headline-md text-headline-md text-text-primary font-bold">Caloric Velocity</h2>
            </div>
            <span className="flex items-center gap-1 font-label-data text-label-data bg-surface-container px-space-xs py-1 rounded-lg text-primary-fixed-dim border border-border-subtle">
              <Flame size={14} /> {calPct}% BURNED
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-xl py-space-md">
            <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
                <circle className="text-surface-container-highest" cx="80" cy="80" fill="none" r="68" stroke="currentColor" strokeWidth="12"></circle>
                <circle className="transition-all duration-700 ease-out" cx="80" cy="80" fill="none" r="68" stroke="#00FF87" strokeDasharray="427.25" strokeDashoffset={strokeOffset} strokeLinecap="round" strokeWidth="12"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-display-hero text-metric-display font-extrabold text-text-primary tracking-tight leading-none">{loggedCalories.toLocaleString()}</span>
                <span className="font-label-data text-label-data text-text-secondary uppercase mt-1">/ {targetCalories.toLocaleString()} kcal</span>
                <span className="font-label-caps text-[10px] text-primary-fixed-dim bg-primary-fixed-dim/10 px-2 py-0.5 rounded-full mt-2 border border-primary-fixed-dim/30">
                  {Math.max(0, targetCalories - loggedCalories).toLocaleString()} kcal left
                </span>
              </div>
            </div>

            <div className="space-y-space-sm w-full sm:w-auto">
              <div className="bg-surface-container p-space-sm rounded-xl border border-border-subtle">
                <span className="font-label-caps text-label-caps text-text-muted block">Active Burn</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline-sm text-headline-sm font-bold text-text-primary">640</span>
                  <span className="font-label-data text-[11px] text-text-muted">kcal synced</span>
                </div>
              </div>
              <div className="bg-surface-container p-space-sm rounded-xl border border-border-subtle">
                <span className="font-label-caps text-label-caps text-text-muted block">Estimated BMR</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed-dim">{bmr.toLocaleString()}</span>
                  <span className="font-label-data text-[11px] text-text-muted">kcal/day</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-space-md bg-surface-container/40 p-space-sm rounded-xl flex items-center justify-between border border-border-subtle">
            <span className="font-body-sm text-text-secondary flex items-center gap-1.5"><Droplets size={16} className="text-primary-container"/> Water Intake Today</span>
            <span className="font-label-data text-label-data font-bold text-primary-container">2.8 / 3.5 Liters</span>
          </div>
        </div>

        {/* Macros Progress Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-space-md">
          
          <div className="bg-surface-card rounded-2xl p-space-lg border border-border-subtle flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary-container text-[20px]">fitness_center</span>
                <h3 className="font-headline-sm text-body-md font-bold text-text-primary">Protein</h3>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-headline-lg text-headline-sm font-bold text-text-primary">{protein}g</span>
                <span className="font-label-data text-[11px] text-text-muted">/ {targetProtein}g</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, Math.round((protein / targetProtein) * 100))}%` }}></div>
              </div>
            </div>
            <span className="font-label-caps text-[10px] text-primary-fixed-dim mt-4">
              {Math.min(100, Math.round((protein / targetProtein) * 100))}% Target Met
            </span>
          </div>

          <div className="bg-surface-card rounded-2xl p-space-lg border border-border-subtle flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary-container text-[20px]">grain</span>
                <h3 className="font-headline-sm text-body-md font-bold text-text-primary">Carbohydrates</h3>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-headline-lg text-headline-sm font-bold text-text-primary">210g</span>
                <span className="font-label-data text-[11px] text-text-muted">/ 260g</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-secondary-container h-full rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
              </div>
            </div>
            <span className="font-label-caps text-[10px] text-secondary-fixed-dim mt-4">80% Target Met</span>
          </div>

          <div className="bg-surface-card rounded-2xl p-space-lg border border-border-subtle flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">oil_barrel</span>
                <h3 className="font-headline-sm text-body-md font-bold text-text-primary">Healthy Fats</h3>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-headline-lg text-headline-sm font-bold text-text-primary">54g</span>
                <span className="font-label-data text-[11px] text-text-muted">/ 70g</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-tertiary-fixed-dim h-full rounded-full transition-all duration-500" style={{ width: '77%' }}></div>
              </div>
            </div>
            <span className="font-label-caps text-[10px] text-tertiary-fixed-dim mt-4">77% Target Met</span>
          </div>

        </div>

      </div>

      {/* INTERACTIVE BMI & BMR CALCULATOR */}
      <div className="p-space-xl rounded-2xl bg-surface-card border border-border-subtle shadow-2xl">
        <div className="max-w-xl mb-space-lg">
          <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider block">Interactive Biometrics</span>
          <h2 className="font-headline-lg text-headline-lg font-bold text-text-primary mt-1">BMI & BMR Health Calculator</h2>
          <p className="font-body-md text-text-secondary mt-1">Calculate your Body Mass Index (BMI) and Basal Metabolic Rate (BMR) with instant visual telemetry analysis.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          
          <div className="lg:col-span-6 space-y-space-md">
            <div className="grid grid-cols-2 gap-space-md">
              <div>
                <label className="font-label-caps text-label-caps text-text-muted uppercase block mb-1">Height (cm)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                  min="100" max="230" 
                  className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary font-headline-sm font-bold focus:outline-none focus:border-primary-container"
                />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-text-muted uppercase block mb-1">Weight (kg)</label>
                <input 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  min="30" max="250" 
                  className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary font-headline-sm font-bold focus:outline-none focus:border-primary-container"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-space-md">
              <div>
                <label className="font-label-caps text-label-caps text-text-muted uppercase block mb-1">Age (years)</label>
                <input 
                  type="number" 
                  value={age} 
                  onChange={(e) => setAge(parseFloat(e.target.value) || 0)}
                  min="15" max="90" 
                  className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary font-headline-sm font-bold focus:outline-none focus:border-primary-container"
                />
              </div>
              <div>
                <label className="font-label-caps text-label-caps text-text-muted uppercase block mb-1">Biological Gender</label>
                <select 
                  value={gender} 
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary font-body-md font-semibold focus:outline-none focus:border-primary-container"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-space-lg rounded-xl bg-surface-container/60 border border-border-subtle flex flex-col items-center text-center">
            <span className="font-label-caps text-label-caps text-text-muted uppercase">Computed Biometric Result</span>
            
            <div className="my-4 flex flex-col items-center">
              <span className="font-display-hero text-[56px] font-extrabold text-primary-container leading-none">{bmi}</span>
              <span className={`mt-2 px-3 py-1 rounded-full font-label-caps text-label-caps font-bold border ${statusBg}`}>
                {statusText}
              </span>
            </div>

            <div className="w-full max-w-sm mt-2">
              <div className="h-3 w-full rounded-full bg-gradient-to-r from-secondary-container via-primary-container to-accent-danger relative overflow-hidden">
                <div className="absolute top-0 bottom-0 w-1 bg-text-primary rounded-full shadow-[0_0_8px_#ffffff] transition-all duration-300" style={{ left: `${pinPct}%` }}></div>
              </div>
              <div className="flex justify-between font-label-caps text-[10px] text-text-muted mt-1">
                <span>Underweight (&lt;18.5)</span>
                <span>Normal (18.5-24.9)</span>
                <span>Overweight (&gt;25)</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle w-full flex justify-around">
              <div>
                <span className="font-label-caps text-[10px] text-text-muted block">ESTIMATED BMR</span>
                <span className="font-headline-sm font-bold text-text-primary">{bmr.toLocaleString()} kcal</span>
              </div>
              <div>
                <span class="font-label-caps text-[10px] text-text-muted block">TDEE (MODERATE)</span>
                <span className="font-headline-sm font-bold text-secondary-fixed-dim">{tdee.toLocaleString()} kcal</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
