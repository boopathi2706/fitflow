import React, { useState } from 'react';
import { Search, Info, PlusCircle } from 'lucide-react';

const sampleExercises = [
  {
    id: 'ex-1',
    name: 'Barbell Flat Bench Press',
    category: 'chest',
    muscle: 'Pectoralis Major, Triceps',
    equipment: 'Barbell & Bench',
    difficulty: 'Intermediate',
    recruitment: '96%',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
    cue: 'Maintain 45° elbow tuck & keep shoulder blades retracted.'
  },
  {
    id: 'ex-2',
    name: 'Incline Dumbbell Press',
    category: 'chest',
    muscle: 'Upper Clavicular Pectoralis',
    equipment: 'Dumbbells & Incline Bench',
    difficulty: 'Intermediate',
    recruitment: '92%',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
    cue: 'Set incline to 30 degrees for maximum upper chest activation.'
  },
  {
    id: 'ex-3',
    name: 'Weighted Lat Pulldown',
    category: 'back',
    muscle: 'Latissimus Dorsi, Teres Major',
    equipment: 'Cable Machine',
    difficulty: 'Beginner',
    recruitment: '94%',
    img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80',
    cue: 'Drive elbows down towards hips without excessive lumbar arch.'
  },
  {
    id: 'ex-4',
    name: 'Barbell Deadlift',
    category: 'back',
    muscle: 'Posterior Chain, Hamstrings',
    equipment: 'Barbell & Plates',
    difficulty: 'Advanced',
    recruitment: '99%',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    cue: 'Engage lats, wedge hips close to bar, and push floor away.'
  },
  {
    id: 'ex-5',
    name: 'Barbell Back Squat',
    category: 'legs',
    muscle: 'Quadriceps, Gluteus Maximus',
    equipment: 'Squat Rack & Barbell',
    difficulty: 'Advanced',
    recruitment: '98%',
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80',
    cue: 'Keep chest upright, track knees over toes, descend below parallel.'
  },
  {
    id: 'ex-6',
    name: 'Romanian Deadlift',
    category: 'legs',
    muscle: 'Hamstrings & Glutes',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    recruitment: '95%',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    cue: 'Hinge at hips, maintain soft knee bend, feel hamstring stretch.'
  },
  {
    id: 'ex-7',
    name: 'Overhead Dumbbell Press',
    category: 'shoulders',
    muscle: 'Anterior & Lateral Deltoids',
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    recruitment: '91%',
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80',
    cue: 'Press vertically without flaring ribs or arching lower back.'
  },
  {
    id: 'ex-8',
    name: 'EZ-Bar Cable Curl',
    category: 'arms',
    muscle: 'Biceps Brachii',
    equipment: 'Cable Machine & EZ Bar',
    difficulty: 'Beginner',
    recruitment: '89%',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
    cue: 'Keep upper arms pinned to torso and squeeze bicep peak contraction.'
  }
];

export default function ExerciseLibraryView() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCue, setActiveCue] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'chest', label: 'Chest' },
    { id: 'back', label: 'Back' },
    { id: 'legs', label: 'Legs' },
    { id: 'shoulders', label: 'Shoulders' },
    { id: 'arms', label: 'Arms' },
  ];

  const filteredExercises = sampleExercises.filter((ex) => {
    const matchCat = selectedCategory === 'all' || ex.category === selectedCategory;
    const matchSearch =
      ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.muscle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.equipment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-space-xl flex flex-col gap-space-xl">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-surface-container p-space-xl border border-border-subtle shadow-xl">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <div className="flex items-center gap-space-xs">
              <span className="px-space-xs py-0.5 rounded-full bg-surface-container-high text-primary-fixed-dim font-label-caps text-label-caps uppercase tracking-wider flex items-center gap-1.5 border border-border-subtle">
                <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#00ff87]"></span>
                Biomechanics Engine v4.2
              </span>
              <span className="text-text-muted font-label-data text-label-data">/ 420 LOADED MOVEMENTS</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg md:text-display-hero text-text-primary font-bold tracking-tight">
              Explore Exercises & Training Hub
            </h1>
            <p className="font-body-lg text-body-md md:text-body-lg text-text-secondary leading-relaxed">
              Filter over 400+ strength, cardio, and mobility exercises with biomechanical cues, targeted neuromuscular recruitment, and difficulty ratings.
            </p>
          </div>

          <button onClick={() => alert('Custom routine builder initialized!')} className="flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary-container rounded-xl font-headline-sm text-body-md font-bold shadow-[0_0_24px_rgba(0,255,135,0.35)] hover:shadow-[0_0_32px_rgba(0,255,135,0.55)] transition-all shrink-0">
            <PlusCircle size={20} />
            <span>Create Custom Routine</span>
          </button>
        </div>
      </div>

      {/* Search & Category Filters Strip */}
      <div className="flex flex-col gap-space-md">
        
        <div className="relative w-full rounded-2xl bg-surface-container-low p-space-xs border border-border-subtle shadow-md">
          <div className="relative flex items-center w-full">
            <Search size={22} className="absolute left-space-md text-text-muted" />
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-space-md bg-surface-container rounded-xl text-text-primary placeholder:text-text-muted font-body-md focus:outline-none focus:bg-surface-elevated transition-colors border border-border-subtle" 
              placeholder="Search exercises by name, muscle target (e.g. Chest, Quads), or equipment..." 
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-space-md py-space-xs rounded-full font-headline-sm text-body-sm transition-all shrink-0 flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,255,135,0.35)] border-primary-container'
                    : 'bg-surface-container text-text-secondary hover:text-text-primary hover:bg-surface-container-high border-border-subtle'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Exercises Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {filteredExercises.map((ex) => (
          <div key={ex.id} className="group p-space-md rounded-2xl bg-surface-card border border-border-subtle hover:border-primary-container/40 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-space-sm">
                <img src={ex.img} alt={ex.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-surface-base/80 backdrop-blur-md text-primary-fixed-dim font-label-caps text-[10px] font-bold border border-primary-fixed-dim/30">
                  {ex.recruitment} Recruitment
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-text-muted uppercase tracking-wider block">{ex.equipment}</span>
              <h3 className="font-headline-sm text-body-md font-bold text-text-primary mt-0.5">{ex.name}</h3>
              <p className="font-body-sm text-text-secondary text-[13px] mt-1">Target: {ex.muscle}</p>
            </div>
            <div className="mt-space-md pt-space-xs border-t border-border-subtle flex items-center justify-between text-body-sm">
              <span className="px-2 py-0.5 rounded-md bg-surface-container font-label-data text-[11px] text-secondary-fixed-dim">{ex.difficulty}</span>
              <button 
                onClick={() => setActiveCue(activeCue === ex.id ? null : ex.id)}
                className="text-primary-container hover:underline font-semibold font-headline-sm text-[12px] flex items-center gap-1"
              >
                <span>{activeCue === ex.id ? 'Hide Cue' : 'View Cue'}</span>
                <Info size={14} />
              </button>
            </div>

            {activeCue === ex.id && (
              <div className="mt-2 p-2 rounded-lg bg-surface-container/90 border border-primary-container/30 text-[12px] font-body-sm text-primary-fixed-dim animate-in fade-in duration-200">
                💡 {ex.cue}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
