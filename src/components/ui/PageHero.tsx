import { cn } from "@/lib/utils";

type PageHeroProps = {
  kicker?: string;
  title: string;
  lead?: string;
  tone?: "dark" | "paper";
};

export function PageHero({
  kicker,
  title,
  lead,
  tone = "dark",
}: PageHeroProps) {
  return (
    <header className={cn("page-hero", tone === "paper" && "page-hero-paper")}>
      <div className="site-container">
        {kicker ? <p className="t-label page-hero-kicker">{kicker}</p> : null}
        <h1 className="t-h1">{title}</h1>
        {lead ? <p className="t-body page-hero-lead">{lead}</p> : null}
      </div>
    </header>
  );
}
