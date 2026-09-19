import { categoriesDe } from "./categories.de";

export type Locale = "tr" | "en" | "de";

interface BaseText {
  tr: string;
  en: string;
}

export type LocalizedText = Record<Locale, string>;

interface BaseCategory {
  slug: string;
  code: string;
  name: BaseText;
  tagline: BaseText;
  overview: BaseText;
  applications: BaseText[];
  features: BaseText[];
  options: BaseText[];
  note?: BaseText;
  image: string;
}

export interface Category {
  slug: string;
  code: string;
  name: LocalizedText;
  tagline: LocalizedText;
  overview: LocalizedText;
  applications: LocalizedText[];
  features: LocalizedText[];
  options: LocalizedText[];
  note?: LocalizedText;
  image: string;
}

const baseCategories: BaseCategory[] = [
  {
    slug: "mdb",
    code: "MDB",
    name: { tr: "Ana Dağıtım Panoları", en: "Main Distribution Boards" },
    tagline: {
      tr: "Endüstriyel ve ticari tesisler için birincil AG dağıtımı.",
      en: "Primary LV distribution for industrial and commercial facilities.",
    },
    overview: {
      tr: "MDB paketleri ana besleme girişini alır ve koruma, sayaçlama ve projeye özel ayrımla birlikte alt beslemelere gücü dağıtır.",
      en: "MDB packages receive the main incoming supply and distribute power to downstream feeders with protection, metering and project-specific segregation.",
    },
    applications: [
      { tr: "Endüstriyel tesisler", en: "Industrial plants" },
      { tr: "Fabrikalar ve üretim hatları", en: "Factories and production lines" },
      { tr: "Ticari ve lojistik tesisler", en: "Commercial and logistics facilities" },
      { tr: "Altyapı projeleri", en: "Infrastructure projects" },
    ],
    features: [
      { tr: "Ana giriş ve çıkış besleme bölümleri", en: "Main incomer and outgoing feeder sections" },
      { tr: "Projeye göre ACB / MCCB düzenlemeleri", en: "ACB / MCCB arrangements according to project" },
      { tr: "Sayaçlama ve koruma entegrasyonu", en: "Metering and protection integration" },
      { tr: "Projeye göre ayrım formu (Form of Separation)", en: "Form of separation as required by project" },
      { tr: "Baraj kuplörü ve çift giriş seçenekleri", en: "Bus-coupler and dual-incomer options" },
      { tr: "Üstten veya alttan kablo girişi", en: "Top or bottom cable entry" },
      { tr: "Modüler ve bakımı kolay bölüm yerleşimi", en: "Modular and maintainable section layout" },
      { tr: "Yedek besleme ve genişleme alanı", en: "Spare feeders and future expansion space" },
    ],
    options: [
      { tr: "İsteğe bağlı kalay veya gümüş kaplamalı bakır baralar", en: "Copper busbars with optional tin or silver plating" },
      { tr: "Tercih edilen kesici / sayaç marka ve modelleri", en: "Preferred breaker / meter brands and models" },
      { tr: "İç/dış mekân için IP korumalı uygulama", en: "IP-rated indoor or outdoor execution" },
      { tr: "Özel RAL rengi ve etiketleme", en: "Special RAL colour and labeling" },
    ],
    note: {
      tr: "Zorlu veya korozif ortamlar için bakır baralar kalay veya gümüş kaplamalı tedarik edilebilir.",
      en: "For demanding or corrosive environments, copper busbars can be supplied with tin or silver plating.",
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "smdb",
    code: "SMDB",
    name: { tr: "Tali Dağıtım Panoları", en: "Sub Distribution Boards" },
    tagline: {
      tr: "Yüklere ve tesis alanlarına yakın esnek tali dağıtım.",
      en: "Flexible secondary distribution close to loads and plant areas.",
    },
    overview: {
      tr: "SMDB'ler binalar, üretim bölgeleri, tesisat ve teknik alanlar için bakım ve genişlemeyi kolaylaştıran yapılandırılmış tali dağıtım sağlar.",
      en: "SMDBs provide structured secondary distribution for buildings, production zones, utilities and technical areas while keeping maintenance and expansion straightforward.",
    },
    applications: [
      { tr: "Bina katları ve teknik odalar", en: "Building floors and technical rooms" },
      { tr: "Üretim bölgeleri", en: "Production zones" },
      { tr: "Depolar ve lojistik alanları", en: "Warehouses and logistics" },
      { tr: "Tesisat ve servis alanları", en: "Utility and service areas" },
    ],
    features: [
      { tr: "MCB / MCCB çıkış beslemeleri", en: "MCB / MCCB outgoing feeders" },
      { tr: "Sayaçlama ve alt sayaçlama seçenekleri", en: "Metering and sub-metering options" },
      { tr: "Net devre tanımlama", en: "Clear circuit identification" },
      { tr: "Kompakt duvar tipi veya yerden montajlı tasarım", en: "Compact wall-mounted or floor-standing design" },
      { tr: "Nötr ve PE bara düzenlemesi", en: "Neutral and PE bar organization" },
      { tr: "Bakım için planlanmış ayrım ve erişim", en: "Segregation and access planned for maintenance" },
      { tr: "Gelecekteki devreler için ayrılmış yollar", en: "Reserved ways for future circuits" },
    ],
    options: [
      { tr: "Müşteri tanımlı besleme çizelgesi", en: "Customer-defined feeder schedule" },
      { tr: "Ana şalter veya MCCB girişi", en: "Main switch or MCCB incomer" },
      { tr: "Sürge koruması ve sayaçlama seçenekleri", en: "Surge protection and metering options" },
      { tr: "Özel muhafaza ölçüleri", en: "Special enclosure dimensions" },
      { tr: "Dış mekân / paslanmaz uygulama", en: "Outdoor / stainless execution" },
    ],
    note: {
      tr: "SMDB içeriği doğrudan tek hat şemanız ve besleme çizelgenizden oluşturulabilir; bu da yerinde montaj işini azaltır.",
      en: "SMDB content can be built directly from your single-line diagram and feeder schedule, reducing local assembly work and simplifying site installation.",
    },
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "pcc",
    code: "PCC",
    name: { tr: "Güç Kontrol Merkezleri", en: "Power Control Centers" },
    tagline: {
      tr: "Proses tesisleri için merkezi besleme dağıtımı ve güç kontrolü.",
      en: "Centralized feeder distribution and power control for process facilities.",
    },
    overview: {
      tr: "PCC'ler, yapılandırılmış ve yüksek kapasiteli AG güç yönetimi gerektiren projeler için dağıtım, koruma ve besleme kontrolünü tek bir koordineli düzende birleştirir.",
      en: "PCCs combine distribution, protection and feeder control in one coordinated assembly for projects requiring structured, high-capacity LV power management.",
    },
    applications: [
      { tr: "Proses tesisleri", en: "Process plants" },
      { tr: "İmalat", en: "Manufacturing" },
      { tr: "Altyapı hizmetleri", en: "Utilities" },
      { tr: "Büyük ticari tesisler", en: "Large commercial facilities" },
    ],
    features: [
      { tr: "Giriş, çıkış ve baraj kuplörü bölümleri", en: "Incoming, outgoing and bus-coupler sections" },
      { tr: "Yüksek akımlı besleme düzenlemesi", en: "High-current feeder organization" },
      { tr: "Sayaçlama, koruma ve gösterge", en: "Metering, protection and indication" },
      { tr: "Kilitlemeli anahtarlama şemaları", en: "Interlocked switching schemes" },
      { tr: "Gelecekteki genişleme için alan", en: "Space for future expansion" },
    ],
    options: [
      { tr: "Sabit veya çekmeceli besleme konseptleri", en: "Fixed or removable feeder concepts" },
      { tr: "Belirtilen yerlerde Form 2 / 3 / 4 ayrımı", en: "Form 2 / 3 / 4 segregation where specified" },
      { tr: "Bakır bara kaplama seçenekleri", en: "Copper busbar plating options" },
      { tr: "Farklı kablo giriş yönleri", en: "Different cable-entry directions" },
      { tr: "Tercih edilen koruma röleleri ve sayaçlar", en: "Preferred protection relays and meters" },
      { tr: "Haberleşmeye hazır sayaçlama mimarisi", en: "Communication-ready metering architecture" },
    ],
    note: {
      tr: "Elektriksel değerler, kısa devre dayanımı ve iç ayrım gereksinimleri montajdan önce teyit edilerek onaylı proje kapsamında belgelenir.",
      en: "Electrical ratings, short-circuit withstand requirements and internal separation are confirmed before assembly and documented in the approved project scope.",
    },
    image: "https://images.unsplash.com/photo-1566417110090-6b15a06ec800?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "mcc",
    code: "MCC",
    name: { tr: "Motor Kontrol Merkezleri", en: "Motor Control Centers" },
    tagline: {
      tr: "Güvenilir çalışma için düzenlenmiş motor yol verme, koruma ve kontrol.",
      en: "Motor starting, protection and control arranged for reliable operation.",
    },
    overview: {
      tr: "MCC paketleri; üretim hatları, altyapı hizmetleri ve proses ekipmanları için motor beslemelerini, korumayı, izolasyonu ve kontrolü merkezileştirir.",
      en: "MCC packages centralize motor feeders, protection, isolation and control for production lines, utilities and process equipment.",
    },
    applications: [
      { tr: "Motorlar ve pompalar", en: "Motors and pumps" },
      { tr: "Fanlar ve havalandırma", en: "Fans and ventilation" },
      { tr: "Konveyörler", en: "Conveyors" },
      { tr: "Proses hatları ve OEM makineleri", en: "Process lines and OEM machinery" },
    ],
    features: [
      { tr: "DOL, yıldız-üçgen ve reversing beslemeler", en: "DOL, star-delta and reversing feeders" },
      { tr: "Motor koruma ve aşırı yük fonksiyonları", en: "Motor protection and overload functions" },
      { tr: "Yerel / uzaktan kontrol arayüzleri", en: "Local / remote control interfaces" },
      { tr: "Kilitlemeler ve durum göstergesi", en: "Interlocks and status indication" },
      { tr: "Net terminal işaretleme", en: "Clear terminal marking" },
      { tr: "Yedek besleme ve genişleme kapasitesi", en: "Spare feeders and expansion capacity" },
    ],
    options: [
      { tr: "Müşteriye özel motor besleme çizelgesi", en: "Customer-specific motor feeder schedule" },
      { tr: "Kontrol voltajı seçenekleri", en: "Control voltage options" },
      { tr: "PLC / ağ arayüzü", en: "PLC / network interface" },
      { tr: "Projeye göre sabit veya çekmeceli konsept", en: "Fixed or drawer concept according to project" },
      { tr: "Tercih edilen kontaktör ve koruma markaları", en: "Preferred contactor and protection brands" },
      { tr: "Özel kablolama ve çok dilli etiketleme", en: "Custom wiring and multilingual labeling" },
    ],
    note: {
      tr: "MCC'ler motor listeniz, tek hat şemanız, kontrol felsefeniz ve tercih ettiğiniz bileşen çizelgesinden hazırlanabilir.",
      en: "MCCs can be prepared from your motor list, single-line diagram, control philosophy and preferred component schedule.",
    },
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "machine",
    code: "MACHINE",
    name: { tr: "Makine Güç & Kontrol Panoları", en: "Machine Power & Control Panels" },
    tagline: {
      tr: "Makine, skid ve üretim ekipmanları için komple elektrik paketleri.",
      en: "Complete electrical packages for machines, skids and production equipment.",
    },
    overview: {
      tr: "Makine panoları; giriş gücünü, branş korumasını, motor beslemelerini, kontrolleri ve operatör arayüzlerini tek, fabrika-hazır bir pakette birleştirir.",
      en: "Machine panels integrate incoming power, branch protection, motor feeders, controls and operator interfaces in a single factory-ready package.",
    },
    applications: [
      { tr: "OEM makineleri", en: "OEM machinery" },
      { tr: "Ambalaj ve proses ekipmanları", en: "Packaging and process equipment" },
      { tr: "Skid'ler", en: "Skids" },
      { tr: "Üretim hücreleri", en: "Production cells" },
    ],
    features: [
      { tr: "Tek muhafazada güç ve kontrol", en: "Power and control in one enclosure" },
      { tr: "Makineye özel kablolama ve terminal planı", en: "Machine-specific wiring and terminal plan" },
      { tr: "Kilitlemeler ve güvenlik arayüzleri", en: "Interlocks and safety interfaces" },
      { tr: "Operatör cihazları ve HMI entegrasyonu", en: "Operator devices and HMI integration" },
      { tr: "Net servis etiketleme", en: "Clear service labeling" },
      { tr: "Sensör ve aktüatörler için hazırlık", en: "Provision for sensors and actuators" },
    ],
    options: [
      { tr: "Müşteri çizimlerinden birebir üretim (build-to-print)", en: "Build-to-print from customer drawings" },
      { tr: "Müşteri BOM'u ve tercih edilen markalar", en: "Customer BOM and preferred brands" },
      { tr: "220/230/24 V kontrol mimarileri", en: "220/230/24 V control architectures" },
      { tr: "Uzak I/O ve ağ geçitleri", en: "Remote I/O and network gateways" },
      { tr: "Paslanmaz veya boyalı muhafaza", en: "Stainless or painted enclosure" },
      { tr: "Seri üretim ve tekrar sipariş konfigürasyonu", en: "Serial production and repeat-order configuration" },
    ],
    note: {
      tr: "OEM müşteriler için, sabitlenmiş bir BOM ve çizim paketi kullanılarak aynı pano konfigürasyonu tekrar siparişlerde yeniden üretilebilir.",
      en: "For OEM customers, a frozen BOM and drawing package can be used to reproduce the same panel configuration across repeat orders.",
    },
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "plc-hmi-scada",
    code: "PLC / HMI",
    name: { tr: "PLC / HMI / SCADA Arayüz Panoları", en: "PLC / HMI / SCADA Interface Panels" },
    tagline: {
      tr: "Makine ve proses kontrolü için otomasyon ve arayüz panoları.",
      en: "Automation and interface panels for machine and process control.",
    },
    overview: {
      tr: "Otomasyon panoları; müşteri veya proje mühendisi tarafından tanımlanan kontrol mimarileri için düzenli PLC, HMI, uzak I/O, haberleşme ve arayüz donanımı sağlar.",
      en: "Automation panels provide organized PLC, HMI, remote I/O, communication and interface hardware for control architectures defined by the customer or project engineer.",
    },
    applications: [
      { tr: "Proses otomasyonu", en: "Process automation" },
      { tr: "Makine otomasyonu", en: "Machine automation" },
      { tr: "Uzak I/O istasyonları", en: "Remote I/O stations" },
      { tr: "Tesis haberleşme arayüzleri", en: "Plant communication interfaces" },
    ],
    features: [
      { tr: "PLC ve uzak I/O entegrasyonu", en: "PLC and remote I/O integration" },
      { tr: "HMI ve operatör arayüzü", en: "HMI and operator interface" },
      { tr: "Haberleşme ağ geçitleri", en: "Communication gateways" },
      { tr: "Düzenli zayıf akım kablolaması", en: "Organized low-current wiring" },
      { tr: "Bakımı kolay, etiketli yerleşim", en: "Maintainable, labeled layout" },
    ],
    options: [
      { tr: "I/O listesinden pano tasarımı", en: "Panel design from I/O list" },
      { tr: "Müşteri PLC / HMI marka ve modeli", en: "Customer PLC / HMI brand and model" },
      { tr: "Profinet / Modbus / Ethernet entegrasyonu", en: "Profinet / Modbus / Ethernet integration" },
      { tr: "Terminal ve ağ segmentasyonu", en: "Terminal and network segmentation" },
      { tr: "Çok dilli etiketleme", en: "Multilingual labeling" },
      { tr: "Endüstriyel Ethernet switch / gateway seçenekleri", en: "Industrial Ethernet switch / gateway options" },
    ],
    note: {
      tr: "Yazılım geliştirme otomatik olarak dahil değildir. Donanım, pano montajı ve haberleşme mimarisi anlaşılan proje kapsamına göre sağlanır.",
      en: "Software development is not automatically included. Hardware, panel assembly and communication architecture are supplied according to the agreed project scope.",
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "drives",
    code: "DRIVES",
    name: { tr: "VFD & Yumuşak Yol Verici Panoları", en: "VFD & Soft Starter Panels" },
    tagline: {
      tr: "Zorlu uygulamalar için motor hız kontrolü ve yumuşak yol verme paketleri.",
      en: "Motor speed control and soft-start packages for demanding applications.",
    },
    overview: {
      tr: "Sürücü panoları; VFD veya yumuşak yol vericileri izolasyon, koruma, bypass, soğutma ve kontrol elemanlarıyla koordineli bir muhafazada birleştirir.",
      en: "Drive panels integrate VFDs or soft starters with isolation, protection, bypass, cooling and control elements in a coordinated enclosure.",
    },
    applications: [
      { tr: "Pompalar", en: "Pumps" },
      { tr: "Fanlar ve havalandırma", en: "Fans and ventilation" },
      { tr: "Konveyörler", en: "Conveyors" },
      { tr: "Kompresörler ve proses ekipmanları", en: "Compressors and process equipment" },
    ],
    features: [
      { tr: "VFD veya yumuşak yol verici entegrasyonu", en: "VFD or soft-starter integration" },
      { tr: "Giriş ve motor koruması", en: "Input and motor protection" },
      { tr: "Soğutma ve havalandırma konsepti", en: "Cooling and ventilation concept" },
      { tr: "Manuel veya otomatik bypass", en: "Manual or automatic bypass" },
      { tr: "Yerel / uzaktan çalıştırma", en: "Local / remote operation" },
      { tr: "Otomasyon ve geri besleme arayüzleri", en: "Automation and feedback interfaces" },
    ],
    options: [
      { tr: "Müşterinin seçtiği sürücü marka ve modeli", en: "Customer-selected drive brand and model" },
      { tr: "Gerektiğinde hat reaktörleri / filtreler", en: "Line reactors / filters where required" },
      { tr: "Farklı soğutma konseptleri", en: "Different cooling concepts" },
      { tr: "Çoklu sürücü bölümleri", en: "Multiple drive sections" },
      { tr: "Paslanmaz veya boyalı muhafaza", en: "Stainless or painted enclosure" },
    ],
    note: {
      tr: "Sürücü seçimi, ısı yayılımı ve havalandırma; proje yük profili, ortam koşulları ve seçilen ekipmana göre kontrol edilir.",
      en: "Drive selection, heat dissipation and ventilation are checked against the project load profile, ambient conditions and selected equipment.",
    },
    image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "hvac",
    code: "HVAC",
    name: { tr: "HVAC / Fan / Pompa Kontrol Panoları", en: "HVAC / Fan / Pump Control Panels" },
    tagline: {
      tr: "Bina ve tesisat sistemleri için özel kontrol paketleri.",
      en: "Dedicated control packages for building services and utility systems.",
    },
    overview: {
      tr: "HVAC ve pompa panoları; mekanik sistemler ve tesisat uygulamaları için motor kontrolü, otomasyon arayüzleri, alarmlar ve çalışma modlarını bir araya getirir.",
      en: "HVAC and pump panels combine motor control, automation interfaces, alarms and operating modes for mechanical systems and utility applications.",
    },
    applications: [
      { tr: "Klima santralleri", en: "Air handling units" },
      { tr: "Hidrofor ve transfer pompaları", en: "Booster and transfer pumps" },
      { tr: "Egzoz / besleme fanları", en: "Exhaust / supply fans" },
      { tr: "Soğutma ve havalandırma sistemleri", en: "Cooling and ventilation systems" },
    ],
    features: [
      { tr: "Pompa ve fan besleme entegrasyonu", en: "Pump and fan feeder integration" },
      { tr: "Görev/yedek (duty/standby) mantık arayüzleri", en: "Duty / standby logic interfaces" },
      { tr: "VFD / yumuşak yol verici seçenekleri", en: "VFD / soft-starter options" },
      { tr: "Yerel / uzaktan çalıştırma", en: "Local / remote operation" },
      { tr: "Alarm ve durum göstergesi", en: "Alarm and status indication" },
      { tr: "Pano soğutma veya ısıtıcı seçenekleri", en: "Panel cooling or heater options" },
    ],
    options: [
      { tr: "Çoklu pompa / fan konfigürasyonları", en: "Multiple pump / fan configurations" },
      { tr: "Seviye / basınç / sıcaklık arayüzleri", en: "Level / pressure / temperature interfaces" },
      { tr: "Müşteri kontrol felsefesi", en: "Customer control philosophy" },
      { tr: "BMS haberleşme ağ geçidi", en: "BMS communication gateway" },
      { tr: "Dış mekân veya paslanmaz yapı", en: "Outdoor or stainless construction" },
    ],
    note: {
      tr: "Kontrol felsefesi; müşterinin fonksiyonel tanımlarından, I/O listelerinden ve onaylı kablolama şemalarından uygulanabilir.",
      en: "Control philosophy can be implemented from customer functional descriptions, I/O lists and approved wiring diagrams.",
    },
    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "transfer",
    code: "ATS / AMF",
    name: {
      tr: "ATS / AMF / Jeneratör Kontrol & Senkronizasyon",
      en: "ATS / AMF / Generator Control & Synchronisation",
    },
    tagline: {
      tr: "Beslemenin sürekliliği için transfer ve yedek güç kontrolü.",
      en: "Transfer and backup-power control for continuity of supply.",
    },
    overview: {
      tr: "Transfer panoları; normal ve yedek kaynakları net durum göstergesi, kilitlemeler ve projeye özel çalışma mantığıyla koordine eder.",
      en: "Transfer panels coordinate normal and backup sources with clear status indication, interlocks and project-defined operating logic.",
    },
    applications: [
      { tr: "Fabrikalar", en: "Factories" },
      { tr: "Ticari binalar", en: "Commercial buildings" },
      { tr: "Kritik tesisler", en: "Critical facilities" },
      { tr: "Jeneratör destekli sistemler", en: "Generator-backed systems" },
    ],
    features: [
      { tr: "Otomatik transfer mantığı", en: "Automatic transfer logic" },
      { tr: "Otomatik şebeke arıza (AMF) fonksiyonları", en: "Automatic mains failure functions" },
      { tr: "Jeneratör start / stop arayüzü", en: "Generator start / stop interface" },
      { tr: "Mekanik ve elektriksel kilitlemeler", en: "Mechanical and electrical interlocks" },
      { tr: "Jeneratör kontrol entegrasyonu", en: "Generator control integration" },
      { tr: "Belirtilen yerlerde senkronizasyon / yük paylaşımı desteği", en: "Synchronisation / load sharing support where specified" },
    ],
    options: [
      { tr: "Tekli veya çoklu kaynak konfigürasyonları", en: "Single or multiple source configurations" },
      { tr: "Projeye göre açık veya kapalı geçiş", en: "Open or closed transition according to project" },
      { tr: "Sayaçlama ve durum göstergesi", en: "Metering and status indication" },
      { tr: "Özel mimik diyagram", en: "Custom mimic diagram" },
      { tr: "Haberleşme arayüzü", en: "Communication interface" },
      { tr: "Projeye özel alarm felsefesi", en: "Project-specific alarm philosophy" },
    ],
    note: {
      tr: "Anahtarlama felsefesi, kaynak değerleri ve kilitleme mantığı; net ve güvenli bir çalışma sırası sağlamak için üretimden önce gözden geçirilir.",
      en: "Switching philosophy, source ratings and interlocking logic are reviewed before production to ensure a clear and safe operating sequence.",
    },
    image: "https://images.unsplash.com/photo-1637708546473-301bd8309216?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "pq",
    code: "PQ",
    name: { tr: "Kompanzasyon & Güç Kalitesi Panoları", en: "Compensation & Power Quality Panels" },
    tagline: {
      tr: "Reaktif güç düzeltme ve harmonik odaklı pano paketleri.",
      en: "Reactive power correction and harmonic-conscious panel packages.",
    },
    overview: {
      tr: "Güç kalitesi panoları; güç faktörünü iyileştirmek ve elektrik sistemi performansını desteklemek için proje yük profiline göre yapılandırılır.",
      en: "Power-quality panels are configured around the project load profile to improve power factor and support electrical-system performance.",
    },
    applications: [
      { tr: "Endüstriyel tesisler", en: "Industrial plants" },
      { tr: "Ticari tesisler", en: "Commercial facilities" },
      { tr: "Altyapı hizmetleri", en: "Utilities" },
      { tr: "Değişken harmonik içerikli proses yükleri", en: "Process loads with variable harmonic content" },
    ],
    features: [
      { tr: "Otomatik veya sabit kompanzasyon", en: "Automatic or fixed compensation" },
      { tr: "Kondansatör bataryası düzenlemeleri", en: "Capacitor bank arrangements" },
      { tr: "Güç faktörü kontrolör entegrasyonu", en: "Power factor controller integration" },
      { tr: "Detune reaktör seçenekleri", en: "Detuned reactor options" },
      { tr: "Sayaçlama ve alarm fonksiyonları", en: "Metering and alarm functions" },
      { tr: "Bakımı kolay kondansatör / reaktör yerleşimi", en: "Maintainable capacitor / reactor layout" },
    ],
    options: [
      { tr: "Projeye özel kondansatör kademeleri", en: "Project-specific capacitor steps" },
      { tr: "Detune veya harmonik odaklı uygulama", en: "Detuned or harmonic-oriented execution" },
      { tr: "Belirtilen yerlerde aktif harmonik filtre entegrasyonu", en: "Active harmonic filter integration where specified" },
      { tr: "Özel sayaçlama ve alarmlar", en: "Custom metering and alarms" },
      { tr: "İsteğe bağlı kaplamalı bakır baralar", en: "Optional plated copper busbars" },
    ],
    note: {
      tr: "Nihai kompanzasyon ve harmonik konfigürasyonu, yalnızca kurulu güce değil, ölçülen veya hesaplanan şebeke koşullarına dayanmalıdır.",
      en: "Final compensation and harmonic configuration should be based on measured or calculated network conditions, not only nominal installed power.",
    },
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "dc-ups",
    code: "DC / UPS",
    name: {
      tr: "DC Dağıtım / Redresör / UPS Yardımcı Panoları",
      en: "DC Distribution / Rectifier / UPS Auxiliary Panels",
    },
    tagline: {
      tr: "Kontrol ve yedek sistemler için yardımcı DC ve kritik güç dağıtımı.",
      en: "Auxiliary DC and critical-power distribution for control and backup systems.",
    },
    overview: {
      tr: "DC ve UPS yardımcı panoları; kontrol, koruma ve yedek sistemler tarafından kullanılan alçak gerilim DC devrelerini ve ilgili yardımcı beslemeleri dağıtır ve korur.",
      en: "DC and UPS auxiliary panels distribute and protect low-voltage DC circuits and related auxiliary supplies used by control, protection and backup systems.",
    },
    applications: [
      { tr: "Trafo merkezleri ve koruma sistemleri", en: "Substations and protection systems" },
      { tr: "Endüstriyel kontrol sistemleri", en: "Industrial control systems" },
      { tr: "UPS kurulumları", en: "UPS installations" },
      { tr: "Akü / şarj cihazı sistemleri", en: "Battery / charger systems" },
    ],
    features: [
      { tr: "DC besleme dağıtımı", en: "DC feeder distribution" },
      { tr: "Akü şarj cihazı / redresör entegrasyonu", en: "Battery charger / rectifier integration" },
      { tr: "Sigorta veya kesici koruması", en: "Fuse or breaker protection" },
      { tr: "Durum ve alarm göstergesi", en: "Status and alarm indication" },
      { tr: "Net ayrılmış DC kablolama", en: "Clearly segregated DC wiring" },
    ],
    options: [
      { tr: "24 / 48 / 110 / 220 VDC konfigürasyonları", en: "24 / 48 / 110 / 220 VDC configurations" },
      { tr: "Yedekli şarj cihazı düzenlemeleri", en: "Redundant charger arrangements" },
      { tr: "UPS bypass / yardımcı dağıtım", en: "UPS bypass / auxiliary distribution" },
      { tr: "Akü ayırıcı / yardımcı dağıtım", en: "Battery disconnect / auxiliary distribution" },
      { tr: "Gerektiğinde toprak arızası / izolasyon izleme", en: "Ground-fault / insulation monitoring where required" },
    ],
    note: {
      tr: "DC sistem voltajı, topraklama felsefesi ve koruma konsepti proje spesifikasyonundan teyit edilir.",
      en: "DC system voltage, earthing philosophy and protection concept are confirmed from the project specification.",
    },
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "pv",
    code: "PV",
    name: { tr: "Solar PV Panel Paketleri", en: "Solar PV Panel Packages" },
    tagline: {
      tr: "PV sistemleri için AC/DC dağıtım, kombiner ve arayüz panoları.",
      en: "AC/DC distribution, combiner and interface panels for PV systems.",
    },
    overview: {
      tr: "PV pano paketleri; proje mimarisine göre string'ler, inverterler, yardımcı sistemler ve tesis dağıtımı arasındaki elektriksel arayüzü destekler.",
      en: "PV panel packages support the electrical interface between strings, inverters, auxiliary systems and plant distribution according to project architecture.",
    },
    applications: [
      { tr: "Endüstriyel çatı üstü GES", en: "Industrial rooftop PV" },
      { tr: "Ticari GES", en: "Commercial PV" },
      { tr: "Lisanslı büyük ölçekli projeler", en: "Utility-scale projects" },
      { tr: "Hibrit enerji sistemleri", en: "Hybrid energy systems" },
    ],
    features: [
      { tr: "AC dağıtım ve arayüz panoları", en: "AC distribution and interface panels" },
      { tr: "DC kombiner / dağıtım seçenekleri", en: "DC combiner / distribution options" },
      { tr: "Koruma ve izolasyon", en: "Protection and isolation" },
      { tr: "Sayaçlama ve haberleşme arayüzleri", en: "Metering and communication interfaces" },
      { tr: "Net saha kablo düzenlemesi", en: "Clear field cable organization" },
    ],
    options: [
      { tr: "String / inverter'a özel konfigürasyonlar", en: "String / inverter specific configurations" },
      { tr: "Sürge koruması seçimi", en: "Surge protection selection" },
      { tr: "Dış mekân IP korumalı yapı", en: "Outdoor IP-rated construction" },
      { tr: "Paslanmaz çelik seçeneği", en: "Stainless steel option" },
      { tr: "Müşteri tanımlı izleme cihazları", en: "Customer-specified monitoring devices" },
      { tr: "Özel kablo rakoru ve giriş plakaları", en: "Custom cable gland and entry plates" },
    ],
    note: {
      tr: "PV DC voltajı, polarite, kısa devre akımı, çevresel koşullar ve geçerli proje gereksinimleri bileşen seçiminden önce gözden geçirilir.",
      en: "PV DC voltage, polarity, short-circuit current, environmental conditions and applicable project requirements are reviewed before component selection.",
    },
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "bess",
    code: "BESS",
    name: { tr: "BESS Yardımcı Panoları", en: "BESS Auxiliary Panels" },
    tagline: {
      tr: "Enerji depolama sistemleri için yardımcı dağıtım ve kontrol dolapları.",
      en: "Auxiliary distribution and control cabinets for battery energy storage systems.",
    },
    overview: {
      tr: "BESS yardımcı panoları; HVAC, yangın sistemi arayüzleri, kontrol gücü, haberleşme ve saha dengeleme elektrik dağıtımını destekleyebilir.",
      en: "BESS auxiliary panels can support HVAC, fire-system interfaces, control power, communications and balance-of-plant electrical distribution.",
    },
    applications: [
      { tr: "Konteyner tipi BESS", en: "Containerized BESS" },
      { tr: "Endüstriyel enerji depolama", en: "Industrial energy storage" },
      { tr: "Güneş + depolama sistemleri", en: "Solar + storage" },
      { tr: "Puant tıraşlama ve yedekleme sistemleri", en: "Peak-shaving and backup systems" },
    ],
    features: [
      { tr: "Yardımcı AC/DC dağıtım", en: "Auxiliary AC/DC distribution" },
      { tr: "Kontrol ve izleme gücü", en: "Control and monitoring power" },
      { tr: "HVAC / yangın arayüzü desteği", en: "HVAC / fire interface support" },
      { tr: "Haberleşme ve ağ ayrımı", en: "Communication and network segregation" },
      { tr: "Bakım dostu yerleşim", en: "Maintenance-friendly layout" },
    ],
    options: [
      { tr: "İç mekân veya konteyner tipi uygulama", en: "Indoor or containerized execution" },
      { tr: "Paslanmaz çelik seçenekleri", en: "Stainless steel options" },
      { tr: "Özel haberleşme ekipmanı", en: "Custom communication equipment" },
      { tr: "Projeye özel terminal yapısı", en: "Project-specific terminal structure" },
      { tr: "UPS / DC yedekleme arayüzleri", en: "UPS / DC backup interfaces" },
    ],
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "ev",
    code: "EV",
    name: { tr: "EV Şarj Dağıtım Panoları", en: "EV Charging Distribution Panels" },
    tagline: {
      tr: "EV şarj altyapısı için güç dağıtımı ve yük yönetimi arayüzleri.",
      en: "Power distribution and load-management interfaces for EV charging infrastructure.",
    },
    overview: {
      tr: "EV şarj panoları; şarj noktalarına güç dağıtır ve şarj mimarisinin gerektirdiği koruma, sayaçlama ve yük yönetimi arayüzlerini entegre eder.",
      en: "EV charging panels distribute power to charging points and integrate protection, metering and load-management interfaces required by the charging architecture.",
    },
    applications: [
      { tr: "Filo şarjı", en: "Fleet charging" },
      { tr: "Ticari şarj merkezleri", en: "Commercial charging hubs" },
      { tr: "Endüstriyel sahalar", en: "Industrial sites" },
      { tr: "Otopark tesisleri", en: "Parking facilities" },
    ],
    features: [
      { tr: "Özel şarj cihazı beslemeleri", en: "Dedicated charger feeders" },
      { tr: "Koruma ve izolasyon", en: "Protection and isolation" },
      { tr: "Sayaçlama ve yük yönetimi arayüzü", en: "Metering and load management interface" },
      { tr: "Genişleme kapasitesi", en: "Expansion capacity" },
      { tr: "Net devre tanımlama", en: "Clear circuit identification" },
    ],
    options: [
      { tr: "AC veya DC şarj cihazı besleme mimarisi", en: "AC or DC charger feeder architecture" },
      { tr: "Dinamik yük yönetimi arayüzü", en: "Dynamic load-management interface" },
      { tr: "Dış mekân paslanmaz veya boyalı muhafaza", en: "Outdoor stainless or painted enclosure" },
      { tr: "Gerektiğinde MID / sayaç entegrasyonu", en: "MID / meter integration where required" },
      { tr: "Müşteri tanımlı şarj cihazı markaları", en: "Customer-specified charger brands" },
      { tr: "Gelecekteki şarj cihazları için yedek besleme", en: "Future charger reserve feeders" },
    ],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "wind",
    code: "WIND",
    name: { tr: "Rüzgar / Yenilenebilir Enerji Panoları", en: "Wind / Renewable Energy Panels" },
    tagline: {
      tr: "Yenilenebilir enerji projeleri için kontrol, koruma ve yardımcı dağıtım.",
      en: "Control, protection and auxiliary distribution for renewable-energy projects.",
    },
    overview: {
      tr: "Yenilenebilir enerji pano paketleri; projeye özel kontrol ve dağıtımın gerektiği rüzgar, hibrit ve yardımcı enerji uygulamalarını destekleyebilir.",
      en: "Renewable-energy panel packages can support wind, hybrid and auxiliary energy applications where project-specific control and distribution are required.",
    },
    applications: [
      { tr: "Rüzgar çiftlikleri", en: "Wind farms" },
      { tr: "Hibrit enerji sistemleri", en: "Hybrid energy systems" },
      { tr: "Uzak enerji sahaları", en: "Remote energy sites" },
      { tr: "Yardımcı yenilenebilir sistemler", en: "Auxiliary renewable systems" },
    ],
    features: [
      { tr: "Yardımcı dağıtım", en: "Auxiliary distribution" },
      { tr: "Koruma ve sayaçlama", en: "Protection and metering" },
      { tr: "Kontrol ve haberleşme arayüzleri", en: "Control and communication interfaces" },
      { tr: "Dış ortam koşulları değerlendirmesi", en: "Outdoor environment considerations" },
      { tr: "Uzaktan izleme arayüzü", en: "Remote monitoring interface" },
    ],
    options: [
      { tr: "Paslanmaz veya korozyona dayanıklı muhafaza", en: "Stainless or corrosion-resistant enclosure" },
      { tr: "Isıtıcı / havalandırma / iklim seçenekleri", en: "Heater / ventilation / climate options" },
      { tr: "Müşteri haberleşme mimarisi", en: "Customer communication architecture" },
      { tr: "Özel kablo giriş çözümleri", en: "Special cable-entry solutions" },
      { tr: "Uygun yerlerde kaplamalı bakır baralar", en: "Plated copper busbars where suitable" },
    ],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "special",
    code: "SPECIAL",
    name: { tr: "Paslanmaz Çelik & Dış Mekân Panolar", en: "Stainless Steel & Outdoor Panels" },
    tagline: {
      tr: "Zorlu, ıslak ve korozif ortamlar için dayanıklı muhafaza çözümleri.",
      en: "Robust enclosure solutions for harsh, wet and corrosive environments.",
    },
    overview: {
      tr: "Dış mekân ve paslanmaz pano paketleri; muhafaza malzemesi, koruma sınıfı ve çevresel dayanımın temel tasarım kriteri olduğu uygulamalar için hazırlanır.",
      en: "Outdoor and stainless panel packages are prepared for applications where enclosure material, ingress protection and environmental resistance are key design drivers.",
    },
    applications: [
      { tr: "Gıda ve içecek", en: "Food and beverage" },
      { tr: "Dış mekân tesisat sistemleri", en: "Outdoor utilities" },
      { tr: "Deniz / kıyı sahaları", en: "Marine / coastal sites" },
      { tr: "Kimyasal ve endüstriyel ortamlar", en: "Chemical and industrial environments" },
    ],
    features: [
      { tr: "304 veya 316 paslanmaz çelik seçenekleri", en: "304 or 316 stainless steel options" },
      { tr: "Projeye göre IP korumalı yapı", en: "IP-rated construction according to project" },
      { tr: "Havaya karşı korumalı kablo girişi", en: "Weather-protected cable entry" },
      { tr: "Gland plaka özelleştirmesi", en: "Gland plate customization" },
      { tr: "Ortama göre kapı / muhafaza donanımı", en: "Door / enclosure hardware selected for environment" },
    ],
    options: [
      { tr: "Fırçalanmış veya projeye özel yüzey işlemi", en: "Brushed or project-defined finish" },
      { tr: "Kanopi / güneş kalkanı seçenekleri", en: "Canopy / sunshield options" },
      { tr: "Yoğuşma önleyici ısıtıcı", en: "Anti-condensation heater" },
      { tr: "Fan / filtre / klima seçenekleri", en: "Fan / filter / air-conditioning options" },
      { tr: "Talep üzerine kalay / gümüş kaplamalı bakır baralar", en: "Tin / silver plated copper busbars on request" },
    ],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "oem",
    code: "OEM",
    name: { tr: "Özel OEM / Seri Panolar", en: "Custom OEM / Series Panels" },
    tagline: {
      tr: "Entegratörler ve OEM müşteriler için tekrarlanabilir, çizime göre üretim.",
      en: "Repeatable build-to-print panel packages for integrators and OEM customers.",
    },
    overview: {
      tr: "Tekrar siparişler için Eurasia, müşterinin onaylı BOM'u, çizimleri, terminal çizelgeleri ve etiketleme kurallarına dayalı sabit bir pano üretimini koordine edebilir.",
      en: "For repeat orders, Euroasia can coordinate a fixed panel build based on the customer's approved BOM, drawings, terminal schedules and labeling rules.",
    },
    applications: [
      { tr: "Makine üreticileri", en: "Machine builders" },
      { tr: "Sistem entegratörleri", en: "System integrators" },
      { tr: "Pano taşeronluğu", en: "Panel subcontracting" },
      { tr: "Tekrar eden ihracat siparişleri", en: "Repeat export orders" },
    ],
    features: [
      { tr: "Sabitlenmiş BOM ve onaylı çizim paketi", en: "Frozen BOM and approved drawing package" },
      { tr: "Tekrarlanabilir kablolama ve etiketleme yaklaşımı", en: "Repeatable wiring and labeling approach" },
      { tr: "Seri numarası ve revizyon takibi", en: "Serial number and revision tracking" },
      { tr: "İhracata hazır paketleme", en: "Packaging prepared for export" },
      { tr: "Revizyonlar arası değişiklik kontrolü", en: "Change control between revisions" },
    ],
    options: [
      { tr: "Müşteri tarafından sağlanan veya Eurasia kaynaklı BOM", en: "Customer-supplied BOM or Euroasia-sourced BOM" },
      { tr: "Çerçeve / tekrar sipariş modeli", en: "Framework / repeat-order model" },
      { tr: "Önceden onaylanmış alternatifler", en: "Pre-agreed approved alternatives" },
      { tr: "Özel etiket ve belgeleme dili", en: "Custom labels and documentation language" },
      { tr: "Yedek bileşen kiti seçenekleri", en: "Spare component kit options" },
      { tr: "Yasal olarak uygun olduğunda özel etiket / proje etiketi üretimi", en: "Private-label / project-label execution where legally appropriate" },
    ],
    image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1600&auto=format&fit=crop",
  },
];

function withDe(list: BaseText[], de: string[] | undefined): LocalizedText[] {
  return list.map((t, i) => ({ ...t, de: de?.[i] ?? t.en }));
}

function one(t: BaseText, de: string | undefined): LocalizedText {
  return { ...t, de: de ?? t.en };
}

export const categories: Category[] = baseCategories.map((c) => {
  const de = categoriesDe[c.slug];
  return {
    ...c,
    name: one(c.name, de?.name),
    tagline: one(c.tagline, de?.tagline),
    overview: one(c.overview, de?.overview),
    applications: withDe(c.applications, de?.applications),
    features: withDe(c.features, de?.features),
    options: withDe(c.options, de?.options),
    note: c.note ? one(c.note, de?.note) : undefined,
  };
});

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
