"use client";

import Link from "next/link";
import { PageShell, lines } from "./page-shell";
import { useLanguage } from "./language-provider";

type PageKind = "about" | "sectors" | "projects" | "news" | "careers" | "contact";

export function InnerPage({ kind }: { kind: PageKind }) {
  const { text } = useLanguage();
  const pages = {
    about: { label: "01 / Giới thiệu", title: text.aboutTitle, body: text.aboutText },
    sectors: { label: "02 / Lĩnh vực hoạt động", title: text.sectorsTitle, body: "Năm lĩnh vực bổ trợ cho nhau tạo nên hệ sinh thái Thành Long: từ nền tảng công nghiệp thép đến năng lượng xanh, thương mại, đầu tư và nước sạch." },
    projects: { label: "03 / Dự án", title: text.projectTitle, body: text.projectText },
    news: { label: "04 / Tin tức", title: text.newsTitle, body: "Cập nhật những hoạt động, dấu ấn và câu chuyện mới nhất từ Thành Long Group." },
    careers: { label: "05 / Tuyển dụng", title: text.careersTitle, body: text.careersText },
    contact: { label: "06 / Liên hệ", title: text.contactTitle, body: "Hãy kết nối với Thành Long để cùng trao đổi về cơ hội hợp tác, đầu tư và phát triển bền vững." },
  } as const;
  const page = pages[kind];

  return <PageShell><main className="inner-page"><section className="inner-hero"><p className="eyebrow">Thanh Long Group</p><h1>{lines(page.title)}</h1><p className="hero-description">{page.body}</p></section><section className="inner-content">{kind === "about" && <><div className="inner-image intro-image"><span>TL / 1999</span></div><div className="numbers"><div><strong>25+</strong><span>Năm hình thành và phát triển</span></div><div><strong>05</strong><span>Lĩnh vực hoạt động</span></div><div><strong>12</strong><span>Tỉnh thành hiện diện</span></div></div></>}{kind === "sectors" && <div className="sector-list inner-list">{text.sectors.map((sector, index) => <Link className="sector-item" href="/lien-he" key={sector}><span className="sector-number">0{index + 1}</span><h3>{sector}</h3><span className="arrow">↗</span></Link>)}</div>}{kind === "news" && <div className="news-list inner-list">{text.news.map((item, index) => <article className="news-item" key={item}><span>0{index + 1} / 2024</span><strong>{item}</strong><span className="arrow">↗</span></article>)}</div>}{kind === "projects" && <div className="project-grid"><div className="project-image"><div className="project-caption"><span>01 — Solar energy</span><strong>Quang Nam Solar Farm</strong></div></div><div><h2>Những công trình cho tương lai.</h2><p>{page.body}</p></div></div>}{kind === "careers" && <div className="contact-panel"><h2>Gia nhập đội ngũ Thành Long.</h2><p>{page.body}</p><a className="button button-primary" href="mailto:hello@thanhlonggroup.vn">Gửi hồ sơ <span>↗</span></a></div>}{kind === "contact" && <div className="contact-panel"><h2>Kết nối với chúng tôi.</h2><p>Trụ sở Thành Long Group, Việt Nam</p><p><strong>Email:</strong> {text.email}</p><a className="button button-primary" href={`mailto:${text.email}`}>Gửi email <span>↗</span></a></div>}</section></main></PageShell>;
}
