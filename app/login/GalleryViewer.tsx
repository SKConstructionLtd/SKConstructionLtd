"use client";

import { useState, useEffect } from "react";
import { Upload, Trash2, Save, FolderOpen, FileImage, X, Check } from "lucide-react";
import GalleryViewer from "./GalleryViewer";

// Types
interface Category {
  name: string;
  description: string;
  imageCount: number;
  slug: string;
}

interface ImageFile {
  name: string;
  path: string;
  url: string;
  size?: number;
}

interface Message {
  type: 'success' | 'error';
  text: string;
}

// Message Component
function MessageBanner({ message }: { message: Message }) {
  return (
    <div className={`max-w-7xl mx-auto mb-6 p-4 rounded-lg ${
      message.type === 'success' 
        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
        : 'bg-red-50 text-red-800 border border-red-200'
    }`}>
      {message.text}
    </div>
  );
}

// Category Sidebar Component
function CategorySidebar({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}: { 
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (slug: string) => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
      <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <FolderOpen className="w-5 h-5" />
        Categories
      </h2>
      <div className="space-y-1 max-h-[600px] overflow-y-auto">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onCategorySelect(cat.slug)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selectedCategory === cat.slug
                ? 'bg-emerald-500 text-white'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <div className="font-medium text-sm">{cat.name}</div>
            <div className="text-xs opacity-75">{cat.imageCount} images</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Empty State Component
function EmptyState() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
      <FileImage className="w-16 h-16 mx-auto text-slate-300 mb-4" />
      <h3 className="text-xl font-semibold text-slate-700 mb-2">Select a Category</h3>
      <p className="text-slate-500">Choose a category from the sidebar to manage its images</p>
    </div>
  );
}

