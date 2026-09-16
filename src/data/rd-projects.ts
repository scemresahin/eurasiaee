import type { LocalizedText } from "./categories";

export interface RdProject {
  id: string;
  program: string;
  status: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
}

/**
 * Placeholder R&D project content — explicitly requested as stand-in copy
 * until Eurasia provides the real TÜBİTAK project details. Replace before
 * launch; do not present as verified/official without confirmed data.
 */
export const rdProjects: RdProject[] = [
  {
    id: "akilli-pano-izleme",
    program: "TÜBİTAK 1501",
    status: { tr: "Devam Ediyor", en: "Ongoing" },
    title: {
      tr: "Akıllı Pano İzleme ve Uzaktan Arıza Teşhis Sistemi",
      en: "Smart Panel Monitoring & Remote Fault Diagnostics System",
    },
    summary: {
      tr: "AG panolarında sıcaklık, akım ve temas direncini gerçek zamanlı izleyerek arıza oluşmadan önce uyarı üreten bir izleme modülü geliştirilmesi.",
      en: "Development of a monitoring module that tracks temperature, current and contact resistance in LV panels in real time, generating early-warning alerts before a fault occurs.",
    },
  },
  {
    id: "dijital-ikiz-pano",
    program: "TÜBİTAK 1501",
    status: { tr: "Devam Ediyor", en: "Ongoing" },
    title: {
      tr: "Elektrik Panoları için Dijital İkiz Tasarım Platformu",
      en: "Digital Twin Design Platform for Electrical Panels",
    },
    summary: {
      tr: "Proje BOM'undan otomatik yerleşim ve termal simülasyon üreten, tasarım süresini kısaltmayı hedefleyen bir yazılım altyapısı çalışması.",
      en: "A software infrastructure effort that generates automatic layout and thermal simulation from the project BOM, aiming to shorten design lead time.",
    },
  },
  {
    id: "enerji-verimli-kompanzasyon",
    program: "TÜBİTAK TEYDEB",
    status: { tr: "Tamamlandı", en: "Completed" },
    title: {
      tr: "Değişken Yüklerde Enerji Verimli Otomatik Kompanzasyon Algoritması",
      en: "Energy-Efficient Automatic Compensation Algorithm for Variable Loads",
    },
    summary: {
      tr: "Harmonik içerikli değişken sanayi yüklerinde reaktif güç kademelerini optimize eden bir kontrol algoritmasının geliştirilmesi ve saha testleri.",
      en: "Development and field testing of a control algorithm that optimizes reactive power steps under variable, harmonic-rich industrial loads.",
    },
  },
  {
    id: "korozyona-dayanikli-kaplama",
    program: "TÜBİTAK 1501",
    status: { tr: "Başvuru Aşamasında", en: "In Application" },
    title: {
      tr: "Kıyı ve Kimyasal Ortamlar için Korozyona Dayanıklı Bara Kaplama Ar-Ge Çalışması",
      en: "Corrosion-Resistant Busbar Coating R&D for Marine & Chemical Environments",
    },
    summary: {
      tr: "Standart kalay/gümüş kaplamalara alternatif, tuz ve kimyasal buhara karşı daha uzun ömürlü bir bara yüzey kaplaması geliştirilmesi.",
      en: "Development of a longer-lasting busbar surface coating as an alternative to standard tin/silver plating, resistant to salt and chemical vapor exposure.",
    },
  },
];
