module.exports = {
  ga: 'your-ga-id',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    require('@vuepress/plugin-google-analytics'),
    {
      'ga': 'your-ga-id'
    }
  ],
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Author',
        link: '/author/'
      },
      {
        text: 'Blog',
        link: '/articles/'
      }
    ],
    sidebar: [
    ]
  }
}
