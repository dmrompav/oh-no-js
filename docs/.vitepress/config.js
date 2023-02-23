export default {
  title: 'OH NO! JS!',
  description: 'JS functions\' library',
  lastUpdated: true,
  home: '/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }]
  ],
  themeConfig: {
    logo: '/assets/oh-no-js.svg',
    siteTitle: false,
    nav: [
      { text: 'Main', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Documentation', link: '/documentation/' }
    ],
    sidebar: {
      '/documentation/': [
        {
          items: [
            {
              text: 'Documentation',
              link: '/documentation/',
              items: [
                { text: 'Objects', link: '/documentation/objects' },
                { text: 'Arrays', link: '/documentation/arrays' },
                { text: 'Date', link: '/documentation/date' }
              ]
            }
          ]
        }
      ]
    }
  }
}
