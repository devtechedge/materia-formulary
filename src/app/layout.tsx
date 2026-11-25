import type { Metadata } from "next";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MATERIA, evidence-graded supplement formulary",
    template: "%s / MATERIA",
  },
  description:
    "An independent clinical formulary for holistic supplements. Compare forms, grade the evidence, and audit a stack with deterministic rules.",
  openGraph: {
    title: "MATERIA, evidence-graded supplement formulary",
    description: "Compare forms, grade the evidence, and audit a supplement stack with deterministic rules.",
    type: "website",
  },
};

const themeScript = `try{var t=localStorage.getItem('materia-theme');if(t==='midnight'){document.documentElement.dataset.theme='midnight'}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
