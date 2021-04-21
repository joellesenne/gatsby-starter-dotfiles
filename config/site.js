// Basics
const basics = {
  siteName: 'Gatsby Starter Dotfiles',
  siteDescription: 'Personal dotfiles for projects Gatsby.js',
}

// MetaData
const meta = {
  siteTitle: basics.siteName,
  siteTitleAlt: basics.siteName,
  siteDescription: basics.siteDescription,
  siteHeadline: basics.siteDescription,
  siteTitleManifest: basics.siteName,
  siteUrl: 'https://joellesenne.dev',
  siteLogo: 'image.logo.png',
  siteBanner: '',
  siteLang: 'fr',
  favicon: '',
  author: basics.siteName,
}

// Social
const social = {
  userName: '@joellesenne',
  userSlug: 'joellesenne',
}

// Manifest
const manifest = {
  themeColor: '#d4d4f7',
  backgroundColor: '#0e0f4f',
}

// WebSite
const website = {
  pathPrefix: '/',
  blogPostDir: 'blog',
  projectPostDir: 'projects',
  ...meta,
  ...social,
  ...manifest,
  googleAnalyticsID: 'XX-XXXXXXXX-X',
}
module.exports = website
