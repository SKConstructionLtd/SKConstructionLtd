"use client";

import ProtectedRoute from "../ProtectedRoute";
import { useState, useEffect } from "react";
import GalleryAnimations from "../GalleryAnimations";
import GalleryViewer from "../GalleryViewer";
import { Category } from "../types"; // <-- import shared type

export default function DashboardPage() {
  const [unsaved, setUnsaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    import("../../data/categoryconfig").then((mod) => setCategories(mod.default));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    // pushToGitHub function here
    setUnsaved(false);
    setSaving(false);
  };

  return (
    <ProtectedRoute>
      <div className="pt-20 min-h-screen bg-slate-50">
        <GalleryViewer
          categories={categories}
          setCategories={setCategories}
          setUnsaved={setUnsaved}
        />
      </div>
    </ProtectedRoute>
  );
}
