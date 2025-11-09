import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || 'SKConstructionLtd/SKConstructionLtd';
const [REPO_OWNER, REPO_NAME] = GITHUB_REPO.split('/');

export async function POST(request: NextRequest) {
  try {
    const { action, category, files, deletePaths } = await request.json();

    console.log('=== API ROUTE: GitHub Operation ===');
    console.log('Action:', action);
    console.log('Category:', category);
    console.log('Files to upload:', files?.length || 0);
    console.log('Files to delete:', deletePaths?.length || 0);

    if (!GITHUB_TOKEN) {
      console.error('❌ Missing GITHUB_TOKEN');
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    const results = {
      uploaded: [] as string[],
      deleted: [] as string[],
      errors: [] as string[]
    };

    // Handle file uploads
    if (files && files.length > 0) {
      for (const file of files) {
        try {
          const { fileName, content, number } = file;
          const uploadUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/public/images/${category}/${fileName}`;
          
          console.log(`Uploading: ${fileName}`);
          
          const uploadResponse = await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
              'Authorization': `token ${GITHUB_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: `Add ${fileName} to ${category}`,
              content: content,
            })
          });

          const uploadResult = await uploadResponse.json();

          if (uploadResponse.ok) {
            console.log(`✅ Uploaded: ${fileName}`);
            results.uploaded.push(fileName);
          } else {
            console.error(`❌ Failed to upload ${fileName}:`, uploadResult);
            results.errors.push(`Failed to upload ${fileName}: ${uploadResult.message}`);
          }
        } catch (error) {
          console.error(`❌ Error uploading file:`, error);
          results.errors.push(`Error uploading file: ${error}`);
        }
      }
    }

    // Handle file deletions
    if (deletePaths && deletePaths.length > 0) {
      for (const imagePath of deletePaths) {
        try {
          const fileName = imagePath.split('/').pop();
          console.log(`Deleting: ${fileName}`);
          
          // Get file SHA
          const getUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/public${imagePath}`;
          const getResponse = await fetch(getUrl, {
            headers: {
              'Authorization': `token ${GITHUB_TOKEN}`,
            }
          });

          if (!getResponse.ok) {
            console.error(`❌ Failed to get SHA for ${fileName}`);
            results.errors.push(`Failed to get SHA for ${fileName}`);
            continue;
          }

          const fileData = await getResponse.json();
          
          // Delete file
          const deleteUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/public${imagePath}`;
          const deleteResponse = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
              'Authorization': `token ${GITHUB_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: `Delete ${fileName} from ${category}`,
              sha: fileData.sha,
            })
          });

          const deleteResult = await deleteResponse.json();

          if (deleteResponse.ok) {
            console.log(`✅ Deleted: ${fileName}`);
            results.deleted.push(fileName);
          } else {
            console.error(`❌ Failed to delete ${fileName}:`, deleteResult);
            results.errors.push(`Failed to delete ${fileName}: ${deleteResult.message}`);
          }
        } catch (error) {
          console.error(`❌ Error deleting file:`, error);
          results.errors.push(`Error deleting file: ${error}`);
        }
      }
    }

    console.log('=== API ROUTE: Complete ===');
    console.log('Results:', results);

    return NextResponse.json(results);
  } catch (error) {
    console.error('=== API ROUTE: Error ===', error);
    return NextResponse.json(
      { error: 'Failed to process GitHub operation' },
      { status: 500 }
    );
  }
}