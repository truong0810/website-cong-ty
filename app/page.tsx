"use client";

import Link from "next/link";
import { PageShell, lines } from "./components/page-shell";
import { useLanguage } from "./components/language-provider";

export default function Home() {
  const { text } = useLanguage();
  return <PageShell>
    <main>
      <section className="hero" id="home"><div className="hero-content"><p className="eyebrow">Kiến tạo giá trị bền vững</p><h1>{lines(text.hero)}</h1><p className="hero-description">{text.heroText}</p><div className="hero-buttons"><Link className="button button-primary" href="/gioi-thieu">Khám phá Thành Long <span>↗</span></Link><Link className="text-link light" href="/lien-he">Liên hệ với chúng tôi <span>↗</span></Link></div></div><div className="hero-footer"><span>Da Nang · Vietnam</span><span>Est. 1999</span></div></section>
      <section className="intro section-grid"><div className="section-label">01 / Giới thiệu</div><div className="intro-body"><h2>{lines(text.aboutTitle)}</h2><p>{text.aboutText}</p><Link className="text-link" href="/gioi-thieu">Tìm hiểu thêm <span>↗</span></Link><div className="numbers"><div><strong>25+</strong><span>Năm hình thành và phát triển</span></div><div><strong>05</strong><span>Lĩnh vực hoạt động</span></div><div><strong>12</strong><span>Tỉnh thành hiện diện</span></div></div></div></section>
      <section className="section-dark"><div className="section-grid"><div className="section-label">02 / Hệ sinh thái</div><h2>{lines(text.sectorsTitle)}</h2></div><div className="sector-list">{text.sectors.map((sector, index) => <Link className="sector-item" href="/linh-vuc" key={sector}><span className="sector-number">0{index + 1}</span><h3>{sector}</h3><span className="arrow">↗</span></Link>)}</div></section>
      <section className="project-section"><div className="project-image"><div className="project-caption"><span>01 — Solar energy</span><strong>Quang Nam Solar Farm</strong></div></div><div className="project-copy"><p className="section-label">03 / Dự án tiêu biểu</p><h2>{lines(text.projectTitle)}</h2><p>{text.projectText}</p><Link className="button button-dark" href="/du-an">Xem dự án <span>↗</span></Link></div></section>
      <section className="news section-grid"><div className="section-label">04 / Tin tức</div><div className="news-body"><h2>{lines(text.newsTitle)}</h2><div className="news-list">{text.news.map((item) => <Link className="news-item" href="/tin-tuc" key={item}><span>2024</span><strong>{item}</strong><span className="arrow">↗</span></Link>)}</div></div></section>
      <section className="careers"><div><p className="eyebrow">05 / Tuyển dụng</p><h2>{lines(text.careersTitle)}</h2><p>{text.careersText}</p><Link className="button button-primary" href="/tuyen-dung">Gia nhập Thành Long <span>↗</span></Link></div></section>
    </main>
  </PageShell>;
}
