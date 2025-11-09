import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { category, fileName, content, isDelete, sha } = await request.json();
    
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = process.env.GITHUB_REPO || 'SKConstructionLtd/SKConstructionLtd';
    
    if (!GITHUB_TOKEN) {
      return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 });
    }

    const filePath = `public/images/${category}/${fileName}`;
    const url = `https://api.github.com/repos/${REPO}/contents/${filePath}`;

    if (isDelete) {
      // Delete file
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          message: `Delete ${fileName}`,
          sha: sha,
          branch: 'main',
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        return NextResponse.json({ error }, { status: response.status });
      }

      return NextResponse.json({ success: true });
    } else {
      // Upload file
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          message: `Add ${fileName}`,
          content: content,
          branch: 'main',
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        return NextResponse.json({ error }, { status: response.status });
      }

      const result = await response.json();
      return NextResponse.json({ success: true, data: result });
    }
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Get file SHA for deletion
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const fileName = searchParams.get('fileName');
    
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = process.env.GITHUB_REPO || 'SKConstructionLtd/SKConstructionLtd';
    
    const filePath = `public/images/${category}/${fileName}`;
    const url = `https://api.github.com/repos/${REPO}/contents/${filePath}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const data = await response.json();
    return NextResponse.json({ sha: data.sha });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}