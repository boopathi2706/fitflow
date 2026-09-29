import React from 'react';
import { Bolt, ArrowRight, Check, Dumbbell, Calculator, Smartphone } from 'lucide-react';

export default function DashboardView({ setActiveView, onOpenCheckout }) {
  return (
    <div className="w-full flex-1 flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden px-margin-mobile md:px-margin-desktop py-space-xl lg:py-space-3xl">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-secondary-container/10 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          
          {/* Left Manifesto */}
          <div className="lg:col-span-7 flex flex-col space-y-space-lg relative z-10">
            <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container border border-border-subtle shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-primary-container shadow-[0_0_8px_#00ff87]"></span>
              <span className="font-label-caps text-label-caps text-text-primary uppercase tracking-widest">FITFLOW OS 2.4 Active</span>
              <span className="text-text-muted text-[10px]">•</span>
              <span className="font-label-caps text-label-caps text-primary-fixed-dim">Engineered for Peak Vitals</span>
            </div>
            
            <div className="space-y-space-xs">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-text-primary uppercase font-extrabold tracking-tight">
                Train Smarter.<br/>
                <span className="bg-gradient-to-r from-primary-container via-secondary-container to-primary-fixed-dim bg-clip-text text-transparent">Track Better.</span><br/>
                Become Stronger.
              </h1>
              <p className="font-body-lg text-body-lg text-text-secondary max-w-xl leading-relaxed pt-space-xs">
                Your complete fitness platform for personalized workouts, nutrition tracking, progress analytics, and daily biometric motivation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <button 
                onClick={onOpenCheckout}
                className="px-space-xl py-space-md bg-primary-container text-on-primary-container font-headline-sm text-body-md font-bold rounded-xl shadow-[0_0_28px_rgba(0,255,135,0.45)] hover:shadow-[0_0_36px_rgba(0,255,135,0.7)] hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center gap-space-xs" 
                type="button"
              >
                <span>Start Your Journey</span>
                <Bolt size={20} />
              </button>
              <button 
                onClick={() => setActiveView('exercises')}
                className="px-space-lg py-space-md bg-surface-container border border-border-subtle text-text-primary hover:text-primary-container font-headline-sm text-body-md font-semibold rounded-xl shadow-md transition-all flex items-center gap-space-xs" 
                type="button"
              >
                <span>Explore Workouts</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Micro Telemetry Tickers */}
            <div className="pt-space-md grid grid-cols-3 gap-space-md max-w-lg">
              <div className="p-space-sm rounded-xl bg-surface-container-low/70 border border-border-subtle shadow-sm backdrop-blur-md">
                <span className="font-label-caps text-label-caps text-text-muted uppercase block">Active Athletes</span>
                <span className="font-metric-display text-headline-sm text-text-primary">48.2k<span className="text-primary-container font-label-caps text-label-caps ml-1">+14%</span></span>
              </div>
              <div className="p-space-sm rounded-xl bg-surface-container-low/70 border border-border-subtle shadow-sm backdrop-blur-md">
                <span className="font-label-caps text-label-caps text-text-muted uppercase block">Logged Sets</span>
                <span className="font-metric-display text-headline-sm text-text-primary">1.8M<span className="text-secondary-container font-label-caps text-label-caps ml-1">Live</span></span>
              </div>
              <div className="p-space-sm rounded-xl bg-surface-container-low/70 border border-border-subtle shadow-sm backdrop-blur-md">
                <span className="font-label-caps text-label-caps text-text-muted uppercase block">Success Rate</span>
                <span className="font-metric-display text-headline-sm text-text-primary">99.4%</span>
              </div>
            </div>
          </div>

          {/* Right Column Floating Showcase Stage */}
          <div className="lg:col-span-5 relative mt-space-xl lg:mt-0">
            <div className="relative w-full rounded-2xl bg-surface-card/80 border border-border-subtle p-space-lg shadow-2xl backdrop-blur-xl">
              
              <div className="relative w-full h-[360px] rounded-xl overflow-hidden shadow-inner">
                <img className="w-full h-full object-cover" alt="Athletic training" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSV97ATEogNdXLRPYMwrBCxTxVC_SmjpmGn0IUfMYsp1mF9It0ZXbgkYq0tWbmMMLuYAFfZGOXfEz3eWJfBKyG3jGrls0NMlTDi74EUkUJJKx-sEKRUq9h63tAN1sCVmTu2tkEtPLTW07IB9w_ZKM9CTLmB16N7r2PkcvtG82vFjFcb_yVHQKTKuoihMDfkGq2KIJTbHCkaj-C07BJ-zpLdBGpZUSvS1hPN6eNzUaeGI_5IsyswpNldw"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/30 to-transparent"></div>
                <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
                  <div>
                    <span className="font-label-caps text-label-caps text-primary-container uppercase px-2 py-0.5 rounded bg-surface-base/80 backdrop-blur-md">Live Session Sync</span>
                    <p className="font-headline-md text-headline-sm text-text-primary font-bold mt-1">Hypertrophy Block A</p>
                    <p className="font-body-sm text-body-sm text-text-secondary">Connected: Polar H10 Monitor</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-danger/20 backdrop-blur-md text-accent-danger font-label-caps text-label-caps font-bold border border-accent-danger/30">
                    <span className="w-2 h-2 rounded-full bg-accent-danger animate-ping"></span>
                    <span>REC</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -top-6 -left-6 max-w-[260px] p-space-sm rounded-xl bg-surface-elevated/90 border border-border-subtle shadow-xl backdrop-blur-xl flex items-center gap-space-sm transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined text-[24px]">fitness_center</span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-text-muted uppercase block">Scheduled Now</span>
                  <p className="font-headline-sm text-body-sm font-bold text-text-primary">Chest & Triceps</p>
                  <span className="font-label-data text-label-data text-primary-fixed-dim">42m Est. • 8 Moves</span>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-6 -left-4 p-space-sm rounded-xl bg-surface-elevated/95 border border-border-subtle shadow-xl backdrop-blur-xl flex items-center gap-space-sm transform rotate-2 hover:rotate-0 transition-transform">
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                    <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="78, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                  </svg>
                  <span className="absolute font-headline-sm text-[12px] font-bold text-text-primary">78%</span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-text-muted uppercase block">Daily Target</span>
                  <span className="font-body-sm text-body-sm font-semibold text-text-primary">Caloric Ceiling</span>
                  <span className="font-label-data text-label-data text-text-secondary block">1,840 / 2,400 kcal</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURE MODULES BENTO GRID */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-space-xl bg-surface-container-lowest/40 border-t border-border-subtle">
        <div className="max-w-[1440px] mx-auto space-y-space-xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider block">Unified Ecosystem</span>
              <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold mt-1">Built for Complete Fitness Mastery</h2>
            </div>
            <p className="font-body-md text-text-secondary max-w-md">Seamlessly switch between exercise selection, precision macro logs, live telemetry, and mobile synchronization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            
            <div onClick={() => setActiveView('exercises')} className="cursor-pointer group p-space-lg rounded-2xl bg-surface-card border border-border-subtle hover:border-primary-container/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(0,255,135,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center text-primary-container mb-space-md group-hover:scale-110 transition-transform">
                  <Dumbbell size={24} />
                </div>
                <h3 className="font-headline-md text-headline-sm text-text-primary font-bold">400+ Exercise Library</h3>
                <p className="font-body-sm text-text-secondary mt-space-xs leading-relaxed">Comprehensive movement database with muscle targeted cues, velocity ratings, and biomechanics guides.</p>
              </div>
              <div className="mt-space-lg flex items-center text-primary-fixed-dim font-headline-sm text-body-sm font-semibold gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Movements</span>
                <ArrowRight size={16} />
              </div>
            </div>

            <div onClick={() => setActiveView('nutrition')} className="cursor-pointer group p-space-lg rounded-2xl bg-surface-card border border-border-subtle hover:border-secondary-container/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-container/10 border border-secondary-container/20 flex items-center justify-center text-secondary-container mb-space-md group-hover:scale-110 transition-transform">
                  <Calculator size={24} />
                </div>
                <h3 className="font-headline-md text-headline-sm text-text-primary font-bold">Nutrition & BMI Health Engine</h3>
                <p className="font-body-sm text-text-secondary mt-space-xs leading-relaxed">Interactive BMI & BMR calculator with real-time radial meters, macro target split, and meal logging simulation.</p>
              </div>
              <div className="mt-space-lg flex items-center text-secondary-fixed-dim font-headline-sm text-body-sm font-semibold gap-1 group-hover:translate-x-1 transition-transform">
                <span>Calculate & Track</span>
                <ArrowRight size={16} />
              </div>
            </div>

            <div onClick={() => setActiveView('mobile')} className="cursor-pointer group p-space-lg rounded-2xl bg-surface-card border border-border-subtle hover:border-tertiary-fixed-dim/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,224,141,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed-dim/10 border border-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed-dim mb-space-md group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h3 className="font-headline-md text-headline-sm text-text-primary font-bold">Mobile App & Wearable Sync</h3>
                <p className="font-body-sm text-text-secondary mt-space-xs leading-relaxed">Interactive iOS & Android app showcase featuring 120 FPS React Native UI animations and Apple Watch sync.</p>
              </div>
              <div className="mt-space-lg flex items-center text-tertiary-fixed-dim font-headline-sm text-body-sm font-semibold gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Mobile Showcase</span>
                <ArrowRight size={16} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-space-2xl bg-surface-base">
        <div className="max-w-[1440px] mx-auto space-y-space-xl text-center">
          <div className="max-w-2xl mx-auto space-y-space-xs">
            <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">Flexible Access</span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-lg text-text-primary font-extrabold">Choose Your Training Tier</h2>
            <p className="font-body-md text-text-secondary">Unlock premium biomechanics, unlimited macro logging, and live trainer telemetry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg pt-space-md text-left">
            
            <div className="p-space-lg rounded-2xl bg-surface-card border border-border-subtle flex flex-col justify-between hover:border-surface-container-highest transition-all">
              <div>
                <span className="font-label-caps text-label-caps text-text-muted uppercase">Starter Plan</span>
                <h3 className="font-headline-md text-headline-md font-bold text-text-primary mt-1">Free Tier</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display-hero text-metric-display font-extrabold text-text-primary">$0</span>
                  <span className="font-body-sm text-text-muted">/ forever</span>
                </div>
                <ul className="mt-6 space-y-3 font-body-sm text-text-secondary">
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-container" /> Access to 50 basic exercises</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-container" /> Standard BMI calculator</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-container" /> Mobile App view access</li>
                </ul>
              </div>
              <button onClick={onOpenCheckout} className="w-full mt-8 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary hover:bg-surface-container-high font-headline-sm text-body-sm font-semibold transition-all">
                Select Free
              </button>
            </div>

            <div className="relative p-space-lg rounded-2xl bg-surface-card border-2 border-primary-container shadow-[0_0_32px_rgba(0,255,135,0.2)] flex flex-col justify-between transform md:-translate-y-2">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-caps text-[10px] font-bold uppercase tracking-wider shadow-[0_0_12px_#00ff87]">
                Most Popular
              </span>
              <div>
                <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase">Athlete Tier</span>
                <h3 className="font-headline-md text-headline-md font-bold text-text-primary mt-1">Pro Performance</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display-hero text-metric-display font-extrabold text-text-primary">$19</span>
                  <span className="font-body-sm text-text-muted">/ month</span>
                </div>
                <ul className="mt-6 space-y-3 font-body-sm text-text-secondary">
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-container" /> Full 400+ Exercise Library</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-container" /> Precision Macro & Meal Simulator</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-container" /> 120 FPS React Native Mobile Sync</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-container" /> Wearable Live HR Telemetry</li>
                </ul>
              </div>
              <button onClick={onOpenCheckout} className="w-full mt-8 py-3 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-[0_0_20px_rgba(0,255,135,0.4)] hover:shadow-[0_0_28px_rgba(0,255,135,0.6)] transition-all">
                Get Started Pro
              </button>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-card border border-border-subtle flex flex-col justify-between hover:border-surface-container-highest transition-all">
              <div>
                <span className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase">Enterprise Tier</span>
                <h3 className="font-headline-md text-headline-md font-bold text-text-primary mt-1">Coach & Gym Suite</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display-hero text-metric-display font-extrabold text-text-primary">$49</span>
                  <span className="font-body-sm text-text-muted">/ month</span>
                </div>
                <ul className="mt-6 space-y-3 font-body-sm text-text-secondary">
                  <li className="flex items-center gap-2"><Check size={16} className="text-secondary-container" /> Complete Admin Portal & Roster</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-secondary-container" /> Unlimited Athlete Profiles</li>
                  <li class="flex items-center gap-2"><Check size={16} className="text-secondary-container" /> Custom Routine Builder</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-secondary-container" /> Priority Biomechanical API</li>
                </ul>
              </div>
              <button onClick={onOpenCheckout} className="w-full mt-8 py-3 rounded-xl bg-surface-container border border-border-subtle text-text-primary hover:bg-surface-container-high font-headline-sm text-body-sm font-semibold transition-all">
                Select Enterprise
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
