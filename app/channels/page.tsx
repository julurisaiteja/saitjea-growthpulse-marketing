"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">GrowthPulse</p>
        <h1>Channels</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="rail-progress">
          {[["Meta",62],["Google",88],["Email",94],["TikTok",55],["LinkedIn",70]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}</span></div>)}
        </div>
    </div>
  );
}
