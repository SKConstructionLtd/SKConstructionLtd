import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    if (!category) {
      return NextResponse.json({ error: 'Category parameter required' }, { status: 400 });
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = process.env.GITHUB_REPO || 'SKConstructionLtd/SKConstructionLtd';
    
    if (!GITHUB_TOKEN) {
      return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 });
    }

    const url = `https://api.github.com/repos/${REPO}/contents/public/images/${category}`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ images: [] });
      }
      throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    
    // Filter only image files
    const imageFiles = data
      .filter((file: any) => 
        file.type === 'file' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
      )
      .map((file: any) => ({
        name: file.name,
        path: `/images/${category}/${file.name}`,
        url: `/images/${category}/${file.name}`,
        size: file.size,
      }));

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}