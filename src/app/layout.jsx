import "@/styles/globals.css";
import { Onest } from "next/font/google";
import Script from "next/script";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "CreativePixels | Web Design, WordPress & Branding Agency",
    template: "%s",
  },
  description:
    "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
  metadataBase: new URL("https://creativepixels.agency"),

  // ------------------------
  // FAVICONS
  // ------------------------
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        {children}

        <Script
          src="https://cdn.feedbucket.app/assets/feedbucket.js"
          strategy="afterInteractive"
          data-feedbucket="3rHNb3lcgqe226C8ghh5"
        />
      </body>
    </html>
  );
}
