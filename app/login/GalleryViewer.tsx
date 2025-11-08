"use client";

import { Dispatch, SetStateAction } from "react";
import { Category } from "./types";

export interface GalleryViewerProps {
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  setUnsaved: Dispatch<SetStateAction<boolean>>;
}

export default function GalleryViewer({
  categories,
  setCategories,
  setUnsaved,
}: GalleryViewerProps) {
  const handleUpdateCategory = (index: number, updatedCategory: Category) => {
    const newCategories = [...categories];
    newCategories[index] = updatedCategory;
    setCategories(newCategories);
    setUnsaved(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, idx) => (
        <div key={idx} className="p-4 border rounded-lg bg-white shadow">
          <h2 className="font-bold text-lg mb-2">{cat.name}</h2>
          <p className="text-sm text-gray-500 mb-2">{cat.description}</p>
          <p className="text-sm text-gray-400">Images: {cat.imageCount}</p>
          <button
            className="mt-2 px-2 py-1 bg-emerald-500 text-white rounded"
            onClick={() =>
              handleUpdateCategory(idx, { ...cat, name: cat.name + " ✨" })
            }
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
}
