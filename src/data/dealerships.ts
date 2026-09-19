import type { LocalizedText } from "./categories";

export interface Dealership {
  id: string;
  name: string;
  image: string;
  /** focus point for the cropped card image */
  imagePosition?: string;
  field: LocalizedText;
  description: LocalizedText;
}

export const dealerships: Dealership[] = [
  {
    id: "orge",
    name: "ORGE",
    image: "/dealers/orge.jpg",
    field: {
      tr: "Elektrikli Araç Şarj Çözümleri",
      en: "EV Charging Solutions",
      de: "Lösungen für Elektrofahrzeug-Ladung",
    },
    description: {
      tr: "ORGE elektrikli araç şarj çözümlerinin yetkili bayisiyiz. AC ve DC şarj istasyonlarının satışı, proje tasarımı ve kurulum desteği ile otopark, işletme ve filo şarj altyapılarını uçtan uca hayata geçiriyoruz.",
      en: "We are an authorized dealer of ORGE EV charging solutions. From sales and project design to installation support, we deliver parking, business and fleet charging infrastructure end to end.",
      de: "Wir sind autorisierter Händler der ORGE-Ladelösungen für Elektrofahrzeuge. Von Verkauf und Projektplanung bis zur Installationsunterstützung realisieren wir Lade­infrastruktur für Parkplätze, Unternehmen und Flotten aus einer Hand.",
    },
  },
  {
    id: "e365",
    name: "E365",
    image: "/dealers/e365.jpg",
    imagePosition: "78% center",
    field: {
      tr: "Elektrikli Araç Şarj Bayiliği",
      en: "EV Charging Dealership",
      de: "Vertretung für E-Ladelösungen",
    },
    description: {
      tr: "E365 şarj istasyonlarının yetkili bayisiyiz. 22 kW AC'den yüksek güçlü DC hızlı şarj ünitelerine kadar geniş ürün gamıyla satış, proje planlama, kurulum ve satış sonrası destek sağlıyoruz.",
      en: "We are an authorized dealer of E365 charging stations. From 22 kW AC to high-power DC fast chargers, we provide sales, project planning, installation and after-sales support across the range.",
      de: "Wir sind autorisierter Händler der E365-Ladestationen. Vom 22-kW-AC-Lader bis zu leistungsstarken DC-Schnellladern bieten wir Verkauf, Projektplanung, Installation und After-Sales-Support.",
    },
  },
  {
    id: "dahua",
    name: "Dahua",
    image: "/dealers/dahua.jpg",
    imagePosition: "8% center",
    field: {
      tr: "Güvenlik ve Görüntüleme Teknolojileri",
      en: "Security & Video Technologies",
      de: "Sicherheits- und Videotechnik",
    },
    description: {
      tr: "Dahua Technology ürünlerinin bayisiyiz. IP kameralar, kayıt cihazları, görüntüleme ve erişim kontrol sistemleriyle sanayi tesisleri ve ticari yapılar için güvenlik altyapısı çözümleri sunuyoruz.",
      en: "We are a dealer of Dahua Technology products. With IP cameras, recorders, display and access-control systems, we deliver security infrastructure for industrial sites and commercial buildings.",
      de: "Wir sind Händler von Dahua-Technology-Produkten. Mit IP-Kameras, Rekordern, Anzeige- und Zutrittskontrollsystemen liefern wir Sicherheitsinfrastruktur für Industrieanlagen und Gewerbegebäude.",
    },
  },
  {
    id: "schneider",
    name: "Schneider Electric",
    image: "/dealers/schneider.jpg",
    imagePosition: "35% center",
    field: {
      tr: "Enerji Yönetimi ve Otomasyon",
      en: "Energy Management & Automation",
      de: "Energiemanagement & Automatisierung",
    },
    description: {
      tr: "Schneider Electric ürünlerinin bayisiyiz. Alçak gerilim dağıtım, koruma, kontrol ve otomasyon ekipmanlarını pano üretimi ve tesis projelerimizin ihtiyacına göre tedarik ediyoruz.",
      en: "We are a dealer of Schneider Electric products. We supply low-voltage distribution, protection, control and automation equipment according to the needs of our panel production and plant projects.",
      de: "Wir sind Händler von Schneider-Electric-Produkten. Wir liefern Niederspannungsverteilung, Schutz-, Steuer- und Automatisierungskomponenten passend zu unserer Schaltschrankfertigung und unseren Anlagenprojekten.",
    },
  },
  {
    id: "lt",
    name: "L&T",
    image: "/dealers/lt.jpg",
    field: {
      tr: "Elektrik ve Otomasyon Ürünleri",
      en: "Electrical & Automation Products",
      de: "Elektro- und Automatisierungsprodukte",
    },
    description: {
      tr: "Larsen & Toubro (L&T) elektrik ve otomasyon ürünlerinin bayisiyiz. Şalt, koruma ve kontrol ürünleri ile endüstriyel pano ve altyapı projelerine rekabetçi tedarik çözümleri sunuyoruz.",
      en: "We are a dealer of Larsen & Toubro (L&T) electrical and automation products. We provide competitive supply solutions for industrial panel and infrastructure projects with switching, protection and control products.",
      de: "Wir sind Händler der Elektro- und Automatisierungsprodukte von Larsen & Toubro (L&T). Mit Schalt-, Schutz- und Steuerprodukten bieten wir wettbewerbsfähige Lieferlösungen für Industrieschaltschränke und Infrastrukturprojekte.",
    },
  },
];
