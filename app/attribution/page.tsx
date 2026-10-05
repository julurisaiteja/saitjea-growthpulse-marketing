"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">GrowthPulse</p>
        <h1>Attribution</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="stat-cards">
          <div className="stat-card"><h3>Last click</h3><b>41%</b><Meter value={41}/></div>
          <div className="stat-card"><h3>Data-driven</h3><b>33%</b><Meter value={33}/></div>
          <div className="stat-card"><h3>View-through</h3><b>12%</b><Meter value={12}/><p className="stencil">Inflated — annotate</p></div>
        </div><div className="grid-2"><section className="panel"><h2>Trend</h2><TrendArea/></section><section className="panel"><h2>Mix</h2><MixPie/></section></div><section className="panel"><h2>Breakdown</h2><MixBars/></section>
    </div>
  );
}
