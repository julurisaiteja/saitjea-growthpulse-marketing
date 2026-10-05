"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"Spend",values:[28.4,30.1,26.8,31.2],suffix:"k"},{label:"Pipeline",values:[190,205,178,212],suffix:"k"},{label:"CAC",values:[84,91,79,88],suffix:""},{label:"ROAS",values:[3.2,2.9,3.5,3],suffix:"x"},{label:"CVR",values:[2.8,2.6,3.1,2.7],suffix:"%"},{label:"Active campaigns",values:[24,26,22,27],suffix:""}];
const ACTIVITY=["CAC +18% social","UGC batch C ready","Email CTR 4.8%","Search brand ROAS 6.1","Annotate attribution"];
const ROWS=[{campaign:"Spring Launch",channel:"Meta",spend:"$8.2k",roas:"2.1x",cvr:"1.9%",status:"Fatigue"},{campaign:"Brand Search",channel:"Google",spend:"$4.1k",roas:"6.1x",cvr:"5.4%",status:"Scaling"},{campaign:"Lifecycle Winback",channel:"Email",spend:"$0.6k",roas:"9.4x",cvr:"8.1%",status:"Healthy"},{campaign:"UGC Prospect",channel:"TikTok",spend:"$5.5k",roas:"2.6x",cvr:"2.2%",status:"Test"},{campaign:"Partner Co-op",channel:"LinkedIn",spend:"$3.0k",roas:"3.3x",cvr:"2.9%",status:"Healthy"},{campaign:"Retarget 30d",channel:"Meta",spend:"$2.8k",roas:"4.0x",cvr:"3.6%",status:"Scaling"},{campaign:"Podcast Net",channel:"Audio",spend:"$1.9k",roas:"1.7x",cvr:"1.1%",status:"Watch"},{campaign:"Influencer Micro",channel:"IG",spend:"$2.2k",roas:"2.4x",cvr:"2.0%",status:"Test"},{campaign:"Webinar Series",channel:"LinkedIn",spend:"$1.4k",roas:"5.2x",cvr:"4.4%",status:"Healthy"},{campaign:"App Install",channel:"ASA",spend:"$3.6k",roas:"2.0x",cvr:"1.6%",status:"Watch"},{campaign:"SMS Flash",channel:"SMS",spend:"$0.4k",roas:"7.8x",cvr:"6.9%",status:"Healthy"},{campaign:"Display Conquest",channel:"Google",spend:"$2.1k",roas:"1.5x",cvr:"0.9%",status:"Fatigue"}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>AURORA ANALYTICS</p><h1>Insight pulse</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Gradient insight charts — campaign truth without clutter.</p></header>
<div className="video-film"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" alt="Analytics"/><div className="cap">AURORA FILM · PULSE</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+6}/></FadeIn>)}</div>
<div className="split-3">
<section className="panel" style={{gridColumn:"span 2"}}><h2>Pipeline aurora</h2><TrendArea/></section>
<section className="panel"><h2>Creative heat</h2><Heatmap seed={13}/><p className="stencil" style={{marginTop:8}}>Brighter = higher frequency</p></section>
</div>
<section className="panel"><h2>Channel efficiency</h2><MixBars/></section>
<section className="panel"><h2>Campaign board</h2><FilterTable rows={ROWS} columns={[{key:"campaign",label:"Campaign"},{key:"channel",label:"Channel"},{key:"spend",label:"Spend"},{key:"roas",label:"ROAS"},{key:"cvr",label:"CVR"},{key:"status",label:"Status"}]} searchKeys={["campaign","channel","status"]}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(1);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
