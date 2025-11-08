// data/categoryConfig.ts
export interface Category {
  name: string;
  folder: string;
  description: string;
  imageCount: number;
  firstImage: string;
}

const categoryConfig: Category[] = [
  {
    name: "Attenuation Tank",
    folder: "attenuation-tank",
    description: "Advanced water management systems for sustainable drainage",
    imageCount: 4,
    firstImage: "attenuation-tank-1.jpg",
  },
  {
    name: "Basement",
    folder: "basement",
    description: "Professional basement construction and conversion projects",
    imageCount: 1,
    firstImage: "basement-1.jpg",
  },
  // ... all other categories here
];

export default categoryConfig;
