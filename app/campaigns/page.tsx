"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">GrowthPulse</p>
        <h1>Campaigns</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"campaign":"Spring Launch","channel":"Meta","roas":"2.1x","status":"Fatigue"},{"campaign":"Brand Search","channel":"Google","roas":"6.1x","status":"Scaling"},{"campaign":"Lifecycle Winback","channel":"Email","roas":"9.4x","status":"Healthy"},{"campaign":"UGC Prospect","channel":"TikTok","roas":"2.6x","status":"Test"},{"campaign":"Display Conquest","channel":"Google","roas":"1.5x","status":"Fatigue"}]} columns={[{"key":"campaign","label":"Campaign"},{"key":"channel","label":"Channel"},{"key":"roas","label":"ROAS"},{"key":"status","label":"Status"}]} searchKeys={["campaign","channel","roas","status"]} />
</section>
    </div>
  );
}
