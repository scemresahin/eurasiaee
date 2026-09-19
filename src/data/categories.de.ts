/**
 * German content for the panel families. Terminology follows the official
 * German catalogue (Euroasia_Europe_Electrical_Panel_Catalogue_V18_DE).
 * Arrays are index-aligned with the TR/EN source in categories.ts.
 */
export interface CategoryDe {
  name: string;
  tagline: string;
  overview: string;
  applications: string[];
  features: string[];
  options: string[];
  note?: string;
}

export const categoriesDe: Record<string, CategoryDe> = {
  mdb: {
    name: "Niederspannungs-Hauptverteilungen",
    tagline: "Primäre Niederspannungsverteilung für Industrie- und Gewerbeanlagen.",
    overview:
      "MDB-Pakete übernehmen die Haupteinspeisung und verteilen Energie an nachgelagerte Abgänge – mit Schutz, Messung und projektspezifischer Unterteilung.",
    applications: ["Industrieanlagen", "Fabriken und Produktionslinien", "Gewerbe- und Logistikanlagen", "Infrastrukturprojekte"],
    features: [
      "Einspeise- und Abgangsfelder",
      "ACB-/MCCB-Anordnung gemäß Projekt",
      "Integration von Messung und Schutz",
      "Innere Unterteilung gemäß Projektanforderung",
      "Buskupplung und Doppelspeisung optional",
      "Kabeleinführung oben oder unten",
      "Modularer, wartungsfreundlicher Feldaufbau",
      "Reserveabgänge und Platz für spätere Erweiterungen",
    ],
    options: [
      "Kupferschienen optional verzinnt oder versilbert",
      "Bevorzugte Schalter-/Messgerätefabrikate und Modelle",
      "Innen- oder Außenausführung mit definierter IP-Schutzart",
      "Sonder-RAL-Farbe und kundenspezifische Kennzeichnung",
    ],
    note: "Für anspruchsvolle oder korrosive Umgebungen können Kupferschienen verzinnt oder versilbert geliefert werden.",
  },
  smdb: {
    name: "Unterverteilungen",
    tagline: "Flexible Sekundärverteilung nahe an Verbrauchern und Anlagenbereichen.",
    overview:
      "SMDBs ermöglichen eine strukturierte Sekundärverteilung für Gebäude, Produktionsbereiche, Versorgungseinrichtungen und Technikräume – wartungs- und erweiterungsfreundlich ausgeführt.",
    applications: ["Gebäudeetagen und Technikräume", "Produktionsbereiche", "Lager und Logistik", "Versorgungs- und Servicebereiche"],
    features: [
      "MCB-/MCCB-Abgänge",
      "Messung und Untermessung optional",
      "Eindeutige Stromkreiskennzeichnung",
      "Kompakte Wand- oder Standmontage",
      "Strukturierte N- und PE-Schienen",
      "Unterteilung und Zugang wartungsgerecht geplant",
      "Reserveplätze für zukünftige Stromkreise",
    ],
    options: [
      "Abgangsliste nach Kundenvorgabe",
      "Hauptschalter oder MCCB-Einspeisung",
      "Überspannungsschutz und Messoptionen",
      "Sonderabmessungen des Gehäuses",
      "Außen- / Edelstahlausführung",
    ],
    note: "Der SMDB-Aufbau kann direkt aus Ihrem Einlinienschema und Ihrer Abgangsliste erfolgen. Das reduziert den Montageaufwand vor Ort und vereinfacht die Installation.",
  },
  pcc: {
    name: "Power Control Center",
    tagline: "Zentrale Abgangsverteilung und Leistungssteuerung für Prozessanlagen.",
    overview:
      "PCCs verbinden Verteilung, Schutz und Abgangssteuerung in einer koordinierten Einheit für Projekte mit strukturierter, leistungsstarker Niederspannungsverteilung.",
    applications: ["Prozessanlagen", "Fertigung", "Versorgungsanlagen", "Große Gewerbeanlagen"],
    features: [
      "Einspeise-, Abgangs- und Buskupplungsfelder",
      "Strukturierte Hochstromabgänge",
      "Messung, Schutz und Signalisierung",
      "Verriegelte Schaltlogiken",
      "Platz für spätere Erweiterungen",
    ],
    options: [
      "Feste oder herausnehmbare Abgangskonzepte",
      "Form 2 / 3 / 4 bei entsprechender Spezifikation",
      "Beschichtungsoptionen für Kupferschienen",
      "Verschiedene Kabeleinführungsrichtungen",
      "Bevorzugte Schutzrelais und Messgeräte",
      "Kommunikationsfähige Messarchitektur",
    ],
    note: "Bemessungsdaten, Kurzschlussfestigkeit und innere Unterteilung werden vor der Montage bestätigt und im freigegebenen Projektumfang dokumentiert.",
  },
  mcc: {
    name: "Motorsteuerzentren",
    tagline: "Motorstart, Schutz und Steuerung für zuverlässigen Betrieb.",
    overview:
      "MCC-Pakete bündeln Motorabgänge, Schutz, Trennung und Steuerung für Produktionslinien, Versorgungseinrichtungen und Prozessanlagen.",
    applications: ["Motoren und Pumpen", "Lüfter und Lüftung", "Förderanlagen", "Prozesslinien und OEM-Maschinen"],
    features: [
      "Direkt-, Stern-Dreieck- und Wendestarter",
      "Motorschutz- und Überlastfunktionen",
      "Vor-Ort-/Fernsteuerungsschnittstellen",
      "Verriegelungen und Statusanzeigen",
      "Eindeutige Klemmenkennzeichnung",
      "Reserveabgänge und Erweiterungskapazität",
    ],
    options: [
      "Motorabgangsliste nach Kundenvorgabe",
      "Optionen für Steuerspannungen",
      "SPS- / Netzwerkschnittstelle",
      "Fest- oder Einschubtechnik gemäß Projekt",
      "Bevorzugte Schütz- und Schutzgerätefabrikate",
      "Kundenspezifische Verdrahtung und mehrsprachige Kennzeichnung",
    ],
    note: "MCCs können auf Basis Ihrer Motorliste, Ihres Einlinienschemas, Ihrer Steuerphilosophie und Ihrer bevorzugten Komponentenliste ausgelegt werden.",
  },
  machine: {
    name: "Maschinen-Leistungs- & Steuerschränke",
    tagline: "Komplette elektrische Pakete für Maschinen, Skids und Produktionsanlagen.",
    overview:
      "Maschinenschaltschränke integrieren Einspeisung, Abgangsschutz, Motorabgänge, Steuerung und Bedienerschnittstellen in einem werkseitig vorbereiteten Paket.",
    applications: ["OEM-Maschinen", "Verpackungs- und Prozessanlagen", "Skids", "Produktionszellen"],
    features: [
      "Leistung und Steuerung in einem Gehäuse",
      "Maschinenspezifische Verdrahtung und Klemmenplan",
      "Verriegelungen und Sicherheitsschnittstellen",
      "Bediengeräte und HMI-Integration",
      "Eindeutige Servicekennzeichnung",
      "Anschlüsse für Sensoren und Aktoren",
    ],
    options: [
      "Build-to-Print nach Kundenzeichnungen",
      "Kunden-BOM und bevorzugte Fabrikate",
      "220/230/24-V-Steuerarchitekturen",
      "Remote I/O und Netzwerk-Gateways",
      "Edelstahl- oder lackiertes Gehäuse",
      "Serienfertigung und Konfiguration für Wiederholaufträge",
    ],
    note: "Für OEM-Kunden kann eine eingefrorene BOM mit Zeichnungspaket genutzt werden, um dieselbe Schaltschrankkonfiguration bei Wiederholaufträgen zu reproduzieren.",
  },
  "plc-hmi-scada": {
    name: "SPS / HMI / SCADA-Schnittstellenschränke",
    tagline: "Automatisierungs- und Schnittstellenschränke für Maschinen- und Prozesssteuerung.",
    overview:
      "Automatisierungsschränke bündeln SPS, HMI, Remote I/O, Kommunikation und Schnittstellenhardware für vom Kunden oder Projektengineering definierte Steuerarchitekturen.",
    applications: ["Prozessautomatisierung", "Maschinenautomatisierung", "Remote-I/O-Stationen", "Kommunikationsschnittstellen in Anlagen"],
    features: [
      "SPS- und Remote-I/O-Integration",
      "HMI- und Bedienerschnittstelle",
      "Kommunikations-Gateways",
      "Strukturierte Kleinspannungsverdrahtung",
      "Wartungsfreundlicher, gekennzeichneter Aufbau",
    ],
    options: [
      "Schaltschrankauslegung auf Basis der I/O-Liste",
      "SPS-/HMI-Fabrikat und Modell nach Kundenvorgabe",
      "PROFINET-/Modbus-/Ethernet-Integration",
      "Klemmen- und Netzwerksegmentierung",
      "Mehrsprachige Kennzeichnung",
      "Industrial-Ethernet-Switch-/Gateway-Optionen",
    ],
    note: "Softwareentwicklung ist nicht automatisch enthalten. Hardware, Schaltschrankmontage und Kommunikationsarchitektur werden gemäß vereinbartem Projektumfang geliefert.",
  },
  drives: {
    name: "Frequenzumrichter- & Sanftstarter-Schränke",
    tagline: "Drehzahlregelung und Sanftanlauf für anspruchsvolle Motoranwendungen.",
    overview:
      "Antriebsschränke integrieren Frequenzumrichter oder Sanftstarter mit Trennung, Schutz, Bypass, Kühlung und Steuerung in einem abgestimmten Gehäuse.",
    applications: ["Pumpen", "Lüfter und Lüftung", "Förderanlagen", "Kompressoren und Prozessanlagen"],
    features: [
      "Integration von Frequenzumrichter oder Sanftstarter",
      "Eingangs- und Motorschutz",
      "Kühl- und Lüftungskonzept",
      "Manueller oder automatischer Bypass",
      "Vor-Ort- / Fernbetrieb",
      "Automatisierungs- und Rückmeldeschnittstellen",
    ],
    options: [
      "Antriebsfabrikat und Modell nach Kundenvorgabe",
      "Netzdrosseln / Filter bei Bedarf",
      "Verschiedene Kühlkonzepte",
      "Mehrere Antriebsfelder",
      "Edelstahl- oder lackiertes Gehäuse",
    ],
    note: "Antriebsauswahl, Wärmeabfuhr und Belüftung werden anhand von Lastprofil, Umgebungsbedingungen und gewählter Ausrüstung geprüft.",
  },
  hvac: {
    name: "HLK- / Lüfter- / Pumpensteuerschränke",
    tagline: "Spezifische Steuerungspakete für Gebäudetechnik und Versorgungssysteme.",
    overview:
      "HLK- und Pumpenschaltschränke kombinieren Motorsteuerung, Automatisierungsschnittstellen, Alarme und Betriebsarten für mechanische Anlagen und Versorgungssysteme.",
    applications: ["RLT-Anlagen", "Druckerhöhungs- und Transferpumpen", "Abluft- / Zuluftventilatoren", "Kühl- und Lüftungssysteme"],
    features: [
      "Integration von Pumpen- und Lüfterabgängen",
      "Betriebs-/Reserve-Logikschnittstellen",
      "FU- / Sanftstarter-Optionen",
      "Vor-Ort- / Fernbetrieb",
      "Alarm- und Statusanzeige",
      "Schaltschrankkühlung oder Heizung optional",
    ],
    options: [
      "Mehrpumpen- / Mehrlüfterkonfigurationen",
      "Schnittstellen für Füllstand / Druck / Temperatur",
      "Steuerphilosophie nach Kundenvorgabe",
      "GLT-Kommunikationsgateway",
      "Außen- oder Edelstahlausführung",
    ],
    note: "Die Steuerphilosophie kann anhand von Funktionsbeschreibungen, I/O-Listen und freigegebenen Schaltplänen des Kunden umgesetzt werden.",
  },
  transfer: {
    name: "ATS / AMF / Generatorsteuerung & Synchronisierung",
    tagline: "Umschalt- und Ersatzstromsteuerung für hohe Versorgungskontinuität.",
    overview:
      "Umschaltschränke koordinieren Normal- und Ersatzstromquellen mit eindeutiger Statusanzeige, Verriegelungen und projektspezifischer Betriebslogik.",
    applications: ["Fabriken", "Gewerbegebäude", "Kritische Einrichtungen", "Generatorgestützte Systeme"],
    features: [
      "Automatische Umschaltlogik",
      "AMF-Funktionen bei Netzausfall",
      "Generator-Start-/Stopp-Schnittstelle",
      "Mechanische und elektrische Verriegelungen",
      "Integration der Generatorsteuerung",
      "Synchronisierung / Lastteilung bei Spezifikation",
    ],
    options: [
      "Konfigurationen mit einer oder mehreren Quellen",
      "Offene oder geschlossene Umschaltung gemäß Projekt",
      "Messung und Statusanzeige",
      "Kundenspezifisches Blindschaltbild",
      "Kommunikationsschnittstelle",
      "Projektspezifische Alarmphilosophie",
    ],
    note: "Schaltphilosophie, Quellenleistungen und Verriegelungslogik werden vor der Fertigung geprüft, um einen klaren und sicheren Betriebsablauf zu gewährleisten.",
  },
  pq: {
    name: "Kompensations- & Netzqualitätsschränke",
    tagline: "Blindleistungskompensation und oberschwingungsgerechte Schaltschrankpakete.",
    overview:
      "Netzqualitätsschränke werden anhand des Lastprofils ausgelegt, um den Leistungsfaktor zu verbessern und die Leistungsfähigkeit des elektrischen Systems zu unterstützen.",
    applications: ["Industrieanlagen", "Gewerbeanlagen", "Versorgungsanlagen", "Prozesslasten mit variablem Oberschwingungsanteil"],
    features: [
      "Automatische oder feste Kompensation",
      "Kondensatorbank-Anordnungen",
      "Integration des Blindleistungsreglers",
      "Verdrosselte Ausführung optional",
      "Mess- und Alarmfunktionen",
      "Wartungsfreundlicher Kondensator-/Drosselaufbau",
    ],
    options: [
      "Projektspezifische Kondensatorstufen",
      "Verdrosselte oder harmonikoptimierte Ausführung",
      "Integration aktiver Oberschwingungsfilter bei Spezifikation",
      "Kundenspezifische Messung und Alarme",
      "Optional beschichtete Kupferschienen",
    ],
    note: "Die endgültige Kompensations- und Oberschwingungsauslegung sollte auf gemessenen oder berechneten Netzbedingungen basieren, nicht nur auf der installierten Nennleistung.",
  },
  "dc-ups": {
    name: "DC-Verteilungen / Gleichrichter / USV-Hilfsschränke",
    tagline: "DC-Hilfs- und kritische Energieverteilung für Steuer- und Backup-Systeme.",
    overview:
      "DC- und USV-Hilfsschränke verteilen und schützen DC-Niederspannungskreise und zugehörige Hilfsversorgungen für Steuerungs-, Schutz- und Backup-Systeme.",
    applications: ["Umspannwerke und Schutzsysteme", "Industrielle Steuerungssysteme", "USV-Anlagen", "Batterie- / Ladegerätesysteme"],
    features: [
      "DC-Abgangsverteilung",
      "Integration von Ladegerät / Gleichrichter",
      "Sicherungs- oder Leistungsschalterschutz",
      "Status- und Alarmanzeige",
      "Klar getrennte DC-Verdrahtung",
    ],
    options: [
      "24 / 48 / 110 / 220 VDC-Konfigurationen",
      "Redundante Ladegeräteanordnung",
      "USV-Bypass / Hilfsverteilung",
      "Batterietrennung / Hilfsverteilung",
      "Erdschluss- / Isolationsüberwachung bei Bedarf",
    ],
    note: "DC-Systemspannung, Erdungsphilosophie und Schutzkonzept werden anhand der Projektspezifikation bestätigt.",
  },
  pv: {
    name: "PV-Schaltschrankpakete",
    tagline: "AC/DC-Verteilungen, Combiner und Schnittstellenschränke für PV-Systeme.",
    overview:
      "PV-Schaltschrankpakete bilden gemäß Projektarchitektur die elektrische Schnittstelle zwischen Strings, Wechselrichtern, Hilfssystemen und Anlagenverteilung.",
    applications: ["Industrielle Dach-PV", "Gewerbliche PV-Anlagen", "Utility-Scale-Projekte", "Hybride Energiesysteme"],
    features: [
      "AC-Verteilungen und Schnittstellenschränke",
      "DC-Combiner- / Verteilungsoptionen",
      "Schutz und Trennung",
      "Mess- und Kommunikationsschnittstellen",
      "Strukturierte Feldverkabelung",
    ],
    options: [
      "String-/Wechselrichter-spezifische Konfigurationen",
      "Auswahl des Überspannungsschutzes",
      "Außenausführung mit definierter IP-Schutzart",
      "Edelstahloption",
      "Monitoring-Geräte nach Kundenvorgabe",
      "Kundenspezifische Kabelverschraubungen und Einführungsplatten",
    ],
    note: "PV-DC-Spannung, Polarität, Kurzschlussstrom, Umgebungsbedingungen und geltende Projektanforderungen werden vor der Komponentenauswahl geprüft.",
  },
  bess: {
    name: "BESS-Hilfsschränke",
    tagline: "Hilfsverteilungen und Steuerschränke für Batteriespeichersysteme.",
    overview:
      "BESS-Hilfsschränke können HLK, Schnittstellen zur Brandschutzanlage, Steuerspannung, Kommunikation und die elektrische Verteilung der Anlagenperipherie unterstützen.",
    applications: ["Containerisierte BESS", "Industrielle Energiespeicher", "Solar + Speicher", "Lastspitzenkappung und Backup-Systeme"],
    features: [
      "AC/DC-Hilfsverteilung",
      "Steuer- und Überwachungsspannung",
      "Unterstützung von HLK- / Brandschutz-Schnittstellen",
      "Kommunikations- und Netzwerktrennung",
      "Wartungsfreundlicher Aufbau",
    ],
    options: [
      "Innen- oder Containerausführung",
      "Edelstahloptionen",
      "Kundenspezifische Kommunikationsausrüstung",
      "Projektspezifische Klemmenstruktur",
      "USV- / DC-Backup-Schnittstellen",
    ],
  },
  ev: {
    name: "Verteilungen für E-Ladeinfrastruktur",
    tagline: "Verteilungen und Lastmanagement-Schnittstellen für Ladeinfrastruktur.",
    overview:
      "Ladeschränke verteilen die Energie an Ladepunkte und integrieren Schutz, Messung und die von der Ladearchitektur geforderten Lastmanagement-Schnittstellen.",
    applications: ["Flottenladen", "Gewerbliche Ladehubs", "Industriestandorte", "Parkeinrichtungen"],
    features: [
      "Dedizierte Ladegeräteabgänge",
      "Schutz und Trennung",
      "Messung und Lastmanagement-Schnittstelle",
      "Erweiterungskapazität",
      "Eindeutige Stromkreiskennzeichnung",
    ],
    options: [
      "AC- oder DC-Ladegeräteabgangsarchitektur",
      "Schnittstelle für dynamisches Lastmanagement",
      "Außenausführung in Edelstahl oder lackiert",
      "MID-/Zähler-Integration bei Bedarf",
      "Ladegerätefabrikate nach Kundenvorgabe",
      "Reserveabgänge für zukünftige Ladegeräte",
    ],
  },
  wind: {
    name: "Wind- / Erneuerbare-Energie-Schränke",
    tagline: "Steuerung, Schutz und Hilfsverteilung für Erneuerbare-Energie-Projekte.",
    overview:
      "Schaltschrankpakete für erneuerbare Energien können Wind-, Hybrid- und Hilfsenergieanwendungen unterstützen, bei denen projektspezifische Steuerung und Verteilung erforderlich sind.",
    applications: ["Windparks", "Hybride Energiesysteme", "Abgelegene Energiestandorte", "Hilfssysteme für erneuerbare Energien"],
    features: [
      "Hilfsverteilung",
      "Schutz und Messung",
      "Steuerungs- und Kommunikationsschnittstellen",
      "Berücksichtigung der Umgebungsbedingungen im Außenbereich",
      "Schnittstelle zur Fernüberwachung",
    ],
    options: [
      "Edelstahl- oder korrosionsbeständiges Gehäuse",
      "Heizungs-, Lüftungs- und Klimaoptionen",
      "Kommunikationsarchitektur nach Kundenvorgabe",
      "Spezielle Kabeleinführungslösungen",
      "Beschichtete Kupferschienen, wo geeignet",
    ],
  },
  special: {
    name: "Edelstahl- & Außenschaltschränke",
    tagline: "Robuste Gehäuselösungen für raue, nasse und korrosive Umgebungen.",
    overview:
      "Außen- und Edelstahlschaltschränke werden für Anwendungen vorbereitet, bei denen Gehäusematerial, Schutzart und Umweltbeständigkeit die zentralen Auslegungskriterien sind.",
    applications: ["Lebensmittel und Getränke", "Versorgungsanlagen im Außenbereich", "Maritime / Küstenstandorte", "Chemische und industrielle Umgebungen"],
    features: [
      "304- oder 316-Edelstahloptionen",
      "Projektspezifische IP-Schutzart",
      "Wettergeschützte Kabeleinführung",
      "Anpassung der Kabeleinführungsplatte",
      "Tür- und Gehäusebeschläge passend zur Umgebung",
    ],
    options: [
      "Gebürstete oder projektspezifische Oberfläche",
      "Dach- / Sonnenschutzoptionen",
      "Kondensationsschutzheizung",
      "Lüfter- / Filter- / Klimaanlagenoptionen",
      "Verzinnte / versilberte Kupferschienen auf Anfrage",
    ],
  },
  oem: {
    name: "Kundenspezifische OEM- / Serienschränke",
    tagline: "Reproduzierbare Build-to-Print-Schaltschrankpakete für Integratoren und OEM-Kunden.",
    overview:
      "Für Wiederholaufträge kann Euroasia einen festen Schaltschrankaufbau auf Basis der freigegebenen BOM, Zeichnungen, Klemmenpläne und Kennzeichnungsregeln des Kunden koordinieren.",
    applications: ["Maschinenbauer", "Systemintegratoren", "Schaltschrank-Subunternehmer", "Wiederkehrende Exportaufträge"],
    features: [
      "Eingefrorene BOM und freigegebenes Zeichnungspaket",
      "Reproduzierbare Verdrahtung und Kennzeichnung",
      "Seriennummern- und Revisionsverfolgung",
      "Exportfertige Verpackung",
      "Änderungskontrolle zwischen Revisionen",
    ],
    options: [
      "Kundenseitige oder von Euroasia beschaffte BOM",
      "Rahmen- / Wiederholauftragsmodell",
      "Vorab vereinbarte freigegebene Alternativen",
      "Kundenspezifische Kennzeichnungen und Dokumentationssprache",
      "Optionen für Ersatzteilkits",
      "Private-Label- / Projekt-Label-Ausführung, soweit rechtlich zulässig",
    ],
  },
};
