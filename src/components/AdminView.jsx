import React from 'react';

export default function AdminView() {
  return (
    <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-space-xl space-y-space-2xl w-full">
      
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
        <div>
          <span className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-wider block">Trainer Portal</span>
          <h1 className="font-headline-lg text-headline-lg md:text-display-hero text-text-primary font-bold tracking-tight">Admin & Athlete Roster</h1>
          <p className="font-body-lg text-text-secondary mt-1">Manage active gym memberships, system telemetry, and athlete compliance scores.</p>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="px-space-md py-2 rounded-xl bg-surface-container border border-border-subtle font-label-data text-label-data text-primary-container flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
            Server Status: 99.99% Operational
          </span>
        </div>
      </div>

      {/* Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <div className="p-space-lg rounded-2xl bg-surface-card border border-border-subtle shadow-lg">
          <span className="font-label-caps text-label-caps text-text-muted uppercase">Total Members</span>
          <span className="font-metric-display text-headline-md font-bold text-text-primary block mt-1">1,248</span>
          <span className="font-label-caps text-[10px] text-primary-fixed-dim mt-2 block">+12 this week</span>
        </div>

        <div className="p-space-lg rounded-2xl bg-surface-card border border-border-subtle shadow-lg">
          <span className="font-label-caps text-label-caps text-text-muted uppercase">Active Workouts Today</span>
          <span className="font-metric-display text-headline-md font-bold text-text-primary block mt-1">342</span>
          <span className="font-label-caps text-[10px] text-secondary-container mt-2 block">88 live right now</span>
        </div>

        <div className="p-space-lg rounded-2xl bg-surface-card border border-border-subtle shadow-lg">
          <span className="font-label-caps text-label-caps text-text-muted uppercase">Avg Adherence Rate</span>
          <span className="font-metric-display text-headline-md font-bold text-text-primary block mt-1">94.8%</span>
          <span className="font-label-caps text-[10px] text-primary-fixed-dim mt-2 block">High compliance</span>
        </div>

        <div className="p-space-lg rounded-2xl bg-surface-card border border-border-subtle shadow-lg">
          <span className="font-label-caps text-label-caps text-text-muted uppercase">Biometric Band Sync</span>
          <span className="font-metric-display text-headline-md font-bold text-text-primary block mt-1">912</span>
          <span className="font-label-caps text-[10px] text-tertiary-fixed-dim mt-2 block">Devices active</span>
        </div>
      </div>

      {/* Athlete Roster Table */}
      <div className="p-space-lg rounded-2xl bg-surface-card border border-border-subtle shadow-xl overflow-x-auto">
        <h3 className="font-headline-md text-headline-sm font-bold text-text-primary mb-space-md">Active Athletes Roster</h3>
        <table className="w-full text-left font-body-sm text-text-secondary min-w-[700px]">
          <thead className="font-label-caps text-label-caps text-text-muted uppercase border-b border-border-subtle pb-2">
            <tr>
              <th className="py-3 px-4">Athlete</th>
              <th className="py-3 px-4">Tier</th>
              <th className="py-3 px-4">Last Active</th>
              <th className="py-3 px-4">Weekly Sets</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle font-label-data">
            <tr>
              <td className="py-4 px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center">AM</div>
                <span className="font-semibold text-text-primary">Alex Morgan</span>
              </td>
              <td className="py-4 px-4 text-primary-fixed-dim">PRO Athlete</td>
              <td className="py-4 px-4">2 minutes ago</td>
              <td className="py-4 px-4">48 sets</td>
              <td className="py-4 px-4"><span className="px-2 py-1 rounded-full bg-primary-container/10 text-primary-container font-bold text-[10px]">Training Now</span></td>
            </tr>
            <tr>
              <td className="py-4 px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-container/20 text-secondary-container font-bold flex items-center justify-center">JB</div>
                <span className="font-semibold text-text-primary">Jordan Bennett</span>
              </td>
              <td className="py-4 px-4 text-secondary-fixed-dim">Elite Tier</td>
              <td className="py-4 px-4">1 hour ago</td>
              <td className="py-4 px-4">52 sets</td>
              <td className="py-4 px-4"><span className="px-2 py-1 rounded-full bg-surface-container text-text-muted font-bold text-[10px]">Rest Day</span></td>
            </tr>
            <tr>
              <td className="py-4 px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim font-bold flex items-center justify-center">SK</div>
                <span className="font-semibold text-text-primary">Sarah Chen</span>
              </td>
              <td className="py-4 px-4 text-tertiary-fixed-dim">PRO Athlete</td>
              <td className="py-4 px-4">3 hours ago</td>
              <td className="py-4 px-4">36 sets</td>
              <td className="py-4 px-4"><span className="px-2 py-1 rounded-full bg-surface-container text-text-muted font-bold text-[10px]">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
