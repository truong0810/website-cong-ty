import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}

export function lines(value: string) {
  return value.split("\n").map((line) => <span key={line}>{line}</span>);
}