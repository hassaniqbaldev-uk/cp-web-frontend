import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import Script from "next/script";
import CustomCursor from "@/components/ui/CustomCursor";

export default function SiteLayout({ children }) {
  return (
    <>
      <CustomCursor />
      <MobileMenu />
      <Header />
      <main>{children}</main>
      <Footer />

      <Script
        src="https://cdn.feedbucket.app/assets/feedbucket.js"
        strategy="afterInteractive"
        data-feedbucket="3rHNb3lcgqe226C8ghh5"
      />
    </>
  );
}
