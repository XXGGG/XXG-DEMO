import { defineConfig } from 'histoire'

export default defineConfig({
  histoire: {
    // your Histoire configuration
  },
  tree: {
    groups: [
      {
        id: 'top',
        title: '', // No toggle
      },
      {
        title: 'My Group',
        include: file => /Code gen|Controls|Docs/.test(file.title),
      },
      {
        title: 'Components',
        include: file => !file.title.includes('Serialize'),
      },
      {
        title: 'Others',
        include: file => true,
      },
    ],
  },
  theme: {
    title: 'XG-DEMO',
    logoHref: 'https://github.com/XXGGG',
    favicon: './favicon.ico',
  }
})