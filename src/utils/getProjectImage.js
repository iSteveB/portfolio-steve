export function getProjectImage(imageName) {
  return {
    original: `/assets/images/projects/${imageName}.webp`,
    thumbnail: `/assets/images/projects/${imageName}-mini.webp`,
  };
}