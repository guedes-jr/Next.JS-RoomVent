// next.config.js
const isCI = process.env.GITHUB_ACTIONS === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  // Se for GitHub Pages de projeto (https://user.github.io/<repo>), ative basePath/assetPrefix:
  ...(isCI && repo
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),
  // trailingSlash opcional para evitar redirects no Pages:
  // trailingSlash: true,
}
