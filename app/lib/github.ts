// lib/github.ts
import axios from "axios";

/**
 * Commits a file to GitHub
 */
export async function commitToGitHub({
  owner,
  repo,
  branch = "main",
  path,
  message,
  content,
}: {
  owner: string;
  repo: string;
  branch?: string;
  path: string;
  message: string;
  content: string; // base64 encoded
}) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("Missing GITHUB_TOKEN in environment variables");

  let sha: string | undefined;

  // Check if file exists
  try {
    const { data } = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    sha = data.sha;
  } catch (err: any) {
    if (err.response?.status !== 404) throw err;
  }

  // Create or update file
  const { data } = await axios.put(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      message,
      content,
      branch,
      sha,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return data;
}
