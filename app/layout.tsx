import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/language-provider";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thành Long Group | Kiến tạo giá trị bền vững",
  description: "Thành Long Group phát triển hệ sinh thái bền vững trong lĩnh vực thép, năng lượng xanh, thương mại, đầu tư và nước sạch.",
  keywords: ["Thành Long Group", "thép", "năng lượng xanh", "đầu tư", "nước sạch", "Đà Nẵng"],
  openGraph: { title: "Thành Long Group | Kiến tạo giá trị bền vững", description: "Một tập đoàn. Nhiều động lực phát triển.", type: "website", locale: "vi_VN" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="vi" className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}><body className="min-h-full"><LanguageProvider>{children}</LanguageProvider></body></html>;
}
