import React, { useState } from 'react';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import ExerciseLibraryView from './components/ExerciseLibraryView';
import NutritionBmiView from './components/NutritionBmiView';
import MobileAppView from './components/MobileAppView';
import AdminView from './components/AdminView';
import WorkoutModal from './components/WorkoutModal';
import MealModal from './components/MealModal';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [workoutModalOpen, setWorkoutModalOpen] = useState(false);
  const [mealModalOpen, setMealModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const [loggedCalories, setLoggedCalories] = useState(1840);
  const [protein, setProtein] = useState(165);

  const handleAddMeal = (cal, prot) => {
    setLoggedCalories((prev) => prev + cal);
    setProtein((prev) => prev + prot);
  };

  return (
    <div className="min-h-screen bg-surface-base text-on-surface font-body-md flex flex-col selection:bg-primary-container selection:text-on-primary">
      {/* Top Navigation Header */}
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView}
        onStartWorkout={() => setWorkoutModalOpen(true)}
      />

      {/* Main Views Container */}
      <main className="w-full pt-20 flex-1 flex flex-col">
        {activeView === 'dashboard' && (
          <DashboardView 
            setActiveView={setActiveView}
            onOpenCheckout={() => setCheckoutModalOpen(true)}
          />
        )}
        {activeView === 'exercises' && <ExerciseLibraryView />}
        {activeView === 'nutrition' && (
          <NutritionBmiView 
            loggedCalories={loggedCalories}
            protein={protein}
            onOpenMealModal={() => setMealModalOpen(true)}
          />
        )}
        {activeView === 'mobile' && <MobileAppView />}
        {activeView === 'admin' && <AdminView />}
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-border-subtle py-space-xl px-margin-mobile md:px-margin-desktop text-text-muted font-body-sm mt-auto">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-body-md font-bold text-text-primary uppercase">FITFLOW</span>
            <span>• React Fitness Platform Showcase</span>
          </div>
          <p className="text-[12px] font-label-caps">© 2026 FitFlow Fitness Platform. Pure Client-Side Architecture.</p>
        </div>
      </footer>

      {/* Modals */}
      <WorkoutModal 
        isOpen={workoutModalOpen} 
        onClose={() => setWorkoutModalOpen(false)} 
      />
      <MealModal 
        isOpen={mealModalOpen} 
        onClose={() => setMealModalOpen(false)} 
        onAddMeal={handleAddMeal}
      />
      <CheckoutModal 
        isOpen={checkoutModalOpen} 
        onClose={() => setCheckoutModalOpen(false)} 
      />
    </div>
  );
}
