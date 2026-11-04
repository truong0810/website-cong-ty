import Link from "next/link";
import { useLanguage } from "./language-provider";

export function SiteFooter() {
  const { text } = useLanguage();
  return <footer><div className="footer-top"><Link className="brand brand-footer" href="/"><span className="brand-mark">TL</span><span>THANH LONG<br /><small>GROUP</small></span></Link><p>{text.aboutText.slice(0, 68)}...</p><a className="footer-email" href={`mailto:${text.email}`}>{text.email} <span>↗</span></a></div><div className="footer-bottom"><span>© 2026 Thanh Long Group</span><span>{text.address}</span><span>LinkedIn &nbsp; Facebook</span></div></footer>;
}