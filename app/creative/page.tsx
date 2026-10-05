"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">GrowthPulse</p>
        <h1>Creative</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"asset":"UGC-A hook","freq":"4.2","ctr":"1.1%","status":"Fatigue"},{"asset":"UGC-C batch","freq":"0.4","ctr":"—","status":"Ready"},{"asset":"Search RSA 3","freq":"2.1","ctr":"6.4%","status":"Healthy"},{"asset":"Static Lifestyle","freq":"3.6","ctr":"0.8%","status":"Watch"}]} columns={[{"key":"asset","label":"Asset"},{"key":"freq","label":"Freq"},{"key":"ctr","label":"CTR"},{"key":"status","label":"Status"}]} searchKeys={["asset","freq","ctr","status"]} />
</section>
    </div>
  );
}
