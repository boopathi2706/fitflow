import React, { useState } from 'react';
import { Utensils, X } from 'lucide-react';

export default function MealModal({ isOpen, onClose, onAddMeal }) {
  const [name, setName] = useState('');
  const [cal, setCal] = useState(450);
  const [protein, setProtein] = useState(35);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMeal(parseInt(cal) || 0, parseInt(protein) || 0);
    alert(`Logged meal: ${name || 'Meal'} (+${cal} kcal, +${protein}g protein)`);
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-margin-mobile">
      <div className="w-full max-w-lg rounded-2xl bg-surface-card border border-border-subtle p-space-xl shadow-2xl space-y-space-md">
        <div className="flex items-center justify-between border-b border-border-subtle pb-space-sm">
          <div className="flex items-center gap-2">
            <Utensils size={24} className="text-secondary-container" />
            <h3 className="font-headline-md text-headline-sm font-bold text-text-primary">Log Meal / Nutrition</h3>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary"><X size={20}/></button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-space-sm">
          <div>
            <label className="font-label-caps text-label-caps text-text-muted uppercase block mb-1">Meal Title</label>
            <input 
              type="text" 
              placeholder="e.g., Grilled Chicken & Quinoa" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required 
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary font-body-md focus:outline-none focus:border-primary-container"
            />
          </div>

          <div className="grid grid-cols-2 gap-space-md">
            <div>
              <label className="font-label-caps text-label-caps text-text-muted uppercase block mb-1">Calories (kcal)</label>
              <input 
                type="number" 
                value={cal} 
                onChange={(e) => setCal(e.target.value)}
                required 
                className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary font-body-md focus:outline-none focus:border-primary-container"
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-text-muted uppercase block mb-1">Protein (g)</label>
              <input 
                type="number" 
                value={protein} 
                onChange={(e) => setProtein(e.target.value)}
                required 
                className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary font-body-md focus:outline-none focus:border-primary-container"
              />
            </div>
          </div>

          <button type="submit" className="w-full py-3 mt-4 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-lg hover:shadow-[0_0_24px_rgba(0,255,135,0.4)] transition-all">
            + Add to Daily Macro Budget
          </button>
        </form>
      </div>
    </div>
  );
}
