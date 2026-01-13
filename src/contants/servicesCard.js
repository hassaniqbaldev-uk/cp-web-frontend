import ImacIcon from "@/assets/icons/ui/imac-icon.svg";
import PaintIcon from "@/assets/icons/ui/paint-icon.svg";
import UpsideIcon from "@/assets/icons/ui/upside-arrow-icon.svg";

export const SERVICES_CARD = [
  {
    icon: ImacIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Websites & Platforms",
    description:
      "Custom websites built on WordPress, WooCommerce, Shopify, Webflow, and headless React.",
    listItem: [
      "WordPress & WooCommerce",
      "Shopify & Webflow",
      "Headless & React",
      "Platform Migrations",
    ],
    link: "",
    linkText: "Explore Website Services",
    color: "#F14A58",
  },
  {
    icon: PaintIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Branding & Identity",
    description:
      "Stand out with visual identities that resonate. Logos, brand guidelines, and design systems.",
    listItem: [
      "Logo Design",
      "Brand Guidelines",
      "Marketing Collateral",
      "UI/UX Design",
    ],
    link: "",
    linkText: "Explore Branding Services",
    color: "#44B276",
  },
  {
    icon: UpsideIcon,
    iconWidth: 28,
    iconHeight: 17,
    title: "Growth & Support",
    description:
      "Your website is never 'done.' We provide ongoing SEO, CRO, maintenance, and strategic growth.",
    listItem: [
      "SEO & Content Strategy",
      "Conversion Optimization",
      "Maintenance & Support",
      "Analytics & Reporting",
    ],
    link: "",
    linkText: "Explore Growth Services",
    color: "#3078FF",
  },
];
