import GalleryAnimations from '@/components/GalleryAnimations';
import GalleryViewer from '@/components/GalleryViewer';

// Category configuration with folder paths and image counts
const categoryConfig = [
  { name: 'Attenuation Tank', folder: 'attenuation-tank', description: 'Advanced water management systems for sustainable drainage', imageCount: 4, firstImage: 'attenuation-tank-1.jpg' },
  { name: 'Basement', folder: 'basement', description: 'Professional basement construction and conversion projects', imageCount: 1, firstImage: 'basement-1.jpg' },
  { name: 'Basement Pump', folder: 'basement-pump', description: 'Basement pump installation and maintenance services', imageCount: 1, firstImage: 'basement-pump-1.jpg' },
  { name: 'Basement Underpinning', folder: 'basement-underpinning', description: 'Structural underpinning for basement extensions', imageCount: 4, firstImage: 'basement-underpinning-1.jpg' },
  { name: 'Bathroom', folder: 'bathroom', description: 'Complete bathroom renovation and installation', imageCount: 2, firstImage: 'bathroom-1.jpg' },
  { name: 'Bathroom 2', folder: 'bathroom-2', description: 'Additional bathroom projects and designs', imageCount: 2, firstImage: 'bathroom-2-1.jpg' },
  { name: 'Bay Window Waterproofing', folder: 'bay-window-waterproofing', description: 'Waterproofing solutions for bay windows', imageCount: 3, firstImage: 'bay-window-waterproofing-1.jpg' },
  { name: 'Beam and Block', folder: 'beam-and-block', description: 'Beam and block flooring installations', imageCount: 5, firstImage: 'beam-and-block-1.jpg' },
  { name: 'Beam Blockwork', folder: 'beamblockwork', description: 'Structural beam and blockwork construction', imageCount: 10, firstImage: 'beamblockwork-1.jpg' },
  { name: 'Belgravia Patio', folder: 'belgravia-patio', description: 'Premium patio installations in Belgravia', imageCount: 5, firstImage: 'belgravia-patio-1.jpg' },
  { name: 'Blockwork', folder: 'blockwork', description: 'Quality blockwork and masonry services', imageCount: 5, firstImage: 'blockwork-1.jpg' },
  { name: 'Brick Fence', folder: 'brick-fence', description: 'Durable brick fence construction', imageCount: 5, firstImage: 'brick-fence-1.jpg' },
  { name: 'Capping Beam', folder: 'capping-beam', description: 'Capping beam installation for structural integrity', imageCount: 4, firstImage: 'capping-beam-1.jpg' },
  { name: 'Car Charging Point', folder: 'car-charging-point', description: 'Electric vehicle charging point installations', imageCount: 8, firstImage: 'car-charging-point-1.jpg' },
  { name: 'Carpentry', folder: 'carpentry', description: 'Professional carpentry and joinery work', imageCount: 3, firstImage: 'carpentry-1.jpg' },
  { name: 'Carpentry 2', folder: 'carpentry-2', description: 'Additional carpentry projects', imageCount: 6, firstImage: 'carpentry-2-1.jpg' },
  { name: 'Cast Iron Drainage', folder: 'cast-iron-drainage', description: 'Cast iron drainage system installation', imageCount: 2, firstImage: 'cast-iron-drainage-1.jpg' },
  { name: 'Concrete', folder: 'concrete', description: 'Concrete foundation and structural work', imageCount: 3, firstImage: 'concrete-1.jpg' },
  { name: 'Crane Base', folder: 'crane-base', description: 'Heavy-duty crane base construction', imageCount: 3, firstImage: 'crane-base-1.jpg' },
  { name: 'Dawson System', folder: 'dawson-system', description: 'Dawson waterproofing system installations', imageCount: 3, firstImage: 'dawson-system-1.jpg' },
  { name: 'District Heating', folder: 'district-heating', description: 'District heating system installations', imageCount: 3, firstImage: 'district-heating-1.jpg' },
  { name: 'District Heating Replacement', folder: 'district-heating-replacement', description: 'District heating system upgrades and replacements', imageCount: 5, firstImage: 'district-heating-replacement-1.jpg' },
  { name: 'Drainage', folder: 'drainage', description: 'Comprehensive drainage solutions', imageCount: 11, firstImage: 'drainage-1.jpg' },
  { name: 'Electric Ducts Cable', folder: 'electric-ducts-cable', description: 'Electrical ducting and cable installations', imageCount: 11, firstImage: 'electric-ducts-cable-1.jpg' },
  { name: 'Extension', folder: 'extension', description: 'Home extension projects', imageCount: 5, firstImage: 'extension-1.jpg' },
  { name: 'Extension 2', folder: 'extension-2', description: 'Additional extension projects', imageCount: 7, firstImage: 'extension-2-1.jpg' },
  { name: 'Externals', folder: 'externals', description: 'External finishing and landscaping work', imageCount: 5, firstImage: 'externals-1.jpg' },
  { name: 'Fence', folder: 'fence', description: 'Fencing installations and repairs', imageCount: 6, firstImage: 'fence-1.jpg' },
  { name: 'Flat Roof', folder: 'flatroof', description: 'Flat roof installation and maintenance', imageCount: 30, firstImage: 'flatroof-1.jpg' },
  { name: 'Floor Polishing', folder: 'floor-polishing', description: 'Professional floor polishing services', imageCount: 7, firstImage: 'floor-polishing-1.jpg' },
  { name: 'Floor Refurbishment Belgravia', folder: 'floor-refurbishment-belgravia', description: 'Premium floor refurbishment in Belgravia', imageCount: 9, firstImage: 'floor-refurbishment-belgravia-1.jpg' },
  { name: 'Floor Screed', folder: 'floor-screed', description: 'Floor screed installations', imageCount: 4, firstImage: 'floor-screed-1.jpg' },
  { name: 'Foundation', folder: 'foundation', description: 'Deep foundation and excavation work', imageCount: 7, firstImage: 'foundation-1.jpg' },
  { name: 'Foundation 2', folder: 'foundation-2', description: 'Additional foundation projects', imageCount: 17, firstImage: 'foundation-2-1.jpg' },
  { name: 'French Drain', folder: 'french-drain', description: 'French drain installation for water management', imageCount: 4, firstImage: 'french-drain-1.jpg' },
  { name: 'Internals', folder: 'internals', description: 'Internal finishing and renovation work', imageCount: 7, firstImage: 'internals-1.jpg' },
  { name: 'Leak Repair', folder: 'leak-repair', description: 'Professional leak detection and repair', imageCount: 9, firstImage: 'leak-repair-1.jpg' },
  { name: 'Manhole', folder: 'manhole', description: 'Manhole installation and maintenance', imageCount: 8, firstImage: 'manhole-1.jpg' },
  { name: 'Pad Foundation', folder: 'pad-foundation', description: 'Pad foundation construction', imageCount: 2, firstImage: 'pad-foundation-1.jpg' },
  { name: 'Patio', folder: 'patio', description: 'Beautiful patio installations', imageCount: 7, firstImage: 'patio-1.jpg' },
  { name: 'Paved Driveway', folder: 'paved-driveway', description: 'Paved driveway installations', imageCount: 6, firstImage: 'paved-driveway-1.jpg' },
  { name: 'Plastering', folder: 'plastering', description: 'Professional plastering services', imageCount: 3, firstImage: 'plastering-1.jpg' },
  { name: 'Plastering 2', folder: 'plastering-2', description: 'Additional plastering projects', imageCount: 2, firstImage: 'plastering-2-1.jpg' },
  { name: 'Plastering Floor Screed', folder: 'plastering-floor-screed', description: 'Combined plastering and floor screed work', imageCount: 3, firstImage: 'plastering-floor-screed-1.jpg' },
  { name: 'Rain Water Pump Unit', folder: 'rain-water-pump-unit', description: 'Rainwater pump installations', imageCount: 1, firstImage: 'rain-water-pump-unit-1.jpg' },
  { name: 'Raised Patio', folder: 'raised-patio', description: 'Elevated patio construction', imageCount: 11, firstImage: 'raised-patio-1.jpg' },
  { name: 'Reinforced Concrete Framework', folder: 'reinforced-concrete-framework', description: 'Reinforced concrete structural work', imageCount: 5, firstImage: 'reinforced-concrete-framework-1.jpg' },
  { name: 'Remediation Works', folder: 'remediation-works', description: 'Site remediation and restoration', imageCount: 4, firstImage: 'remediation-works-1.jpg' },
  { name: 'Render Basecoat', folder: 'render-basecoat', description: 'Render and basecoat applications', imageCount: 2, firstImage: 'render-basecoat-1.jpg' },
  { name: 'Roofing', folder: 'roofing', description: 'Complete roofing solutions', imageCount: 9, firstImage: 'roofing-1.jpg' },
  { name: 'Sandstone Paving', folder: 'sandstonepaving', description: 'Premium sandstone paving installations', imageCount: 15, firstImage: 'sandstonepaving-1.jpg' },
  { name: 'Setting Out', folder: 'setting-out', description: 'Site setting out and surveying', imageCount: 6, firstImage: 'setting-out-1.jpg' },
  { name: 'Soakaway', folder: 'soakaway', description: 'Soakaway installation for drainage', imageCount: 9, firstImage: 'soakaway-1.jpg' },
  { name: 'Steel Fixing', folder: 'steel-fixing', description: 'Steel reinforcement fixing', imageCount: 6, firstImage: 'steel-fixing-1.jpg' },
  { name: 'Steel Erection', folder: 'steelerection', description: 'Steel frame erection', imageCount: 17, firstImage: 'steelerection-1.jpg' },
  { name: 'Steelwork', folder: 'steelwork', description: 'Structural steelwork installations', imageCount: 3, firstImage: 'steelwork-1.jpg' },
  { name: 'Studio', folder: 'studio', description: 'Studio construction and conversion', imageCount: 12, firstImage: 'studio-1.jpg' },
  { name: 'Sub Station', folder: 'sub-station', description: 'Electrical sub-station installations', imageCount: 6, firstImage: 'sub-station-1.jpg' },
  { name: 'Temporary Work', folder: 'temporary-work', description: 'Temporary works and site support', imageCount: 6, firstImage: 'temporary-work-1.jpg' },
  { name: 'Under Floor Heating', folder: 'under-floor-heating', description: 'Under floor heating installations', imageCount: 4, firstImage: 'under-floor-heating-1.jpg' },
  { name: 'Underpinning', folder: 'underpinning', description: 'Foundation underpinning services', imageCount: 2, firstImage: 'underpinning-1.jpg' },
  { name: 'Water Mains', folder: 'water-mains', description: 'Water mains connection and installation', imageCount: 13, firstImage: 'water-mains-1.jpg' },
  { name: 'Waterproofing', folder: 'water-proofing', description: 'Comprehensive waterproofing solutions', imageCount: 21, firstImage: 'water-proofing-1.jpg' },
  { name: 'Window Replacement', folder: 'window-replacement', description: 'Window replacement and installation', imageCount: 15, firstImage: 'window-replacement-1.jpg' },
];

export default function GalleryPage() {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/foundation/foundation-1.jpg')] bg-cover bg-center"></div>
        </div>
        <GalleryAnimations>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Project <span className="text-emerald-400">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of construction projects across {categoryConfig.length} specialized categories
            </p>
          </div>
        </GalleryAnimations>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryViewer categories={categoryConfig} />
        </div>
      </section>
    </div>
  );
}