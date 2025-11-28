export interface Certification {
  id: string;
  name: string;
  shortName: string;
  description: string;
  fullDescription: string;
  icon: string;
  iconType?: "emoji" | "image";
  year?: number;
  category: "origin" | "organic" | "quality" | "international";
}

export const certifications: Certification[] = [
  {
    id: "ig-mar-sierras",
    name: "Indicación Geográfica Mar y Sierras",
    shortName: "IG Mar y Sierras",
    description: "Certificación de origen que garantiza la procedencia del sudeste bonaerense.",
    fullDescription:
      "La Indicación Geográfica 'Kiwi Mar y Sierras' certifica que el kiwi proviene del sudeste bonaerense, una región con condiciones únicas de suelo y clima atlántico que le otorgan características distintivas de calidad, sabor y dulzura. Otorgada por el Ministerio de Agricultura de la Nación en 2022.",
    icon: "/logo-ig.png",
    iconType: "image",
    year: 2022,
    category: "origin",
  },
  {
    id: "organico-argentina",
    name: "Certificación Orgánica Argentina",
    shortName: "Orgánico Argentina",
    description: "Producción sin agroquímicos sintéticos certificada nacionalmente.",
    fullDescription:
      "Certificación otorgada por organismos acreditados que garantiza que nuestros kiwis son producidos siguiendo estrictos estándares orgánicos, sin uso de agroquímicos sintéticos, fertilizantes artificiales ni organismos genéticamente modificados.",
    icon: "🌿",
    category: "organic",
  },
  {
    id: "usda-organic",
    name: "USDA Organic",
    shortName: "USDA Organic",
    description: "Certificación del Departamento de Agricultura de Estados Unidos.",
    fullDescription:
      "El sello USDA Organic certifica que nuestros productos cumplen con los rigurosos estándares orgánicos estadounidenses, permitiendo la exportación a Estados Unidos y garantizando prácticas agrícolas sostenibles reconocidas internacionalmente.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg",
    iconType: "image",
    category: "international",
  },
  {
    id: "global-gap",
    name: "GlobalGAP",
    shortName: "GlobalGAP",
    description: "Estándar internacional de buenas prácticas agrícolas.",
    fullDescription:
      "GlobalGAP es el estándar líder mundial en buenas prácticas agrícolas. Esta certificación garantiza que nuestros procesos de producción cumplen con los más altos estándares de seguridad alimentaria, trazabilidad, medio ambiente y bienestar de los trabajadores.",
    icon: "/logo-globalgap.png",
    iconType: "image",
    category: "quality",
  },
  {
    id: "denominacion-origen",
    name: "Denominación de Origen",
    shortName: "DO Sudeste",
    description: "Reconocimiento oficial de calidad diferenciada por origen.",
    fullDescription:
      "La Denominación de Origen reconoce que el kiwi del sudeste bonaerense posee cualidades únicas derivadas de su medio geográfico, incluyendo factores naturales y humanos. Este reconocimiento protege y distingue nuestro producto a nivel nacional e internacional.",
    icon: "/logo-denominacion-origen.png",
    iconType: "image",
    year: 2022,
    category: "origin",
  },
  {
    id: "certificacion-eu",
    name: "Certificación Orgánica UE",
    shortName: "Orgánico UE",
    description: "Habilitación para exportación orgánica a la Unión Europea.",
    fullDescription:
      "Esta certificación nos permite exportar kiwi orgánico a todos los países de la Unión Europea, cumpliendo con las normativas europeas de producción orgánica y trazabilidad. Fundamental para nuestra operación de exportación a España en 2023.",
    icon: "/logo-ue-organica.png",
    iconType: "image",
    category: "international",
  },
];

export function getCertificationsByCategory(category: Certification["category"]) {
  return certifications.filter((cert) => cert.category === category);
}

export function getPreviewCertifications(count: number = 4) {
  // Retorna las certificaciones más importantes para mostrar en preview
  const priorityOrder = ["ig-mar-sierras", "organico-argentina", "global-gap", "usda-organic"];
  return priorityOrder
    .map((id) => certifications.find((cert) => cert.id === id))
    .filter(Boolean)
    .slice(0, count) as Certification[];
}
