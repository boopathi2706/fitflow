import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    alert('Membership Activated! Welcome to FitFlow PRO Athlete Tier.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-margin-mobile">
      <div className="w-full max-w-md rounded-2xl bg-surface-card border border-border-subtle p-space-xl shadow-2xl space-y-space-md text-center">
        <div className="w-12 h-12 rounded-2xl bg-primary-container/20 text-primary-container flex items-center justify-center mx-auto">
          <ShieldCheck size={32} />
        </div>
        <h3 className="font-headline-md text-headline-md font-bold text-text-primary">Activate FitFlow Membership</h3>
        <p className="font-body-sm text-text-secondary">Simulated instant plan activation for FitFlow showcase. No actual payment card required.</p>
        
        <div className="bg-surface-container p-space-md rounded-xl text-left border border-border-subtle space-y-2 font-label-data text-body-sm">
          <div className="flex justify-between">
            <span>Selected Plan:</span>
            <span className="font-bold text-primary-container">PRO Athlete Tier</span>
          </div>
          <div className="flex justify-between">
            <span>Billing Cycle:</span>
            <span>Monthly ($19.00)</span>
          </div>
          <div className="flex justify-between border-t border-border-subtle pt-2">
            <span>Total Today:</span>
            <span className="font-bold text-text-primary">$0.00 (Demo Mode)</span>
          </div>
        </div>

        <button 
          onClick={handleConfirm} 
          className="w-full py-3 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-lg hover:shadow-[0_0_24px_rgba(0,255,135,0.4)] transition-all"
        >
          Confirm & Unlock All Features
        </button>
        <button onClick={onClose} className="w-full py-2 text-text-muted hover:text-text-primary text-body-sm">
          Cancel
        </button>
      </div>
    </div>
  );
}
