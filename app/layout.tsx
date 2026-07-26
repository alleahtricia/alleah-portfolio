import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PageLoader } from "@/components/page-loader";
import { ThemeProvider } from "@/components/theme-provider";
import { personalInfo, summary } from "@/lib/resume-data";
import { siteUrl } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${personalInfo.name} | Data Analytics Associate`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${personalInfo.name}`,
  },
  description: summary,
  keywords: [
    "Alleah Tricia De Castro",
    "Data Analyst",
    "Data Analytics Associate",
    "Power BI",
    "Excel",
    "Sales Data Analyst Philippines",
    "SFE Analytics",
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: title,
    title,
    description: summary,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: summary,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(1 0 0)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.145 0 0)" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  description: summary,
  url: siteUrl,
  email: `mailto:${personalInfo.email}`,
  telephone: personalInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: personalInfo.location,
  },
  sameAs: [personalInfo.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
