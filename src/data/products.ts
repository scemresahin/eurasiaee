import type { LocalizedText } from "./categories";

/**
 * Seed product-line entries. This structure is intentionally the same shape
 * the Sanity "product" schema will use, so the catalogue can grow from this
 * starter set to 500+ entries by adding CMS documents — no code changes.
 */
export interface Product {
  id: string;
  categorySlug: string;
  name: LocalizedText;
  spec: LocalizedText;
}

export const products: Product[] = [
  // MDB
  { id: "mdb-630", categorySlug: "mdb", name: { tr: "MDB 630A Ana Dağıtım Panosu", en: "MDB 630A Main Distribution Board" }, spec: { tr: "Tekli giriş, MCCB çıkışlar, IP42", en: "Single incomer, MCCB outgoing, IP42" } },
  { id: "mdb-1600", categorySlug: "mdb", name: { tr: "MDB 1600A Çift Giriş / Baraj Kuplörlü", en: "MDB 1600A Dual-Incomer / Bus-Coupler" }, spec: { tr: "ACB giriş, form 3b ayrım", en: "ACB incomer, form 3b separation" } },
  { id: "mdb-3200", categorySlug: "mdb", name: { tr: "MDB 3200A Yüksek Kapasiteli Pano", en: "MDB 3200A High-Capacity Board" }, spec: { tr: "Çift giriş, çekmeceli çıkışlar", en: "Dual incomer, withdrawable outgoing" } },

  // SMDB
  { id: "smdb-250", categorySlug: "smdb", name: { tr: "SMDB 250A Duvar Tipi Pano", en: "SMDB 250A Wall-Mounted Board" }, spec: { tr: "MCB çıkışlar, kompakt gövde", en: "MCB outgoing, compact enclosure" } },
  { id: "smdb-630", categorySlug: "smdb", name: { tr: "SMDB 630A Yerden Montajlı Pano", en: "SMDB 630A Floor-Standing Board" }, spec: { tr: "MCCB giriş, alt sayaçlama", en: "MCCB incomer, sub-metering" } },
  { id: "smdb-outdoor", categorySlug: "smdb", name: { tr: "SMDB Dış Mekân / Paslanmaz Seri", en: "SMDB Outdoor / Stainless Series" }, spec: { tr: "IP65, 304 paslanmaz gövde", en: "IP65, 304 stainless enclosure" } },

  // PCC
  { id: "pcc-fixed", categorySlug: "pcc", name: { tr: "PCC Sabit Tip Besleme Bölümü", en: "PCC Fixed-Type Feeder Section" }, spec: { tr: "Form 3/4 ayrım, ACB giriş", en: "Form 3/4 separation, ACB incomer" } },
  { id: "pcc-withdrawable", categorySlug: "pcc", name: { tr: "PCC Çekmeceli Besleme Bölümü", en: "PCC Withdrawable Feeder Section" }, spec: { tr: "Yüksek akım, haberleşmeli sayaçlar", en: "High-current, communicating meters" } },

  // MCC
  { id: "mcc-dol", categorySlug: "mcc", name: { tr: "MCC DOL Motor Besleme Bölümü", en: "MCC DOL Motor Feeder Section" }, spec: { tr: "Direkt yol verme, aşırı yük koruması", en: "Direct-on-line starting, overload protection" } },
  { id: "mcc-star-delta", categorySlug: "mcc", name: { tr: "MCC Yıldız-Üçgen Besleme Bölümü", en: "MCC Star-Delta Feeder Section" }, spec: { tr: "Yıldız-üçgen yol verme", en: "Star-delta starting" } },
  { id: "mcc-drawer", categorySlug: "mcc", name: { tr: "MCC Çekmeceli Motor Bölümü", en: "MCC Drawer-Type Motor Section" }, spec: { tr: "Çekmeceli konsept, PLC arayüzü", en: "Drawer concept, PLC interface" } },

  // Machine
  { id: "machine-standard", categorySlug: "machine", name: { tr: "Standart Makine Kontrol Panosu", en: "Standard Machine Control Panel" }, spec: { tr: "Güç + kontrol tek gövdede", en: "Power + control in one enclosure" } },
  { id: "machine-oem", categorySlug: "machine", name: { tr: "OEM Seri Üretim Makine Panosu", en: "OEM Series-Production Machine Panel" }, spec: { tr: "Build-to-print, tekrar sipariş", en: "Build-to-print, repeat order" } },

  // PLC/HMI/SCADA
  { id: "plc-standard", categorySlug: "plc-hmi-scada", name: { tr: "PLC / Uzak I/O Panosu", en: "PLC / Remote I/O Panel" }, spec: { tr: "Profinet/Modbus entegrasyonu", en: "Profinet/Modbus integration" } },
  { id: "hmi-operator", categorySlug: "plc-hmi-scada", name: { tr: "Operatör HMI Arayüz Panosu", en: "Operator HMI Interface Panel" }, spec: { tr: "Dokunmatik ekran, ağ geçidi", en: "Touchscreen, network gateway" } },

  // Drives
  { id: "vfd-standard", categorySlug: "drives", name: { tr: "VFD Panosu (Standart)", en: "VFD Panel (Standard)" }, spec: { tr: "Manuel/otomatik bypass seçenekli", en: "Manual/automatic bypass option" } },
  { id: "soft-starter", categorySlug: "drives", name: { tr: "Yumuşak Yol Verici Panosu", en: "Soft Starter Panel" }, spec: { tr: "Hat reaktörlü, çoklu bölüm", en: "With line reactor, multi-section" } },

  // HVAC
  { id: "hvac-pump", categorySlug: "hvac", name: { tr: "Pompa Kontrol Panosu (Duty/Standby)", en: "Pump Control Panel (Duty/Standby)" }, spec: { tr: "Seviye/basınç arayüzü", en: "Level/pressure interface" } },
  { id: "hvac-fan", categorySlug: "hvac", name: { tr: "Fan Kontrol Panosu", en: "Fan Control Panel" }, spec: { tr: "BMS haberleşme ağ geçidi", en: "BMS communication gateway" } },

  // Transfer
  { id: "ats-standard", categorySlug: "transfer", name: { tr: "ATS Otomatik Transfer Panosu", en: "ATS Automatic Transfer Panel" }, spec: { tr: "Açık/kapalı geçiş seçenekli", en: "Open/closed transition option" } },
  { id: "amf-generator", categorySlug: "transfer", name: { tr: "AMF Jeneratör Kontrol Panosu", en: "AMF Generator Control Panel" }, spec: { tr: "Start/stop arayüzü, mimik diyagram", en: "Start/stop interface, mimic diagram" } },

  // PQ
  { id: "pq-fixed", categorySlug: "pq", name: { tr: "Sabit Kompanzasyon Panosu", en: "Fixed Compensation Panel" }, spec: { tr: "Kondansatör bataryası", en: "Capacitor bank" } },
  { id: "pq-automatic", categorySlug: "pq", name: { tr: "Otomatik Kompanzasyon Panosu (Detune)", en: "Automatic Compensation Panel (Detuned)" }, spec: { tr: "Güç faktörü kontrolörlü", en: "With power factor controller" } },

  // DC/UPS
  { id: "dc-distribution", categorySlug: "dc-ups", name: { tr: "DC Dağıtım Panosu", en: "DC Distribution Panel" }, spec: { tr: "24/48/110/220 VDC seçenekli", en: "24/48/110/220 VDC options" } },
  { id: "ups-aux", categorySlug: "dc-ups", name: { tr: "UPS Yardımcı Dağıtım Panosu", en: "UPS Auxiliary Distribution Panel" }, spec: { tr: "Bypass ve akü ayırıcı", en: "Bypass and battery disconnect" } },

  // PV
  { id: "pv-ac", categorySlug: "pv", name: { tr: "PV AC Dağıtım Panosu", en: "PV AC Distribution Panel" }, spec: { tr: "İnverter arayüzü, sayaçlama", en: "Inverter interface, metering" } },
  { id: "pv-combiner", categorySlug: "pv", name: { tr: "PV DC Kombiner Panosu", en: "PV DC Combiner Panel" }, spec: { tr: "String girişleri, sürge koruması", en: "String inputs, surge protection" } },

  // BESS
  { id: "bess-aux", categorySlug: "bess", name: { tr: "BESS Yardımcı Dağıtım Panosu", en: "BESS Auxiliary Distribution Panel" }, spec: { tr: "HVAC/yangın arayüzü desteği", en: "HVAC/fire interface support" } },

  // EV
  { id: "ev-ac", categorySlug: "ev", name: { tr: "EV AC Şarj Dağıtım Panosu", en: "EV AC Charging Distribution Panel" }, spec: { tr: "Dinamik yük yönetimi", en: "Dynamic load management" } },
  { id: "ev-dc", categorySlug: "ev", name: { tr: "EV DC Hızlı Şarj Dağıtım Panosu", en: "EV DC Fast-Charging Distribution Panel" }, spec: { tr: "MID sayaç entegrasyonu", en: "MID meter integration" } },

  // Wind
  { id: "wind-aux", categorySlug: "wind", name: { tr: "Rüzgar Türbini Yardımcı Panosu", en: "Wind Turbine Auxiliary Panel" }, spec: { tr: "Korozyona dayanıklı muhafaza", en: "Corrosion-resistant enclosure" } },

  // Special
  { id: "stainless-304", categorySlug: "special", name: { tr: "304 Paslanmaz Dış Mekân Panosu", en: "304 Stainless Outdoor Panel" }, spec: { tr: "IP65, kanopili", en: "IP65, with canopy" } },
  { id: "stainless-316", categorySlug: "special", name: { tr: "316 Paslanmaz Kimyasal Ortam Panosu", en: "316 Stainless Chemical-Environment Panel" }, spec: { tr: "Deniz/kıyı ortamına uygun", en: "Marine/coastal suitable" } },

  // OEM
  { id: "oem-series", categorySlug: "oem", name: { tr: "OEM Seri Sipariş Paketi", en: "OEM Series-Order Package" }, spec: { tr: "Sabit BOM, revizyon takibi", en: "Frozen BOM, revision tracking" } },
];

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}
