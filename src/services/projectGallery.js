// src/services/projectGallery.js

/**
 * Load all images from a specific project gallery folder
 * Folder structure: src/assets/projects/<project-slug>/*
 *
 * Usage:
 *   import loadGallery from '@/services/projectGallery';
 *   const fakeNewsImages = loadGallery('fake-news');
 */
const loadGallery = (projectSlug) => {
  // Vite glob – matches any image inside the folder (png|jpg|jpeg|gif|webp|svg)
  const modules = import.meta.glob('/src/assets/projects/**/*.+(png|jpg|jpeg|gif|webp|svg)', {
    eager: true,      // Load immediately (no lazy)
    import: 'default', // Get the URL string directly
  });

  const folderPath = `/src/assets/projects/${projectSlug}`;

  return Object.keys(modules)
    .filter((path) => path.startsWith(folderPath))
    .map((path) => modules[path]);
};

export default loadGallery;