// Category Header Component
function CategoryHeader({
  categoryName,
  imageCount,
  uploadQueueCount,
  deleteQueueCount,
  unsavedChanges,
  loading,
  onFileUpload,
  onSaveToGitHub
}: {
  categoryName: string;
  imageCount: number;
  uploadQueueCount: number;
  deleteQueueCount: number;
  unsavedChanges: boolean;
  loading: boolean;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveToGitHub: () => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="font-semibold text-lg text-slate-800">{categoryName}</h2>
          <p className="text-sm text-slate-500">
            {imageCount} existing images
            {uploadQueueCount > 0 && ` • ${uploadQueueCount} to upload`}
            {deleteQueueCount > 0 && ` • ${deleteQueueCount} to delete`}
          </p>
        </div>
        <div className="flex gap-2">
          <label className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Add Images
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={onFileUpload}
              className="hidden"
            />
          </label>
          {unsavedChanges && (
            <button
              onClick={onSaveToGitHub}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {loading ? 'Saving...' : 'Push to GitHub'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Upload Queue Component
function UploadQueue({
  uploadQueue,
  onRemove
}: {
  uploadQueue: File[];
  onRemove: (index: number) => void;
}) {
  if (uploadQueue.length === 0) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
        <Upload className="w-4 h-4" />
        Pending Uploads ({uploadQueue.length})
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {uploadQueue.map((file, idx) => (
          <div key={idx} className="relative group bg-white rounded-lg p-2 border border-blue-200">
            <div className="aspect-square bg-slate-100 rounded mb-2 flex items-center justify-center">
              <FileImage className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-xs text-slate-700 truncate">{file.name}</p>
            <button
              onClick={() => onRemove(idx)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Image Grid Component
function ImageGrid({
  images,
  deleteQueue,
  loading,
  onToggleDelete
}: {
  images: ImageFile[];
  deleteQueue: string[];
  loading: boolean;
  onToggleDelete: (path: string) => void;
}) {
  if (loading && images.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
        <div className="text-center py-12 text-slate-500">Loading images...</div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
        <div className="text-center py-12 text-slate-500">No images in this category</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
      <h3 className="font-semibold text-lg mb-4">Existing Images</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative group rounded-lg overflow-hidden border-2 transition-all ${
              deleteQueue.includes(img.path)
                ? 'border-red-500 opacity-50'
                : 'border-slate-200'
            }`}
          >
            <div className="aspect-square bg-slate-100">
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/400x400/e2e8f0/64748b?text=Image+Not+Found';
                }}
              />
            </div>
            <div className="p-2 bg-white">
              <p className="text-xs text-slate-700 truncate">{img.name}</p>
            </div>
            <button
              onClick={() => onToggleDelete(img.path)}
              className={`absolute top-2 right-2 p-2 rounded-full transition-all ${
                deleteQueue.includes(img.path)
                  ? 'bg-emerald-500 text-white'
                  : 'bg-red-500 text-white opacity-0 group-hover:opacity-100'
              }`}
            >
              {deleteQueue.includes(img.path) ? (
                <Check className="w-4 h-4" />
              ) : (
                <Trash2 className="w-4 h-4" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function DashboardPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [uploadQueue, setUploadQueue] = useState<File[]>([]);
  const [deleteQueue, setDeleteQueue] = useState<string[]>([]);
  const [message, setMessage] = useState<Message | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'gallery'>('grid');

  // Load categories from API
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    console.log('=== LOADING CATEGORIES ===');
    setLoading(true);
    
    try {
      const response = await fetch('/api/github/categories');
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      const data = await response.json();
      console.log('Categories loaded:', data.categories.length);
      setCategories(data.categories);
      console.log('✅ SUCCESS: Categories loaded');
    } catch (error) {
      console.error('❌ FAILED: Error loading categories', error);
      showMessage('error', 'Failed to load categories');
      
      // Fallback to default categories
      const defaultCategories: Category[] = [
        { name: "Attenuation Tank", slug: "attenuation-tank", description: "Water storage systems", imageCount: 0 },
        { name: "Basement", slug: "basement", description: "Basement construction", imageCount: 0 },
        { name: "Foundation", slug: "foundation", description: "Foundation works", imageCount: 0 },
      ];
      setCategories(defaultCategories);
    } finally {
      setLoading(false);
      console.log('=== LOADING COMPLETE ===\n');
    }
  };

  const loadCategoryImages = async (categorySlug: string) => {
    console.log('=== LOADING CATEGORY IMAGES ===');
    console.log('Category:', categorySlug);
    
    setLoading(true);
    try {
      const response = await fetch(`/api/github/images?category=${categorySlug}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      
      const data = await response.json();
      console.log('Images loaded:', data.images.length);
      setImages(data.images);
      
      // Update category image count
      setCategories(prev => prev.map(cat => 
        cat.slug === categorySlug 
          ? { ...cat, imageCount: data.images.length }
          : cat
      ));
      
      console.log('✅ SUCCESS: Images loaded successfully');
    } catch (error) {
      console.error('❌ FAILED: Error loading images', error);
      showMessage('error', 'Failed to load images');
      setImages([]);
    } finally {
      setLoading(false);
      console.log('=== LOADING COMPLETE ===\n');
    }
  };

  const handleCategorySelect = (categorySlug: string) => {
    console.log('=== CATEGORY SELECTION ===');
    console.log('Selected category:', categorySlug);
    
    if (unsavedChanges) {
      console.log('Unsaved changes detected - prompting user');
      if (!confirm("You have unsaved changes. Continue anyway?")) {
        console.log('User cancelled category change');
        return;
      }
      console.log('User confirmed - discarding changes');
    }
    
    setSelectedCategory(categorySlug);
    setUploadQueue([]);
    setDeleteQueue([]);
    setUnsavedChanges(false);
    console.log('Queues cleared, loading images...');
    loadCategoryImages(categorySlug);
    console.log('=== CATEGORY SELECTION COMPLETE ===\n');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('=== FILE UPLOAD STARTED ===');
    const files = Array.from(e.target.files || []);
    console.log('Total files selected:', files.length);
    
    const validFiles = files.filter(f => f.type.startsWith('image/'));
    console.log('Valid image files:', validFiles.length);
    
    if (validFiles.length !== files.length) {
      console.warn('Some non-image files were filtered out');
      showMessage('error', 'Only image files are allowed');
    }
    
    setUploadQueue(prev => [...prev, ...validFiles]);
    setUnsavedChanges(true);
    console.log('=== FILE UPLOAD COMPLETE ===\n');
  };

  const removeFromUploadQueue = (index: number) => {
    console.log('=== REMOVING FILE FROM UPLOAD QUEUE ===');
    console.log('Removing file at index:', index);
    
    setUploadQueue(prev => prev.filter((_, i) => i !== index));
    
    if (uploadQueue.length === 1 && deleteQueue.length === 0) {
      setUnsavedChanges(false);
    }
    console.log('=== REMOVE COMPLETE ===\n');
  };

  const markImageForDeletion = (imagePath: string) => {
    console.log('=== TOGGLING IMAGE DELETION ===');
    console.log('Image path:', imagePath);
    
    if (deleteQueue.includes(imagePath)) {
      setDeleteQueue(prev => prev.filter(p => p !== imagePath));
    } else {
      setDeleteQueue(prev => [...prev, imagePath]);
    }
    
    setUnsavedChanges(true);
    console.log('=== TOGGLE COMPLETE ===\n');
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleSaveToGitHub = async () => {
    if (!selectedCategory) return;
    
    setLoading(true);
    console.log('=== STARTING GITHUB PUSH ===');
    console.log('Selected Category:', selectedCategory);
    console.log('Files to Upload:', uploadQueue.length);
    console.log('Files to Delete:', deleteQueue.length);
    
    try {
      const currentImageCount = images.length;
      
      // Upload new images
      for (let i = 0; i < uploadQueue.length; i++) {
        const file = uploadQueue[i];
        const newNumber = currentImageCount + i + 1;
        const fileExtension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
        const newFileName = selectedCategory === 'logo' 
          ? 'logo.png' 
          : `${selectedCategory}-${newNumber}.${fileExtension}`;
        
        console.log('Uploading:', newFileName);
        
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const result = reader.result as string;
            resolve(result.split(',')[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        
        const response = await fetch('/api/github/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            category: selectedCategory,
            fileName: newFileName,
            content: base64,
            isDelete: false,
          }),
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(`Upload failed: ${JSON.stringify(error)}`);
        }
        
        console.log('✅ Uploaded:', newFileName);
      }
      
      // Delete images
      for (const imagePath of deleteQueue) {
        const fileName = imagePath.split('/').pop()!;
        console.log('Deleting:', fileName);
        
        // Get SHA first
        const shaResponse = await fetch(
          `/api/github/upload?category=${selectedCategory}&fileName=${fileName}`
        );
        
        if (!shaResponse.ok) continue;
        
        const { sha } = await shaResponse.json();
        
        // Delete file
        const response = await fetch('/api/github/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            category: selectedCategory,
            fileName: fileName,
            isDelete: true,
            sha: sha,
          }),
        });
        
        if (response.ok) {
          console.log('✅ Deleted:', fileName);
        }
      }
      
      console.log('\n=== GITHUB PUSH COMPLETE ===');
      showMessage('success', `Successfully saved ${uploadQueue.length + deleteQueue.length} changes to GitHub`);
      setUploadQueue([]);
      setDeleteQueue([]);
      setUnsavedChanges(false);
      loadCategoryImages(selectedCategory);
    } catch (error) {
      console.error('\n=== GITHUB PUSH FAILED ===');
      console.error('Error:', error);
      showMessage('error', `Failed to save: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const selectedCategoryData = categories.find(c => c.slug === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Image Manager</h1>
            <p className="text-slate-600">Manage images for each category and push changes to GitHub</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('gallery')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'gallery' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              Gallery View
            </button>
          </div>
        </div>
      </div>

      {message && <MessageBanner message={message} />}

      {viewMode === 'gallery' ? (
        <div className="max-w-7xl mx-auto">
          <GalleryViewer
            categories={categories}
            setCategories={setCategories}
            setUnsaved={setUnsavedChanges}
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </div>

          <div className="lg:col-span-3">
            {!selectedCategory ? (
              <EmptyState />
            ) : (
              <div className="space-y-6">
                <CategoryHeader
                  categoryName={selectedCategoryData?.name || ''}
                  imageCount={images.length}
                  uploadQueueCount={uploadQueue.length}
                  deleteQueueCount={deleteQueue.length}
                  unsavedChanges={unsavedChanges}
                  loading={loading}
                  onFileUpload={handleFileUpload}
                  onSaveToGitHub={handleSaveToGitHub}
                />

                <UploadQueue
                  uploadQueue={uploadQueue}
                  onRemove={removeFromUploadQueue}
                />

                <ImageGrid
                  images={images}
                  deleteQueue={deleteQueue}
                  loading={loading}
                  onToggleDelete={markImageForDeletion}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}