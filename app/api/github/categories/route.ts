import { NextResponse } from 'next/server';

export async function GET() {
  console.log('=== API: Loading Categories ===');
  
  try {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = process.env.GITHUB_REPO || 'SKConstructionLtd/SKConstructionLtd';
    
    console.log('GitHub Token exists:', !!GITHUB_TOKEN);
    console.log('GitHub Token length:', GITHUB_TOKEN?.length);
    console.log('Repository:', REPO);
    
    if (!GITHUB_TOKEN) {
      console.error('❌ GitHub token not configured');
      return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 });
    }

    // Fetch the contents of the images directory
    const url = `https://api.github.com/repos/${REPO}/contents/public/images`;
    console.log('Fetching from URL:', url);
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
      cache: 'no-store',
    });

    console.log('GitHub API Response Status:', response.status);
    console.log('GitHub API Response OK:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ GitHub API Error:', errorText);
      return NextResponse.json({ 
        error: 'Failed to fetch directories',
        details: errorText,
        status: response.status 
      }, { status: 500 });
    }

    const data = await response.json();
    console.log('GitHub API returned items:', data.length);
    
    // Filter only directories
    const directories = data.filter((item: any) => item.type === 'dir');
    console.log('Directories found:', directories.length);
    
    // For each directory, get the image count and first image
    const categoriesWithCounts = await Promise.all(
      directories.map(async (dir: any) => {
        console.log(`Processing directory: ${dir.name}`);
        const imagesUrl = `https://api.github.com/repos/${REPO}/contents/public/images/${dir.name}`;
        
        try {
          const imagesResponse = await fetch(imagesUrl, {
            headers: {
              'Authorization': `Bearer ${GITHUB_TOKEN}`,
              'Accept': 'application/vnd.github.v3+json',
            },
            cache: 'no-store',
          });
          
          if (imagesResponse.ok) {
            const images = await imagesResponse.json();
            const imageFiles = images.filter((file: any) => 
              file.type === 'file' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
            );
            
            console.log(`  - ${dir.name}: ${imageFiles.length} images`);
            
            const firstImage = imageFiles.length > 0 ? `/images/${dir.name}/${imageFiles[0].name}` : undefined;
            
            return {
              slug: dir.name,
              name: formatCategoryName(dir.name),
              description: `${formatCategoryName(dir.name)} images`,
              imageCount: imageFiles.length,
              folder: dir.name,
              firstImage,
            };
          } else {
            console.warn(`  - Failed to fetch images for ${dir.name}: ${imagesResponse.status}`);
          }
        } catch (error) {
          console.error(`  - Error fetching images for ${dir.name}:`, error);
        }
        
        return {
          slug: dir.name,
          name: formatCategoryName(dir.name),
          description: `${formatCategoryName(dir.name)} images`,
          imageCount: 0,
          folder: dir.name,
          firstImage: undefined,
        };
      })
    );

    console.log('✅ Successfully processed categories:', categoriesWithCounts.length);
    return NextResponse.json({ categories: categoriesWithCounts });
    
  } catch (error) {
    console.error('❌ Unexpected error in categories API:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');
    return NextResponse.json({ 
      error: 'Failed to fetch categories',
      message: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// Helper function to format category names
function formatCategoryName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}