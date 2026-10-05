"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Insights"],["/campaigns","Campaigns"],["/channels","Channels"],["/attribution","Attribution"],["/creative","Creative"],["/alerts","Alerts"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"CAC rising on paid social","a":"CAC +18% WoW. Kill bottom quartile creatives; shift 20% budget to search brand + email."},{"q":"Attribution gap","a":"View-through inflating Meta 12%. Prefer data-driven model; annotate dashboard."},{"q":"Creative fatigue","a":"Top ads day-11 frequency 4.2. Launch UGC batch C; refresh hooks only first."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell">
      <div className="orb a" aria-hidden /><div className="orb b" aria-hidden />
      <header className="topbar">
        <div>
          <div className="brand">Growth<span>Pulse</span></div>
          <p style={{ margin: "0.25rem 0 0", fontSize: 12, color: "var(--muted)" }}>Aurora analytics · <LiveClock /></p>
        </div>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="GrowthPulse" prompts={PROMPTS} />
    </div>
  );
}
